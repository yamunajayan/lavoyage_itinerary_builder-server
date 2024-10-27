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

//adding the newly generated itinerary to dB
const addItinerarytoDB = async (newItineraryObj) => {
  const itineraryForDB = {
    ...newItineraryObj,
    itinerary: JSON.stringify(newItineraryObj.itinerary),
    cities_included: JSON.stringify(newItineraryObj.cities_included), // Stringify only for DB insert
  };
  try {
    const data = await knex("itineraries").insert(itineraryForDB);
  } catch (error) {
    console.error(error);
  }
};

const getItinerary = async (req, res) => {
  const { countryName } = req.params;
  const numberOfDays = req.body.number_of_days;
  const month = req.body.month;
  const travelBy = req.body.travel_by; //for future implementation
  const citiesIncluded = req.body.cities_included;

  const buildItinerary = (countryId, newIti) => {
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

  const sortedCitiyIncluded = citiesIncluded
    .map((city) => city.toLowerCase())
    .sort();

  const itinerary = await knex("itineraries")
    .where({
      country_id: country.id,
      days_to_spend: numberOfDays,
    })
    .whereRaw(
      `
    (
      SELECT ARRAY_AGG(city ORDER BY city)
      FROM (
        SELECT LOWER(city::text) as city
        FROM json_array_elements_text(cities_included::json) as city
      ) sorted_cities
    ) = ?::text[]
  `,
      [sortedCitiyIncluded]
    )
    .first();

  if (itinerary) {
    // Matching itinerary found with exact cities
    return res.status(200).json(itinerary);
  } else {
    // Handle case where no matching itinerary exists
    const newIti = await chatgptOpenAifunction(
      countryName,
      numberOfDays,
      citiesIncluded,
      month
    );

    const newItinerary = buildItinerary(country.id, newIti);
    await addItinerarytoDB(newItinerary); // Uncomment to save in the database
    return res.status(200).json(newItinerary);
  }
};

export { all, getOne, getItinerary };
