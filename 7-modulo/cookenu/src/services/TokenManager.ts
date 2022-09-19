import * as jwt from "jsonwebtoken";
import { PayloadObjectDTO } from "../model/DTOs/PayloadObjectDTO";

export class TokenManager {
  public getToken = (payload: PayloadObjectDTO): string => {
    const options = { expiresIn: "5m" };

    const token = jwt.sign(payload, process.env.JWT_KEY as string, options);

    return token;
  };

  public verifyToken = (token: string) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string)

    return tokenData
  }
}
