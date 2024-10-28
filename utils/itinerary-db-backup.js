//This function reads the backup itinerary data from database itinerary table
//returns the file in seed ready format
import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const itineraryDbBackup = () => {
  const exportDataToJSON = async () => {
    try {
      const data = await knex("itineraries").select("*").orderBy("id", "asc");
      const jsonData = JSON.stringify(data, null, 2); // 2 for pretty printing
      fs.writeFileSync(
        "./backup_data/itineraries_backup.json",
        jsonData,
        "utf-8"
      );

      console.log("Data successfully saved to itineraries_backup.json");
    } catch (error) {
      console.error("Error exporting data to JSON:", error);
    }
  };

  exportDataToJSON();
};

export default itineraryDbBackup;
