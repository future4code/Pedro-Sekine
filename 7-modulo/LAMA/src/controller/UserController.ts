import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { LoginInputDTO } from "../model/DTOs/LoginInputDTO";
import { UserInputDTO } from "../model/DTOs/UserInputDTO";

export class UserController {
  async signup(req: Request, res: Response) {
    try {
      const input: UserInputDTO = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(input);

      res.status(201).send({ token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const loginData: LoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.getUserByEmail(loginData);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }
}
