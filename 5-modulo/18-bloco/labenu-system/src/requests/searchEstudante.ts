import express, { Request, Response } from "express";
import cors from "cors";
import { CustomError } from "../classes/CustomError";
import { EstudanteTabela } from "../classes/EstudanteTabela";

const app = express();

app.use(express.json());
app.use(cors());

export const searchEstudante = async (req: Request, res: Response) => {
  try {
    const searchNome = req.params.search;

    const estudanteClasse = new EstudanteTabela();
    const searchResult = await estudanteClasse.searchEstudante(searchNome);

    if (!searchResult.length) {
      throw new CustomError("Estudante não encontrado", 404);
    }

    res.status(200).send(searchResult)

  } catch (error: any) {
    res.status(error.status).send(error.message)
  }
};
