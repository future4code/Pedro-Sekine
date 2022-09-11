import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    protected turma_id: string
  ) {
    super(id, nome, email, data_nasc);
  }
}
