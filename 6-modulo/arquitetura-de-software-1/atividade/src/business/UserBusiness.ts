import { UserData } from "../data/UserData";
import { v4 as generateID } from "uuid";

export class UserBusiness {
  public createUser = async (bodyInput: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      if (!bodyInput.name || !bodyInput.email || !bodyInput.password) {
        throw new Error(
          "Requisição incompleta. Preencha name, email e password."
        );
      }
      if (bodyInput.password.length < 8) {
        throw new Error("Senha deve contar pelo menos 8 dígitos");
      }

      const newUser = {
        id: generateID(),
        name: bodyInput.name,
        email: bodyInput.email,
        password: bodyInput.password,
      };

      const userData = new UserData();
      await userData.createUser(newUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getAllUsers = async (): Promise<
    { id: string; name: string; email: string; password: string }[]
  > => {
    try {
      const userData = new UserData();
      const getResult = await userData.getAllUsers();
      return getResult;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (id: string): Promise<void> => {
    try {
        const userData = new UserData
        await userData.deleteUser(id)
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

// check email to see whether it's unique or not
