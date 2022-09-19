import * as bcrypt from "bcryptjs";
import { VerificationObjectDTO } from "../model/DTOs/VerificationObjectDTO";

export class HashManager {
  public generateHash = async (password: string): Promise<string> => {
    const round = 12;
    const salt = await bcrypt.genSalt(round);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  };

  public verifyHash = async (
    input: VerificationObjectDTO
  ): Promise<boolean> => {
    const queryResult = await bcrypt.compare(input.password, input.hash);

    return queryResult;
  };
}
