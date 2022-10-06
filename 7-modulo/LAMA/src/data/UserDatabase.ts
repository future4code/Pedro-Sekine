import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/DTOs/UserInputDTO";
import { UserOutputDBDTO } from "../model/DTOs/UserOutputDBDTO";

export class UserDatabase extends BaseDatabase {
  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await UserDatabase.connection("LAMA_USUARIOS").insert({
        id,
        email,
        name,
        password,
        role,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<UserOutputDBDTO[]> {
    try {
      const result: UserOutputDBDTO[] = await UserDatabase.connection(
        "LAMA_USUARIOS"
      )
        .select()
        .where({ email });

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage || error.message);
    }
  }
}
