import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

//For future implementation, to show all itineraries

const all = async (_req, res) => {
  try {
    const data = await knex("itineraries");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving countries: ${err}`);
  }
};
