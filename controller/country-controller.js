import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

import chatgptOpenAifunction from "../utils/chatgpt-OpenAI-function.js";

const all = async (_req, res) => {
  try {
    const data = await knex("countries");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving countries: ${err}`);
  }
};

const getOne = async (req, res) => {
  const { countryName } = req.params;
  try {
    const data = await knex("countries")
      .select(
        "countries.*", // Select all country fields
        knex.raw("JSON_AGG(cities) as cities") // Aggregate associated cities into a JSON array
      )
      .leftJoin("cities", "countries.id", "cities.country_id") // Join the cities table
      .whereRaw("LOWER(countries.country_name) = ?", [
        countryName.toLowerCase(),
      ])
      .groupBy("countries.id"); // Group by the country id to avoid duplicate rows

    if (data.length === 0) {
      return res.status(404).send("Country not found");
    }

    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).send("Error retriving country by name");
  }
};

const addItinerarytoDB = async (newItineraryObj) => {
  const itineraryForDB = {
    ...newItineraryObj,
    itinerary: JSON.stringify(newItineraryObj.itinerary),
    cities_included: JSON.stringify(newItineraryObj.cities_included), // Stringify only for DB insert
  };
  try {
    const data = await knex("itineraries").insert(itineraryForDB);
  } catch (error) {
    console.log(error);
  }
};

const getItinerary = async (req, res) => {
  const { countryName } = req.params;
  const numberOfDays = req.body.number_of_days;
  const month = req.body.month;
  const travelBy = req.body.travel_by;
  const citiesIncluded = req.body.cities_included;

  const buildItinerary = (countryId, newIti) => {
    // console.log(countryId);
    const newItineraryObj = {
      country_id: countryId,
      itinerary: JSON.parse(newIti),
      days_to_spend: numberOfDays,
      cities_included: citiesIncluded,
    };

    return newItineraryObj;
  };

  const country = await knex("countries")
    .where("country_name", "ILIKE", countryName)
    .first();

  if (!country) {
    return res.status(404).send("Country not found");
  }

  const itinerary = await knex("itineraries")
    .where({
      country_id: country.id,
      days_to_spend: numberOfDays,
    })
    .first();

  if (itinerary) {
    const itineraryCities = itinerary.cities_included;
    const sortedItineraryCities = itineraryCities
      .map((city) => city.toLowerCase())
      .sort();
    const sortedCitiesIncluded = citiesIncluded
      .map((city) => city.toLowerCase())
      .sort();

    if (
      sortedCitiesIncluded.length === sortedItineraryCities.length &&
      sortedCitiesIncluded.every(
        (city, index) => city === sortedItineraryCities[index]
      )
    ) {
      res.status(200).json(itinerary);
    } else {
      const newIti = chatgptOpenAifunction(
        countryName,
        numberOfDays,
        citiesIncluded,
        month
      );
      console.log(newIti);
      const newItinerary = buildItinerary(country.id);
      res.status(200).json(newItinerary);
    }
  } else {
    const newIti = await chatgptOpenAifunction(
      countryName,
      numberOfDays,
      citiesIncluded,
      month
    );
    console.log(newIti);
    if (newIti.length > 0) {
      const newItinerary = buildItinerary(country.id, newIti);
      addItinerarytoDB(newItinerary);
      res.status(200).json(newItinerary);
    }
  }
};

export { all, getOne, getItinerary };
