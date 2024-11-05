import express from "express";
import router from "./routes/router.js";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import itineraryDbBackup from "./utils/itinerary-db-backup.js";

config();
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use("/countries", router);
//test

app.use("/countries", router);

//This function is used to backup the database for itinerary table
// itineraryDbBackup();

app.get("/", (_req, _res) => {
  _res.send("Welcome to laVoyage itinerary builder");
});

app.listen(PORT, () => {
  console.log(`server running on port, ${BASE_URL}${PORT}`);
});
