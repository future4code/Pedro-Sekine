import { Knex } from "./Knex";
import { v4 as generateID } from "uuid";

export class PersonalEspecialidadeDatabase {
  public linkEspecialidade = async (
    arrayEspecialidades: {
      docenteID: string;
      especialidadeID: string;
    }[]
  ): Promise<void> => {
    const finalArray: {
      id: string;
      docente_id: string;
      especialidade_id: string;
    }[] = arrayEspecialidades.map((item) => {
      return {
        id: generateID(),
        docente_id: item.docenteID,
        especialidade_id: item.especialidadeID,
      };
    });
    console.log("finalArray", finalArray)
    await Knex.connection("personal_especialidade").insert(finalArray);
  };
}
