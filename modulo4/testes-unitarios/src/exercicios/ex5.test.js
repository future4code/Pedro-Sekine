import { upperCaseFirstLetter } from "./ex5";

describe("Validating the upperCaseFirstLetter function", () => {
  test("return should be 'Ola' from 'ola' input", () => {
    const refactoredString = upperCaseFirstLetter("ola");

    expect(refactoredString).toEqual("Ola");
  });
  test("return should be 'Ola, Mundo' from 'ola, mundo' input", () => {
    const refactoredString = upperCaseFirstLetter("ola, mundo");

    expect(refactoredString).toEqual("Ola, Mundo");
  });
  test("return 'Eu Sou O Bob, Aluno Da Labenu' from an input with all characters in lower case", () => {
    const refactoredString = upperCaseFirstLetter(
      "eu sou o bob, aluno da labenu"
    );

    expect(refactoredString).toEqual("Eu Sou O Bob, Aluno Da Labenu");
  });
});
