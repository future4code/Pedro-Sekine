import express, { Request, Response } from "express";
import cors from "cors";
import { TurmaTabela } from "../classes/TurmaTabela";

const app = express();
app.use(express.json());
app.use(cors());

export const getAllTurmas = async (req: Request, res: Response) => {
  const turmaClasse = new TurmaTabela();
  const todasTurmas = await turmaClasse.getTurmas();

  res.send(todasTurmas);
};
