import express from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandController } from "../controller/BandController";
import { BandDatabase } from "../data/BandDatabase";

export const bandRouter = express.Router();

const bandDatabase = new BandDatabase();
const bandBusiness = new BandBusiness(bandDatabase);
const bandController = new BandController(bandDatabase, bandBusiness);

bandRouter.post("/signup", bandController.signup);
bandRouter.get("/:query", bandController.searchBand)
