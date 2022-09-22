import express, { Request, Response } from "express";
import cors from "cors";
import { CustomError } from "../classes/CustomError";
import { EstudanteTabela } from "../classes/EstudanteTabela";
import { TurmaTabela } from "../classes/TurmaTabela";

const app = express();

app.use(express.json());
app.use(cors());

export const changeEstudanteTurma = async (req: Request, res: Response) => {
  try {
    const { id, turmaID } = req.params;
    if (!id || !turmaID) {
      throw new CustomError(
        "Os campos id e turma devem ser preenchidos.",
        400
      );
    }

    const estudanteClasse = new EstudanteTabela
    const searchResultEstudante = await estudanteClasse.searchEstudanteID(id)
    if (!searchResultEstudante.length) {
      throw new CustomError("Estudante não encontrado", 404)
    }

    const turmaClasse = new TurmaTabela
    const searchResultTurma = await turmaClasse.searchTurmaID(turmaID)
    if (!searchResultTurma.length) {
      throw new CustomError("Turma não encontrada", 404)
    }
    
    await estudanteClasse.changeEstudanteTurma(id, turmaID)



    res.send("Turma alterada com sucesso")

  } catch (error: any) {
    res.status(error.status).send(error.message);
  }
};
