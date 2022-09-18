import * as bcrypt from "bcryptjs";

export class HashTool {
  public generateHash = async (input: string): Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(input, salt);

    return hash;
  };

  public verifyHash = async (
    input: string,
    hashReference: string
  ): Promise<boolean> => {
    const verificationResult = await bcrypt.compare(input, hashReference);

    return verificationResult;
  };
}
