import { UserInterface } from "../model/UserInterace";
import { validateCharacter } from "./validateCharacter";

// export const performAttack = (
//   attacker: UserInterface,
//   defender: UserInterface
// ): void | string => {
//   try {
//     const validationAttacker = validateCharacter(attacker);
//     const validationDefender = validateCharacter(defender);

//     if (!validationAttacker || !validationDefender) {
//       throw new Error("Invalid Character");
//     }

//     if (defender.defesa < attacker.ataque) {
//       defender.vida = defender.vida - (attacker.ataque - defender.defesa);
//     }
//   } catch (error: any) {
//     return error.message;
//   }
// };

export const performAttack = (
  attacker: UserInterface,
  defender: UserInterface,
  validador: (user: UserInterface) => boolean
): void | string => {
  try {
    const validationAttacker = validador(attacker);
    const validationDefender = validador(defender);

    if (!validationAttacker || !validationDefender) {
      throw new Error("Invalid Character");
    }

    if (defender.defesa < attacker.ataque) {
      defender.vida = defender.vida - (attacker.ataque - defender.defesa);
    }
  } catch (error) {
    return error.message;
  }
};
