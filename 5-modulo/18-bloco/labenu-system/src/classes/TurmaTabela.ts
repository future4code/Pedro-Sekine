import { Knex } from "./Knex";

export class TurmaTabela extends Knex {
  public getTurmas = async () => {
    const turmas = await Knex.connection("turma");
    return turmas;
  };

  public postTurma = async (
    id: string,
    nome: string,
    modulo: string
  ): Promise<void> => {
    const novaTurma = {
      id: id,
      nome: nome,
      modulo: modulo,
    };
    await Knex.connection("turma").insert(novaTurma);
  };

  public changeMod = async (id: string, modulo: string): Promise<void> => {
    await Knex.connection("turma").where("id", id).update("modulo", modulo);
  };

  public searchTurma = async (search: string) => {
    const searchResult = await Knex.connection("turma").whereILike(
      "nome",
      `%${search}%`
    );
    return searchResult;
  };

  public searchTurmaID = async (id: string) => {
    const searchResult = await Knex.connection("turma").where("id", id);
    return searchResult;
  };
}
