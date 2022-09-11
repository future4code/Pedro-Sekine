import { Docente } from "./Docente";
import { Knex } from "./Knex";
import { Usuario } from "./Usuario";

export class DocenteTabela {
  public getAllDocente = async (): Promise<Docente[]> => {
    const getResult = await Knex.connection("docente").select();
    return getResult;
  };

  public searchDocenteID = async (queryID: string): Promise<Docente[]> => {
    const searchResult: Docente[] = await Knex.connection("docente")
      .select()
      .where("id", queryID);
    return searchResult;
  };

  public postDocente = async (newDocente: Docente): Promise<void> => {
    await Knex.connection("docente").insert(newDocente);
  };

  public putTurmaDocente = async (
    docenteID: string,
    turmaID: string
  ): Promise<void> => {
    await Knex.connection("docente")
      .where("id", docenteID)
      .update("turma_id", turmaID);
  };

  // search Docentes by turma
  public searchDocenteByTurma = async (turmaID: string): Promise<Usuario[]> => {
    const searchResult = await Knex.connection("docente").where(
      "turma_id",
      turmaID
    );
    return searchResult;
  };

  public searchDocenteByEspecialidade = async (
    especialidade: string
  ): Promise<Docente[]> => {
    const searchResult = await Knex.connection("docente")
      .select("docente.nome", "personal_especialidade.especialidade_id")
      .join(
        "personal_especialidade",
        "docente.id",
        "=",
        "personal_especialidade.docente_id"
      )
      .where("personal_especialidade.especialidade_id", especialidade);
    
      return searchResult
  };

  public searchDocenteBySign = async(range:string):Promise<Usuario[]> => {
    const searchResult = await Knex.connection("docente").whereRaw(range)
    return searchResult
  }
}


// const searchResult = Knex.connection("docente").whereBetween("data_nasc", [range[0], range[1]])
