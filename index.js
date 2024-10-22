import express from "express";
import router from "./routes/router.js";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/countries", router);

app.get("/", (_req, _res) => {
  _res.send("Welcome to laVoyage");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
