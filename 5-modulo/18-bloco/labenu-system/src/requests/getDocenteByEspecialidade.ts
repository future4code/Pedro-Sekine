import express, { Request, Response } from "express";
import cors from "cors";
import { Docente } from "../classes/Docente";
import { DocenteTabela } from "../classes/DocenteTabela";

const app = express();
app.use(express.json());
app.use(cors());

export const getDocenteByEspecialidade = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { especialidade } = req.params;

  const docenteBase = new DocenteTabela
  const searchResult = await docenteBase.searchDocenteByEspecialidade(especialidade)

  res.send(searchResult)
};
