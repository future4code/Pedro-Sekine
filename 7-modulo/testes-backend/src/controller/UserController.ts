import express, { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../errors/CustomError";
import { UserValidator } from "../model/userValidator";

export class UserController {
  constructor(public userBusiness: UserBusiness) {}

  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const { name, role, email, password } = req.body;
      const result = await this.userBusiness.signup(
        name,
        email,
        password,
        role
      );
      res.status(200).send(result);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const result = await this.userBusiness.login(email, password);
      res.status(200).send(result);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public getProfileById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userValidator = new UserValidator();
      const user = await this.userBusiness.getProfileById(
        id,
        userValidator.validation
      );
      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };
}
