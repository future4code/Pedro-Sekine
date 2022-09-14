import { UserDatabase } from "../data/UserDatabase";
import { User } from "../types/User";
import { InputUserDTO } from "../model/InputUserDTO";
import { PostUserDTO } from "../model/PostUserDTO";
import { generateID } from "../services/generateID";
import { IncompleteBody } from "../errors/IncompleteBody";

export class UserBusiness {
  async create({ email, name, password }: InputUserDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new IncompleteBody()
    }

    const id = generateID();

    const userDatabase = new UserDatabase();
    const newUser: PostUserDTO = {
      id,
      name,
      email,
      password,
    };
    await userDatabase.create(newUser);
  }

  public getAllUsers = async (): Promise<User[]> => {
    const userDatabase = new UserDatabase();
    const getResult = await userDatabase.getAllUsers();

    return getResult;
  };
}
