import { mockValidatorTrue } from "../../support";
import { UserInterface } from "../model/UserInterace";

export const increaseStrength = (
  character: UserInterface,
  newStrength: number,
  validator: (user: UserInterface) => boolean,
  strengthValidator: (user: UserInterface) => boolean
): void | string => {
  try {
    const characterValidation = validator(character);
    if (!characterValidation) {
      throw new Error("Incorrect character");
    }

    const strengthValidation = strengthValidator(character);
    if (!strengthValidation) {
      throw new Error("Invalid Strength");
    }

    character.ataque = newStrength;
  } catch (error) {
    return error.message;
  }
};
