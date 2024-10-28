import readItineraryBackupData from "../utils/read_backup_data.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("itineraries").del();

  const itinerayData = readItineraryBackupData();

  // Remove the id field from each record
  const cleanedData = itinerayData.map(({ id, ...rest }) => rest);

  // Inserts seed entries
  await knex("itineraries").insert(cleanedData);
}
