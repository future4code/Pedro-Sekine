import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { IUserValidator } from "./IUserValidator";
import { User } from "./User";

export class UserValidator implements IUserValidator{
  public validation = async (id: string): Promise<User | void> => {
    const userDatabase = new UserDatabase();

    const queryResult: User | undefined = await userDatabase.getUserById(id);

    if (!queryResult) {
      throw new CustomError(404, "User not found.");
    }
    
    return queryResult;
  };
}
