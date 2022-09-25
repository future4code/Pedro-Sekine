import { User } from "./User";

export interface IUserValidator {
  validation(id: string): Promise<User | void>;
}
