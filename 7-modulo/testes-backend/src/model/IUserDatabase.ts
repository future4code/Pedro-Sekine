import BaseDataBase from "../data/BaseDatabase";
import { User } from "./User";

export interface IUserDatabase extends BaseDataBase {
  toModel(dbModel?: any): User | undefined;
  createUser(user: User): Promise<void>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserById(id: string): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
}
