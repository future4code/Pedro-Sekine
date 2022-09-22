import { Estudante } from "./Estudante";
import { Knex } from "./Knex";

export class PersonalHobbiesDatabase {
  // await Knex.connection("hobbie").insert(hobbieList)

  public linkHobbieEstudante = async (
    linkList: { id: string; estudante_id: string; hobbie_id: string }[]
  ): Promise<void> => {
    await Knex.connection("personal_hobbie").insert(linkList);
  };

  public searchStudents = async (hobbyID: string) => {
    const searchResult = await Knex.connection("estudante").select("estudante.id", "estudante.nome").join(
      "personal_hobbie",
      "estudante.id",
      "=",
      "personal_hobbie.estudante_id"
    ).where("personal_hobbie.hobbie_id", hobbyID);
    return searchResult
  };
}
