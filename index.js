import express from "express";
import router from "./routes/router.js";

const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/countries", router);

app.get("/", (_req, _res) => {
  _res.send("Welcome to laVoyage");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
