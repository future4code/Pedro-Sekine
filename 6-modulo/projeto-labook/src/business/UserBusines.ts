import { IncompleteUser } from "../errors/IncompleteUser";
import { DatabaseUserDTO } from "../model/DatabaseUserDTO";
import { UserDatabase } from "../data/UserDatabase";
import { InputUserDTO } from "../model/InputUserDTO";
import { CustomError } from "../errors/CustomError";
import { InputNewConnectionDTO } from "../model/InputNewConnectionDTO";
import { databaseNewConnectionDTO } from "../model/databaseNewConnectionDTO";
import { GenerateID } from "../services/GenerateID";
import { DatabaseConnectionDTO } from "../model/DatabaseConnectionDTO";

export class UserBusiness {
  public createUser = async (input: InputUserDTO) => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new IncompleteUser();
      }

      const generateID = new GenerateID();
      const id: string = generateID.getId();

      const newUser: DatabaseUserDTO = { id, name, email, password };

      const userDatabase = new UserDatabase();

      await userDatabase.createUser(newUser);
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  };

  public createConnection = async (
    input: InputNewConnectionDTO
  ): Promise<void> => {
    try {
      const { idUserOne, idUserTwo } = input;

      const userDatabase = new UserDatabase();

      // garantir que os dois usuários existem
      const userOne: DatabaseUserDTO[] = await userDatabase.findUserByID(
        idUserOne
      );
      if (!userOne.length) {
        throw new CustomError(404, `ID: ${idUserOne}. Student not found`);
      }
      const userTwo: DatabaseUserDTO[] = await userDatabase.findUserByID(
        idUserTwo
      );
      if (!userTwo.length) {
        throw new CustomError(404, `ID: ${idUserTwo}. Student not found`);
      }

      const generateID = new GenerateID();
      const databaseNewConnection: databaseNewConnectionDTO = {
        id: generateID.getId(),
        idUserOne,
        idUserTwo,
      };

      await userDatabase.createConnection(databaseNewConnection);
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  };

  public deleteConnection = async (connectionID: string): Promise<void> => {
    try {
      const databaseConnectionID: string = connectionID;

      // search Connection By ID
      const userDatabase = new UserDatabase();
      const queryResult: DatabaseConnectionDTO[] =
        await userDatabase.findConnectionByID(databaseConnectionID);
      if (!queryResult.length) {
        throw new CustomError(
          404,
          "Connection not found. Either the users are not connected or the Connection ID is wrong."
        );
      }

      await userDatabase.deleteConnection(databaseConnectionID);

      // Delete Connection
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
