import express from "express";
import * as countryController from "../controller/country-controller.js";

const router = express.Router();

router.route("/").get(countryController.all);

export default router;
