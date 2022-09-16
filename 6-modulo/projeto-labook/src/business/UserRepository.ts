import { DatabaseConnectionDTO } from "../model/DatabaseConnectionDTO";
import { databaseNewConnectionDTO } from "../model/databaseNewConnectionDTO";
import { DatabaseUserDTO } from "../model/DatabaseUserDTO";

export interface UserRepository {
  createConnection(userObject: databaseNewConnectionDTO): Promise<void>;
  createUser(newUserData: DatabaseUserDTO): Promise<void>;
  findUserByEmail(userEmail: string): Promise<DatabaseUserDTO[]>;
  findUserByID(userID: string): Promise<DatabaseUserDTO[]>;
  findConnectionByID(connectionID: string): Promise<DatabaseConnectionDTO[]>;
  deleteConnection(inputID: string): Promise<void>;
}
