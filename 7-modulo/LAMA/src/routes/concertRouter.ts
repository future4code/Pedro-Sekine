import express from "express";
import { ConcertBusiness } from "../business/ConcertBusiness";
import { ConcertController } from "../controller/ConcertController";
import { ConcertDatabase } from "../data/ConcertDatabase";

export const concertRouter = express.Router();

// const bandDatabase = new BandDatabase();
// const bandBusiness = new BandBusiness(bandDatabase);
// const bandController = new BandController(bandDatabase, bandBusiness);

// bandRouter.post("/signup", bandController.signup);
// bandRouter.get("/:query", bandController.searchBand)
const concertDatabase = new ConcertDatabase();
const concertBusiness = new ConcertBusiness(concertDatabase);
const concertController = new ConcertController(concertBusiness);

concertRouter.post("/signup", concertController.signup);
concertRouter.get("/schedule/:weekDay", concertController.getConcerts)
