import { v4 } from "uuid";
import { IGenerateID } from "../model/IGenerateID";

export class GenerateID implements IGenerateID {
  getId = () => {
    return v4();
  };
}