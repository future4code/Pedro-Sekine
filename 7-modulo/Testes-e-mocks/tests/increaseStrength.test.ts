import { increaseStrength } from "../src/business/increaseStrength";
import { UserInterface } from "../src/model/UserInterace";
import {
  mockStrengthValidatorFalse,
  mockStrengthValidatorTrue,
  mockValidatorFalse,
  mockValidatorTrue,
} from "../support";

describe("Testing increaseStrength", () => {
  test("Should increase strength to 8888", () => {
    const user: UserInterface = {
      nome: "name",
      vida: 1500,
      defesa: 800,
      ataque: 1000,
    };

    increaseStrength(user, 8888, mockValidatorTrue, mockStrengthValidatorTrue);

    expect(user.ataque).toBe(8888);
    expect(user).toEqual({
      nome: "name",
      vida: 1500,
      defesa: 800,
      ataque: 8888,
    });
  });

  test("Should return 'Invalid Strength'", () => {
    const user: UserInterface = {
      nome: "name",
      vida: 1500,
      defesa: 800,
      ataque: 1000,
    };

    const result = increaseStrength(
      user,
      8888,
      mockValidatorTrue,
      mockStrengthValidatorFalse
    );
    expect(result).toEqual("Invalid Strength");
  });

  test("Should return 'Incorrect character'", () => {
    const user: UserInterface = {
      nome: "name",
      vida: 1500,
      defesa: 800,
      ataque: 1000,
    };

    const result = increaseStrength(
      user,
      8888,
      mockValidatorFalse,
      mockStrengthValidatorTrue
    );
    expect(result).toBe("Incorrect character");
  });
});
