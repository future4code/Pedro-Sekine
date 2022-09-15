import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusines";
import { InputNewConnectionDTO } from "../model/InputNewConnectionDTO";
import { InputUserDTO } from "../model/InputUserDTO";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      console.log("chegou");
      const { name, email, password } = req.body;

      const newUser: InputUserDTO = { name, email, password };
      // console.log("passou por aqui", newUser)
      const userBusiness = new UserBusiness();
      await userBusiness.createUser(newUser);

      res.status(201).send("Success");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public createConnection = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { idUserOne, idUserTwo } = req.body;

      const inputNewConnection: InputNewConnectionDTO = {
        idUserOne,
        idUserTwo,
      };
      const userBusiness = new UserBusiness();
      await userBusiness.createConnection(inputNewConnection);

      res.status(201).send("The two users are now connected.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public deleteConnection = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.body;

      const connectionID: string = id;

      const userBusiness = new UserBusiness();
      await userBusiness.deleteConnection(connectionID);

      res.send("Connection deleted.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
