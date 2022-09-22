import { generateId } from "../services/generateId";
import { UserRepository } from "./UserRepository";


export class UserBusiness {
  constructor(private userDatabase: UserRepository){}
public createUser = async (input: any) => {
   try {
     const { name, nickname, email, password } = input;
 
     if (!name || !nickname || !email || !password) {
       throw new Error(
         'Preencha os campos "name","nickname", "email" e "password"'
       );
     }
 
     const id = generateId();

     await this.userDatabase.insertUser({
       id,
       name,
       nickname,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

