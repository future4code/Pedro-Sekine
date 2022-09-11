import { CustomError } from "../classes/CustomError";
import { TurmaTabela } from "../classes/TurmaTabela";
import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateID } from "uuid";

const app = express();

app.use(express.json());
app.use(cors());

export const postNewTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, modulo } = req.body;
    const id = generateID();

    if (!nome || !modulo) {
      // throw new Error("id, nome e modulo devem ser strings preenchidas")
      throw new CustomError("nome e modulo devem ser strings preenchidas", 400);
    }

    if (
      isNaN(modulo) ||
      (Number.isInteger(Number(modulo)) &&
        (Number(modulo) < 0 || Number(modulo) > 6))
    ) {
      throw new CustomError(
        "modulo deve ser um número inteiro entre 0 e 6",
        400
      );
    }

    const turmaClasse = new TurmaTabela();
    await turmaClasse.postTurma(id, nome, modulo);

    res.send("Turma Criada com Sucesso");
  } catch (error: any) {
    res.status(error.status).send(error.message);
  }

  // criar gerenciamento de erros para essa situação
};
