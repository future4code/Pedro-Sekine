import { UserInterface } from "../model/UserInterace";

export const validateCharacter = (character: UserInterface): boolean => {
  if (!character.ataque || !character.defesa || !character.nome || !character.vida) {
    return false
  }
  if (typeof(character.ataque) !== "number" || typeof(character.defesa) !== "number") {
    return false
  }
  if (character.ataque <= 0 || character.defesa <= 0 || character.vida <= 0) {
    return false
  }

  return true
};
1