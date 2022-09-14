import { UserRepository } from "../../business/UserRepository";
import { user } from "../../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
   
   public insertUser = async(
      user: user
   ) => {
      try {
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password
         }).into('Architecture_User')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }


}

