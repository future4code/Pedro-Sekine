import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { InputRegisterBandDTO } from "../model/DTOs/InputRegisterBandDTO";
import { validatorBandExistance } from "../constants/validatorBandExistance";
import { validatorToken } from "../constants/validatorToken";
import { validatorTokenPermission } from "../constants/validatorTokenPermission";
import { BandRepository } from "../model/BandRepository";
import { OutputBandDTO } from "../model/OutputBandDTO";

export class BandController {
  constructor(
    private bandDatabase: BandRepository,
    private bandBusiness: BandBusiness
  ) {}
  public signup = async (
    req: Request,
    res: Response
  ): Promise<Response | undefined> => {
    try {
      const token = req.headers.authorization;
      const { name, musicGenre, responsible } = req.body;

      const inputUser: InputRegisterBandDTO = {
        token,
        name,
        musicGenre,
        responsible,
      };

      await this.bandBusiness.signup(
        inputUser,
        validatorToken,
        validatorTokenPermission,
        validatorBandExistance
      );

      return res.status(201).send("Band registered.");
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };
  public searchBand = async (req: Request, res: Response): Promise<void> => {
    try {
      const { query } = req.params;

      const queryResult:OutputBandDTO = await this.bandBusiness.searchBand(query)

      res.status(200).send(queryResult)

    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };
}
