import { Usuario } from "./Usuario";

export class Docente extends Usuario {
  
  protected turma_id: string | undefined

  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
  ) {
    super(id, nome, email, data_nasc);
  }
}