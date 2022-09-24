import { recoverCharacters } from "../src/business/recoverCharacters";
import { UserInterface } from "../src/model/UserInterace";
import { mockAmountValidatorFalse, mockAmountValidatorTrue, mockValidatorTrue } from "../support";

describe("Testing the recoverCharacters function", () => {
  test("Both characters should have 1500hp", () => {
    const user1: UserInterface = {
      nome: "name 1",
      vida: 200,
      defesa: 1000,
      ataque: 1000,
    };
    const user2: UserInterface = {
      nome: "name 2",
      vida: 100,
      defesa: 800,
      ataque: 1000,
    };
    const users: UserInterface[] = [user1, user2];

    const results: UserInterface[] = recoverCharacters(
      users,
      mockValidatorTrue,
      mockAmountValidatorTrue
    ) as UserInterface[];
    expect(results[0].vida).toBe(1500);
    expect(results[1].vida).toBe(1500);
  });
  test("Testing 4 characters, that should have 1500hp", () => {
    const user1: UserInterface = {
      nome: "name 1",
      vida: 200,
      defesa: 1000,
      ataque: 1000,
    };
    const user2: UserInterface = {
      nome: "name 2",
      vida: 100,
      defesa: 800,
      ataque: 1000,
    };
    const user3: UserInterface = {
      nome: "name 1",
      vida: 200,
      defesa: 1000,
      ataque: 1000,
    };
    const user4: UserInterface = {
      nome: "name 2",
      vida: 100,
      defesa: 800,
      ataque: 1000,
    };
    const users: UserInterface[] = [user1, user2, user3, user4];

    const results: UserInterface[] = recoverCharacters(
      users,
      mockValidatorTrue,
      mockAmountValidatorTrue
    ) as UserInterface[];
    expect(results[0].vida).toBe(1500);
    expect(results[1].vida).toBe(1500);
    expect(results[2].vida).toBe(1500);
    expect(results[3].vida).toBe(1500);
  });

  test("Should throw error for only one character", () => {
    const user1: UserInterface = {
      nome: "name 1",
      vida: 200,
      defesa: 1000,
      ataque: 1000,
    };
    const users = [user1];

    const result = recoverCharacters(
      users,
      mockValidatorTrue,
      mockAmountValidatorFalse
    ) as UserInterface[];

    expect(result).toEqual("At least two character needed.")
  });
});
