import { CustomError } from "../classes/CustomError";
import { TurmaTabela } from "../classes/TurmaTabela";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

export const changeMod = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, modulo } = req.params;
    if (!id || !modulo) {
      throw new CustomError(
        "Os campos id e modulo devem ser preenchidos.",
        400
      );
    }

    const turmaClasse = new TurmaTabela();
    const searchResult = await turmaClasse.searchTurmaID(id);

    if (!searchResult.length) {
      throw new CustomError("Turma não encontrada", 404);
    }
    if (
      isNaN(Number(modulo)) ||
      (Number.isInteger(Number(modulo)) &&
        (Number(modulo) < 0 || Number(modulo) > 6))
    ) {
      throw new CustomError(
        "modulo deve ser um número inteiro entre 0 e 6",
        400
      );
    }

    await turmaClasse.changeMod(id, modulo);

    res.send("Módulo atualizado com sucesso");
  } catch (error: any) {
    res.status(error.status).send(error.message);
  }
};

// import custom error
