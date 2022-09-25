import { CustomError } from "../errors/CustomError";
import { IUserValidator } from "./IUserValidator";
import { User, USER_ROLES } from "./User";

export class UserValidatorMockFalse implements IUserValidator {
  public validation = async (id: string): Promise<User | void> => {
    const queryResult: User | undefined = undefined;

    if (!queryResult) {
      throw new CustomError(404, "User not found.");
    }

    return queryResult;
  };
}

export class UserValidatorMockTrue implements IUserValidator {
  public validation = async (id: string): Promise<User | void> => {
    const queryResult: User | undefined = new User(
      "mock id",
      "mock name",
      "mock email",
      "mock password",
      USER_ROLES.ADMIN
    );

    return queryResult;
  };
}
