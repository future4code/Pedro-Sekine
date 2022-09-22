import { JwtPayload } from "jsonwebtoken";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import {
  AlreadyFollowing,
  CreateUserDataMissing,
  CustomError,
  EmailAlreadyRegistered,
  EmailNotRegistered,
  InvalidPassword,
  LoginDataMissing,
  MissingFollowInformation,
  MissingToken,
  MissingUnfollowInformation,
  NoPermission,
  NotARole,
  NotFollowing,
  ProfileNotFound,
  ProfileToFollowNotFound,
  ShortPassword,
} from "../errors/CustomError";
import { DatabaseCreateUserDTO } from "../model/DTOs/DatabaseCreateUserDTO";
import { DatabaseUnfollowUserDTO } from "../model/DTOs/DatabaseUnfollowUserDTO";
import { InputCreateUserDTO } from "../model/DTOs/InputCreateUserDTO";
import { InputDeleteUserDTO } from "../model/DTOs/InputDeleteUserDTO";
import { InputFollowUserDTO } from "../model/DTOs/InputFollowUserDTO";
import { InputGetOtherProfileDTO } from "../model/DTOs/InputGetOtherProfileDTO";
import { InputLoginDTO } from "../model/DTOs/InputLoginDTO";
import { InputUnfollowUserDTO } from "../model/DTOs/InputUnfollowUserDTO";
import { OutputFollowUserDTO } from "../model/DTOs/OutputFollowUserDTO";
import { OutputUserDTO } from "../model/DTOs/OutputUserDTO";
import { PayloadObjectDTO } from "../model/DTOs/PayloadObjectDTO";
import { ResponseFeedDTO } from "../model/DTOs/ResponseFeedDTO";
import { ResponseProfileDTO } from "../model/DTOs/ResponseProfileDTO";
import { VerificationObjectDTO } from "../model/DTOs/VerificationObjectDTO";
import { EmailSender } from "../services/EmailSender";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { UserRepository } from "./UserRepository";
import generator from "generate-password";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}

  idGenerator = new IdGenerator();
  tokenManager = new TokenManager();

  public createUser = async (input: InputCreateUserDTO): Promise<string> => {
    try {
      const { email, name, password, role } = input;

      if (!email || !name || !password) {
        throw new CreateUserDataMissing();
      }
      if (role !== "normal" && role !== "admin") {
        throw new NotARole();
      }

      if (password.length < 6) {
        throw new ShortPassword();
      }

      const emailExistence: OutputUserDTO[] =
        await this.userDatabase.searchUserByEmail(email);

      if (emailExistence.length) {
        throw new EmailAlreadyRegistered();
      }

      const id = this.idGenerator.getId();
      const hashmanager = new HashManager();
      const hash = await hashmanager.generateHash(password);

      const databaseCreateUser: DatabaseCreateUserDTO = {
        id,
        name,
        email,
        password: hash,
        role,
      };

      await this.userDatabase.createUser(databaseCreateUser);

      const payload: PayloadObjectDTO = { id, role };
      const token: string = this.tokenManager.getToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public login = async (input: InputLoginDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new LoginDataMissing();
      }

      const user: OutputUserDTO[] = await this.userDatabase.searchUserByEmail(
        email
      );

      if (!user.length) {
        throw new EmailNotRegistered();
      }

      const verificationObject: VerificationObjectDTO = {
        password: password,
        hash: user[0].password,
      };

      const hashmanager = new HashManager();

      const verificationResult = await hashmanager.verifyHash(
        verificationObject
      );

      if (!verificationResult) {
        throw new InvalidPassword();
      }

      const role = user[0].role;

      const payload: PayloadObjectDTO = { id: user[0].id, role };
      const token: string = this.tokenManager.getToken(payload);

      return token;

      // gerar token se der tudo certo
      // devolver para Controller
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getProfile = async (token: string): Promise<ResponseProfileDTO> => {
    try {
      if (!token) {
        throw new MissingToken();
      }

      const tokenData = this.tokenManager.verifyToken(token) as JwtPayload;
      // tokenData.id
      // tokenData.role

      const profileData: OutputUserDTO[] =
        await this.userDatabase.searchUserById(tokenData.id);

      if (!profileData.length) {
        throw new ProfileNotFound();
      }

      const responseObject: ResponseProfileDTO = {
        id: profileData[0].id,
        name: profileData[0].name,
        email: profileData[0].email,
      };

      return responseObject;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getOtherProfile = async (
    input: InputGetOtherProfileDTO
  ): Promise<ResponseProfileDTO> => {
    try {
      const { token, id } = input;

      if (!token) {
        throw new MissingToken();
      }

      const tokenData = this.tokenManager.verifyToken(token) as JwtPayload;
      // tokenData.id
      // tokenData.role

      const profileData: OutputUserDTO[] =
        await this.userDatabase.searchUserById(id);

      if (!profileData.length) {
        throw new ProfileNotFound();
      }

      const responseObject: ResponseProfileDTO = {
        id: profileData[0].id,
        name: profileData[0].name,
        email: profileData[0].email,
      };

      return responseObject;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public followUser = async (input: InputFollowUserDTO): Promise<void> => {
    try {
      const { token, userToFollowId } = input;

      if (!userToFollowId) {
        throw new MissingFollowInformation();
      }

      if (!token) {
        throw new MissingToken();
      }

      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;
      const userFollowerId = payload.id;

      const verifyFollower: OutputUserDTO[] =
        await this.userDatabase.searchUserById(userFollowerId);
      if (!verifyFollower.length) {
        throw new ProfileNotFound();
      }
      const verifyFollowed: OutputUserDTO[] =
        await this.userDatabase.searchUserById(userToFollowId);
      if (!verifyFollowed.length) {
        throw new ProfileToFollowNotFound();
      }

      const verifyAlreadyFollowing: OutputUserDTO[] =
        await this.userDatabase.searchConnectionById(
          userFollowerId,
          userToFollowId
        );

      if (verifyAlreadyFollowing.length) {
        throw new AlreadyFollowing();
      }

      const id = this.idGenerator.getId();

      const databaseFollowUser: OutputFollowUserDTO = {
        id: id,
        follower_id: userFollowerId,
        followed_id: userToFollowId,
      };

      await this.userDatabase.followUser(databaseFollowUser);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public unfollowUser = async (input: InputUnfollowUserDTO): Promise<void> => {
    try {
      const { token, userToUnfollowId } = input;

      if (!userToUnfollowId) {
        throw new MissingUnfollowInformation();
      }

      if (!token) {
        throw new MissingToken();
      }

      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;
      const userUnfollowerId = payload.id;

      const verifyUnfollower: OutputUserDTO[] =
        await this.userDatabase.searchUserById(userUnfollowerId);
      if (!verifyUnfollower.length) {
        throw new ProfileNotFound();
      }
      const verifyUnfollowed: OutputUserDTO[] =
        await this.userDatabase.searchUserById(userToUnfollowId);
      if (!verifyUnfollowed.length) {
        throw new ProfileToFollowNotFound();
      }

      const verifyFollowing: OutputUserDTO[] =
        await this.userDatabase.searchConnectionById(
          userUnfollowerId,
          userToUnfollowId
        );

      if (!verifyFollowing.length) {
        throw new NotFollowing();
      }

      const databaseUnfollowUser: DatabaseUnfollowUserDTO = {
        follower_id: userUnfollowerId,
        followed_id: userToUnfollowId,
      };

      await this.userDatabase.unfollowUser(databaseUnfollowUser);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getFeed = async (token: string): Promise<ResponseFeedDTO[]> => {
    try {
      if (!token) {
        throw new MissingToken();
      }
      const payload = this.tokenManager.verifyToken(token) as JwtPayload;

      const feed: ResponseFeedDTO[] = await this.userDatabase.getFeed(
        payload.id
      );

      return feed;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public deleteUser = async (input: InputDeleteUserDTO): Promise<void> => {
    try {
      const { id, token } = input;

      if (!token) {
        throw new MissingToken();
      }
      const payload = this.tokenManager.verifyToken(token) as JwtPayload;

      if (payload.role !== "admin") {
        throw new NoPermission();
      }

      const recipeDatabase = new RecipeDatabase();

      await this.userDatabase.unfollowAll(id);
      await recipeDatabase.deleteUserRecipes(id);
      await this.userDatabase.deleteUser(id);

      // delete follow relations
      // delete recipes
      // delete user
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
  public resetPassword = async (email: string): Promise<void> => {
    try {
      // verificar se o email está registrado.
      const queryResult = await this.userDatabase.searchUserByEmail(email);
      if (!queryResult.length) {
        throw new EmailNotRegistered();
      }

      // Se estiver, resetar o email com o novo email e enviar o email com a nova senha

      const newPassword: string = generator.generate({
        length: 10,
        numbers: true,
        uppercase: true,
      });

      console.log("newPassword", newPassword);

      const hashmanager = new HashManager();
      const hash: string = await hashmanager.generateHash(newPassword);

      await this.userDatabase.resetPassword(email, hash);

      const emailSender = new EmailSender();
      await emailSender.sendEmail(email, newPassword);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
