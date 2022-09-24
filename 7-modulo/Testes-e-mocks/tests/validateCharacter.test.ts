import { validateCharacter } from "../src/business/validateCharacter";
import { UserInterface } from "../src/model/UserInterace";

describe("Testing validateCharacter function", () => {
  test("should return false when name is an empty string", () => {
    const character: UserInterface = {
      ataque: 100,
      defesa: 100,
      nome: "",
      vida: 1500,
    };

    const validation = validateCharacter(character);

    expect(validation).toEqual(false);
  });
  test("Should return false for vida = 0", () => {
    const character: UserInterface = {
      ataque: 100,
      defesa: 100,
      nome: "name",
      vida: 0,
    };
    const validation = validateCharacter(character);

    expect(validation).toEqual(false);
  });
  test("Should return false for ataque = 0", () => {
    const character: UserInterface = {
      ataque: 0,
      defesa: 100,
      nome: "name",
      vida: 1500,
    };
    const validation = validateCharacter(character);

    expect(validation).toEqual(false);
  });
  test("Should return false for defesa = 0", () => {
    const character: UserInterface = {
      ataque: 100,
      defesa: 0,
      nome: "name",
      vida: 1500,
    };
    const validation = validateCharacter(character);

    expect(validation).toEqual(false);
  });
  test("Should return false for vida < 0", () => {
    const character: UserInterface = {
      ataque: 100,
      defesa: 100,
      nome: "name",
      vida: -1500,
    };
    const validation = validateCharacter(character);

    expect(validation).toEqual(false);
  });
  test("should return true for all values according to the rules", () => {
    const character: UserInterface = {
      ataque: 100,
      defesa: 200,
      nome: "asdfasdf",
      vida: 1500,
    };
    const validation = validateCharacter(character);

    expect(validation).toEqual(true);
  });
});
