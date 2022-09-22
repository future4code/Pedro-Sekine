import express, { Request, Response } from "express";
import { Usuario } from "../classes/Usuario";
import cors from "cors";
import { TurmaTabela } from "../classes/TurmaTabela";
import { CustomError } from "../classes/CustomError";
import { EstudanteTabela } from "../classes/EstudanteTabela";
import { DocenteTabela } from "../classes/DocenteTabela";

const app = express();

app.use(express.json());
app.use(cors());

export const getAllFromTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const turmaID = req.params.id;

    const turmaBase = new TurmaTabela;
    const searchResult = await turmaBase.searchTurmaID(turmaID);
    if (!searchResult.length) {
      throw new CustomError("Turma não encontrada", 404)
    }

    const finalArray = []

    const EstudanteBase = new EstudanteTabela
    const searchResultEstudante = await EstudanteBase.searchEstudanteByTurma(turmaID)

    const DocenteBase = new DocenteTabela
    const searchResultDocente = await DocenteBase.searchDocenteByTurma(turmaID)

    console.log("searchResultDocente", searchResultDocente)

    if (searchResultEstudante.length) {
      finalArray.push(searchResultEstudante)
    }

    if (searchResultDocente.length) {
      finalArray.push(searchResultDocente)
    }

    res.send(finalArray)

  } catch (error: any) {
    res.status(error.status || 500).send(error.message);
  }
};
