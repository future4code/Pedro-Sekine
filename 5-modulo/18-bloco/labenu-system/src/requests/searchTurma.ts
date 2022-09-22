import express, { Request, Response } from "express";
import cors from "cors";
import { TurmaTabela } from "../classes/TurmaTabela";
import { CustomError } from "../classes/CustomError";

const app = express();
app.use(express.json());
app.use(cors());

export const searchTurma = async (req: Request, res: Response) => {
  try {
    const { search } = req.params;
    // console.log("searchInput", search)
    const turmaClasse = new TurmaTabela
    const searchResult = await turmaClasse.searchTurma(search)

    if (!searchResult.length) {
      throw new CustomError("Turma não encontrada", 404)
    }

    res.send(searchResult)

  } catch (error: any) {
    res.status(error.status).send(error.message)
  }
};
