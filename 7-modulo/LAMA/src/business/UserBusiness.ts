import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { UserInputDTO } from "../model/DTOs/UserInputDTO";
import { LoginInputDTO } from "../model/DTOs/LoginInputDTO";
import { CustomError } from "../error/CustomError";
import { UserOutputDBDTO } from "../model/DTOs/UserOutputDBDTO";

export class UserBusiness {
  async createUser(user: UserInputDTO) {
    if (
      user.role.toUpperCase() !== "NORMAL" &&
      user.role.toUpperCase() !== "ADMIN"
    ) {
      throw new CustomError(400, "Invalid role.");
    } else {
      user.role = user.role.toUpperCase();
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.role
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id, role: user.role });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    try {
      const userDatabase = new UserDatabase();
      const userFromDB: UserOutputDBDTO[] = await userDatabase.getUserByEmail(
        user.email
      );
      if (!userFromDB.length) {
        throw new CustomError(404, "User not found.");
      }

      const hashManager = new HashManager();
      const hashCompare = await hashManager.compare(
        user.password,
        userFromDB[0].password
      );
      if (!hashCompare) {
        throw new CustomError(400, "Invalid password");
      }

      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({
        id: userFromDB[0].id,
        role: userFromDB[0].role,
      });

      return accessToken;
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  }
}
