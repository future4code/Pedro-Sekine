import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import hashGenerator from "../services/hashGenerator";
import idGenerator from "../services/idGenerator";
import tokenGenerator from "../services/tokenGenerator";
import { UserWithoutPassword } from "../model/UserWithoutPassword";
import { IUserDatabase } from "../model/IUserDatabase";

export class UserBusiness {
  constructor(public userDatabase: IUserDatabase) {}
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    try {
      if (!name || !email || !password || !role) {
        throw new CustomError(422, "Missing input");
      }

      if (email.indexOf("@") === -1) {
        throw new CustomError(422, "Invalid email");
      }

      if (password.length < 6) {
        throw new CustomError(422, "Invalid password");
      }

      const id = idGenerator.generate();

      const cypherPassword = await hashGenerator.hash(password);

      await this.userDatabase.createUser(
        new User(id, name, email, cypherPassword, stringToUserRole(role))
      );

      const accessToken = tokenGenerator.generate({
        id,
        role,
      });
      return { accessToken };
    } catch (error: any) {
      if (error.message.includes("key 'email'")) {
        throw new CustomError(409, "Email already in use");
      }

      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new CustomError(422, "Missing input");
      }

      const user = await this.userDatabase.getUserByEmail(email);

      if (!user) {
        throw new CustomError(401, "Invalid credentials");
      }

      const isPasswordCorrect = await hashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(401, "Invalid credentials");
      }

      const accessToken = tokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return { accessToken };
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async getProfileById(
    id: string,
    validator: (id: string) => Promise<User | void>
  ): Promise<UserWithoutPassword> {
    try {
      // const queryResult: User | undefined = await this.userDatabase.getUserById(
      //   id
      // );
      const queryResult = await validator(id);

      // if (!queryResult) {
      //   throw new CustomError(404, "User not found.");
      // }

      const returnUser: UserWithoutPassword = {
        id: queryResult!.getId(),
        name: queryResult!.getName(),
        email: queryResult!.getEmail(),
        role: queryResult!.getRole(),
      };

      return returnUser;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
