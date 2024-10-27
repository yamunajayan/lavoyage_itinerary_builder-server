import fs from "fs";

//This function reads the backup itinerary data from backup_data folder and
//returns the file in seed ready format
const readItineraryBackupData = () => {
  const itinerarayData = fs.readFileSync(
    "./backup_data/itineraries_backup.json"
  );
  const itinerarayDataObj = JSON.parse(itinerarayData);

  const formattedItineraryBackupData = itinerarayDataObj.map(
    (itineraryEntry) => ({
      ...itineraryEntry,
      itinerary: JSON.stringify(itineraryEntry.itinerary),
      good_to_travel: JSON.stringify(itineraryEntry.good_to_travel),
      cities_included: JSON.stringify(itineraryEntry.cities_included),
    })
  );

  return formattedItineraryBackupData;
};

export default readItineraryBackupData;
