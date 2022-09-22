import { DatabaseLoginDTO } from "../model/DatabaseLoginDTO";
import { DatabaseUserDTO } from "../model/DatabaseUserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public signup = async (newUser: DatabaseUserDTO): Promise<void> => {
    try {
      await UserDatabase.connection("aula_autenticacao_signup").insert(newUser);
    } catch (error: any) {
      throw new Error("Something went wrong. Please try again.");
    }
  };

  public login = async (
    newUser: DatabaseLoginDTO
  ): Promise<DatabaseUserDTO[]> => {
    try {
      const queryResult = await UserDatabase.connection(
        "aula_autenticacao_signup"
      ).where("email", newUser.email);

      return queryResult;
    } catch (error: any) {
      throw new Error("Something went wrong. Please try again.");
    }
  };

  public getProfile = async (userID: string): Promise<DatabaseUserDTO> => {
    try {
      const queryResult = await UserDatabase.connection("aula_autenticacao_signup"
      ).where("id", userID);

      return queryResult[0]
    } catch (error: any) {
      throw new Error("Something went wrong. Please try again.");
    }
  };
}
