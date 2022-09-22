import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputUserDTO } from "../model/InputUserDTO";
import { User } from "../types/User";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      const newUser: InputUserDTO = { email, name, password };
      await userBusiness.create(newUser);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const userBusiness = new UserBusiness();
      const getResult: User[] = await userBusiness.getAllUsers();

      res.status(200).send(getResult);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
