import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { InputAuthentication } from "../business/InputAuthentication";
import { InputSignupDTO } from "../model/InputSignupDTO";
import { UserDatabase } from "../data/UserDatabase";
import { DatabaseUserDTO } from "../model/DatabaseUserDTO";
import { InputLoginDTO } from "../model/InputLoginDTO";
import { DatabaseLoginDTO } from "../model/DatabaseLoginDTO";

export class UserBusiness {
  public signup = async (inputSignup: InputSignupDTO): Promise<string> => {
    try {
      const userEmail: string = inputSignup.email;
      const userPassword: string = inputSignup.password;

      if (!userEmail.includes("@")) {
        throw new Error("Incorrect email");
      }

      if (userPassword.length < 6) {
        throw new Error("Password should have at least 6 characters.");
      }

      const userSignup: InputAuthentication = {
        userEmail: userEmail,
        userPassword: userPassword,
      };

      const generateID = new GenerateID();
      const newUserID = generateID.getID();

      const databaseUser: DatabaseUserDTO = {
        id: newUserID,
        email: userEmail,
        password: userPassword,
      };

      // enviar para o banco aqui
      const userDatabase = new UserDatabase();
      await userDatabase.signup(databaseUser);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken(userSignup);

      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public login = async (inputLogin: InputLoginDTO): Promise<string> => {
    try {
      const { email, password } = inputLogin;

      if (!email.includes("@")) {
        throw new Error("Incorrect email. Make sure it includes '@'");
      }

      const databaseLogin: DatabaseLoginDTO = { email, password };
      const userDatabase = new UserDatabase();
      const userData = await userDatabase.login(databaseLogin);

      const authenticator = new Authenticator();
      const token: string = authenticator.generateTokenID(userData[0].id);

      return token;
      //return token
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getProfile = async (token: string): Promise<DatabaseUserDTO> => {
    try {
      const authenticator = new Authenticator();
      const payload = authenticator.verifyToken(token);

      const userID = payload.id

      const userDatabase = new UserDatabase()
      const queryResult = await userDatabase.getProfile(userID)

      return queryResult

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
