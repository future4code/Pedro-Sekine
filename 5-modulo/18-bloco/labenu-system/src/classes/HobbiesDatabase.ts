import { Hobby } from "./Hobby";
import { Knex } from "./Knex";

export class HobbiesDatabase {
  public postHobbieList = async (hobbieList:Hobby[]): Promise<void> => {
    //[{id: "", nome: ""}, {id: "", nome: ""}]
    await Knex.connection("hobbie").insert(hobbieList)
  }

  public searchHobbie = async (hobbie:string):Promise<any[]> => {
    const queryResult = await Knex.connection("hobbie").where({nome: hobbie})
    return queryResult
  }
}