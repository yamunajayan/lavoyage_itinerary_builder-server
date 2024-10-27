import express from "express";
import router from "./routes/router.js";
import cors from "cors";
import { config } from "dotenv";
import itineraryDbBackup from "./utils/itinerary-db-backup.js";

config();
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/countries", router);
//test

app.use("/countries", router);

itineraryDbBackup();

app.get("/", (_req, _res) => {
  _res.send("Welcome to laVoyage itinerary builder");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
