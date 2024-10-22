import express from "express";
import router from "./routes/router.js";

const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/countries", router);
//test

app.get("/", (_req, _res) => {
  _res.send("Welcome to laVoyage itinerary builder");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
