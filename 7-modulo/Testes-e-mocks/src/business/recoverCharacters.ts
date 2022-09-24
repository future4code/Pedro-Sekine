import { UserInterface } from "../model/UserInterace";

export const recoverCharacters = (
  users: UserInterface[],
  validatorCharacter: (user: UserInterface) => boolean,
  validatorCharacterAmount: (users: UserInterface[]) => boolean
): UserInterface[] | string => {
  try {
    const validateAmount = validatorCharacterAmount(users);
    if (!validateAmount) {
      throw new Error("At least two character needed.")
    }

    users.forEach((user) => {
      validatorCharacter(user);
      user.vida = 1500;
    });

    return users;
  } catch (error) {
    return error.message;
  }
};
