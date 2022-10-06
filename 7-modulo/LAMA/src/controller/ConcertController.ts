import { Request, Response } from "express";
import { ConcertBusiness } from "../business/ConcertBusiness";
import { InputSignupConcertDTO } from "../model/InputSignupConcertDTO";
import { OutputGetConcertsDTO } from "../model/OutputGetConcertsDTO";

export class ConcertController {
  constructor(private concertBusiness: ConcertBusiness) {}
  public signup = async (req: Request, res: Response) => {
    try {
      const { weekDay, startTime, endTime, id } = req.body;

      const userInput: InputSignupConcertDTO = {
        weekDay,
        startTime,
        endTime,
        id,
      };

      await this.concertBusiness.signup(userInput);

      res.status(201).send("Concert successfuly schedule.");
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getConcerts = async (req: Request, res: Response): Promise<void> => {
    try {
      const { weekDay } = req.params;

      const queryResult: OutputGetConcertsDTO[] =
        await this.concertBusiness.getConcerts(weekDay);

      res.status(200).send(queryResult);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };
}
