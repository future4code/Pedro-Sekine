import * as jwt from "jsonwebtoken";
import { InputAuthentication } from "../business/InputAuthentication";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
  public generateToken = (userID: InputAuthentication): string => {
    const payload = userID;
    const jwtOptions = { expiresIn: "1min" };
    const token = jwt.sign(payload, process.env.JWT_KEY as string, jwtOptions);

    return token;
  };

  public generateTokenID = (userID: string): string => {
    const payload = { id: userID };
    const jwtOptions = { expiresIn: "1min" };
    const token = jwt.sign(payload, process.env.JWT_KEY as string, jwtOptions);

    return token;
  };

  public verifyToken = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const payloadID = { id: payload.id };
    return payloadID;
  };
}
