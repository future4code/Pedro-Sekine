export abstract class Usuario {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    // protected turma_id: string
    protected data_nasc: string
  ) {}
}
