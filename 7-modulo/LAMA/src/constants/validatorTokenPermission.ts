import { CustomError } from "../error/CustomError";
import { InputRegisterBandDTO } from "../model/DTOs/InputRegisterBandDTO";
import { Authenticator } from "../services/Authenticator";

export const validatorTokenPermission = async (
  input: InputRegisterBandDTO
): Promise<boolean> => {
  const authenticator = new Authenticator();
  const payload = authenticator.getData(input.token!);

  if (payload.role?.toLowerCase() !== "admin") {
    return false;
  }
  return true;
};
