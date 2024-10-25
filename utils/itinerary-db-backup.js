import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const itineraryDbBackup = () => {
  const exportDataToJSON = async () => {
    try {
      // Fetch all data from the "itineraries" table (replace with your table name)
      const data = await knex("itineraries").select("*");

      // Convert the data to a JSON string
      const jsonData = JSON.stringify(data, null, 2); // 2 for pretty printing

      // Write the JSON string to a file
      fs.writeFileSync("itineraries_backup.json", jsonData, "utf-8");

      console.log("Data successfully saved to itineraries_backup.json");
    } catch (error) {
      console.error("Error exporting data to JSON:", error);
    }
  };

  exportDataToJSON();
};

export default itineraryDbBackup;
