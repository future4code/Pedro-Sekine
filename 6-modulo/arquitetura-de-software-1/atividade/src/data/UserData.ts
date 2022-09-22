import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {
  public createUser = async (newUser: {
    id: string;
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await UserData.connection("User_Arq").insert(newUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getAllUsers = async (): Promise<
    { id: string; name: string; email: string; password: string }[]
  > => {
    try {
      const getResult = await UserData.connection("User_Arq").select();
      return getResult;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (id: string): Promise<void> => {
    try {
      await UserData.connection("User_Arq").del().where("id", id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
