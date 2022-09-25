import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import {
  UserValidatorMockFalse,
  UserValidatorMockTrue,
} from "../src/model/mocks";
import { User, USER_ROLES } from "../src/model/User";

describe("Testing getUserById endpoint and function", () => {
  test("Should properly send the error for non-existing users", async () => {
    const id = "abcdefgijklmnopqrstuwxyz";
    const userDatabase = new UserDatabase();
    const userBusiness = new UserBusiness(userDatabase);
    const validator = new UserValidatorMockFalse();
    try {
      const result = await userBusiness.getProfileById(
        id,
        validator.validation
      );
    } catch (error: any) {
      expect(error.message).toEqual("User not found.");
      expect(error.statusCode).toBe(404);
    }
  });
  test("Should return the expected user", async () => {
    const id = "abcdefgijklmnopqrstuwxyz";
    const userDatabase = new UserDatabase();
    const userBusiness = new UserBusiness(userDatabase);
    const validator = new UserValidatorMockTrue();

    const result = await userBusiness.getProfileById(id, validator.validation);

    const expectedUser = new User(
      "mock id",
      "mock name",
      "mock email",
      "mock password",
      USER_ROLES.ADMIN
    );

    expect(result).toEqual(expectedUser);
  });
});
