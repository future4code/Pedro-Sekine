import { performAttack } from "../src/business/performAttack";
import { UserInterface } from "../src/model/UserInterace";
import { mockValidatorFalse, mockValidatorTrue } from "../support";

describe("Testing performAttack function", () => {
  test("should have 1300hp after losing 200hp", () => {
    const attacker: UserInterface = {
      nome: "attacker",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    };
    const defender: UserInterface = {
      nome: "defender",
      vida: 1500,
      defesa: 800,
      ataque: 1000,
    };

    performAttack(attacker, defender, mockValidatorTrue);

    expect(defender.vida).toBe(1300);
    expect(mockValidatorTrue).toHaveBeenCalled();
    expect(mockValidatorTrue).toHaveBeenCalledTimes(2);
    expect(mockValidatorTrue).toHaveReturnedTimes(2);
  });

  test("Should return Invalid Character", () => {
    const attacker: UserInterface = {
      nome: "attacker",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    };
    const defender: UserInterface = {
      nome: "defender",
      vida: 0,
      defesa: 800,
      ataque: 1000,
    };

    const returnPerformAttack = performAttack(
      attacker,
      defender,
      mockValidatorFalse
    );

    expect(returnPerformAttack).toBe("Invalid Character");
    expect(mockValidatorTrue).toHaveBeenCalled();
    expect(mockValidatorTrue).toHaveBeenCalledTimes(2);
    expect(mockValidatorTrue).toHaveReturnedTimes(2);
  });

  test("objects should be exactly the ones described", () => {
    const attacker: UserInterface = {
      nome: "attacker",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    };
    const defender: UserInterface = {
      nome: "defender",
      vida: 1500,
      defesa: 800,
      ataque: 1000,
    };
    performAttack(attacker, defender, mockValidatorTrue);

    expect(defender).toEqual({
      nome: "defender",
      vida: 1300,
      defesa: 800,
      ataque: 1000,
    });
    expect(attacker).toEqual({
      nome: "attacker",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    });
  });

  test("Defender's life should not change after being attacked by someone with same strenght as it defends", () => {
    const attacker: UserInterface = {
      nome: "attacker",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    };
    const defender: UserInterface = {
      nome: "defender",
      vida: 1500,
      defesa: 1000,
      ataque: 1000,
    };
    performAttack(attacker, defender, mockValidatorTrue);

    expect(defender.vida).toBe(1500)
  });


});
