import { Estudante } from "./Estudante";
import { Knex } from "./Knex";
import { Usuario } from "./Usuario";

export class EstudanteTabela {
  public postEstudante = async (inputEstudante: Estudante): Promise<void> => {
    await Knex.connection("estudante").insert(inputEstudante);
  };

  public searchEstudante = async (inputString: string): Promise<any[]> => {
    const searchResult = await Knex.connection("estudante")
      .select()
      .whereILike("nome", `%${inputString}%`);

    return searchResult;
  };

  public searchEstudanteID = async (inputID: string): Promise<any[]> => {
    const searchResult = await Knex.connection("estudante").where(
      "id",
      inputID
    );
    return searchResult;
  };

  public changeEstudanteTurma = async (
    inputID: string,
    turmaID: string
  ): Promise<void> => {
    await Knex.connection("estudante")
      .where("id", inputID)
      .update("turma_id", turmaID);
  };

  // Possível que o erro esteja por aqui, no tipo do Usuário.
  public searchEstudanteByTurma = async (
    turmaID: string
  ): Promise<Usuario[]> => {
    const searchResult = await Knex.connection("estudante").where(
      "turma_id",
      turmaID
    );
    return searchResult;
  };

  public searchEstudanteBySign = async(range:string):Promise<Usuario[]> => {
    const searchResult = await Knex.connection("estudante").whereRaw(range)
    return searchResult
  }
}
