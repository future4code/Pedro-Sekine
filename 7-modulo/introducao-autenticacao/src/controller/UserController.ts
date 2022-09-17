import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputLoginDTO } from "../model/InputLoginDTO";
import { InputSignupDTO } from "../model/InputSignupDTO";

export class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const inputSignup: InputSignupDTO = { email, password };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.signup(inputSignup);

      res.send(`token generated: ${token}`);
    } catch (error: any) {
      res.send(error.message);
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const inputLogin: InputLoginDTO = { email, password };
      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(inputLogin);

      res.send(`token generated: ${token}`);
    } catch (error: any) {
      res.send(error.message);
    }
  };

  public getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;

      const userBusiness = new UserBusiness()
      const queryResult = await userBusiness.getProfile(token)

      res.send(queryResult)
    } catch (error: any) {
      res.send(error.message);
    }
  };
}
