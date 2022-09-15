import { CustomError } from "../errors/CustomError";
import { DatabaseConnectionDTO } from "../model/DatabaseConnectionDTO";
import { databaseNewConnectionDTO } from "../model/databaseNewConnectionDTO";
import { DatabaseUserDTO } from "../model/DatabaseUserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createConnection = async (
    userObject: databaseNewConnectionDTO
  ): Promise<void> => {
    try {
      // trocar nomes do objeto que está chegando.
      const databaseUserObject: DatabaseConnectionDTO = {
        id: userObject.id,
        user_id_one: userObject.idUserOne,
        user_id_two: userObject.idUserTwo,
      };
      await UserDatabase.connection("labook_connections").insert(
        databaseUserObject
      );
    } catch (error: any) {
      console.log(error.message);
      throw new CustomError(400, "Unexpected Error. Please try again.");
    }
  };

  public createUser = async (newUserData: DatabaseUserDTO): Promise<void> => {
    try {
      await UserDatabase.connection("labook_users").insert(newUserData);
    } catch (error: any) {
      throw new CustomError(400, "Unexpected Error. Please try again.");
    }
  };

  public findUserByID = async (userID: string): Promise<DatabaseUserDTO[]> => {
    try {
      const queryResult = await UserDatabase.connection("labook_users").where(
        "id",
        userID
      );
      return queryResult;
    } catch (error: any) {
      throw new CustomError(400, "Unexpected Error. Please try again.");
    }
  };

  public findConnectionByID = async (
    connectionID: string
  ): Promise<DatabaseConnectionDTO[]> => {
    try {
      const queryResult = await UserDatabase.connection(
        "labook_connections"
      ).where("id", connectionID);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(400, "Unexpected Error. Please try again.");
    }
  };

  public deleteConnection = async (inputID: string): Promise<void> => {
    await UserDatabase.connection("labook_connections")
      .where("id", inputID)
      .del();
  };
}
