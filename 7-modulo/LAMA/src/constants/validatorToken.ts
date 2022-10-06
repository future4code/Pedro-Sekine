import { CustomError } from "../error/CustomError";
import { InputRegisterBandDTO } from "../model/DTOs/InputRegisterBandDTO";

export const validatorToken = async (
  input: InputRegisterBandDTO
): Promise<boolean> => {
  if (!input.token) {
    return false
  }
  return true
};
