import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };

      this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
