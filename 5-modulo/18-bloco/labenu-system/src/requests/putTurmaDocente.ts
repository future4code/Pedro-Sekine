import express, { Request, Response } from "express";
import cors from "cors";
import { DocenteTabela } from "../classes/DocenteTabela";
import { CustomError } from "../classes/CustomError";
import { TurmaTabela } from "../classes/TurmaTabela";

const app = express();

app.use(express.json());
app.use(cors());

export const putTurmaDocente = async (req: Request, res: Response) => {
  try {
    const { docenteID, turmaID } = req.params;

    // check docente
    const docenteBase = new DocenteTabela;
    const searchResult = await docenteBase.searchDocenteID(docenteID);
    if (!searchResult.length) {
      throw new CustomError("Docente não encontrado", 404);
    }
    // check turma
    const turmaBase = new TurmaTabela
    const turmaSearchResult = await turmaBase.searchTurmaID(turmaID)
    if (!turmaSearchResult.length) {
      throw new CustomError("Turma não encontrada", 404);
    }
    // make put request
    await docenteBase.putTurmaDocente(docenteID, turmaID)


    res.status(201).send("Turma adicionada com sucesso");
  } catch (error: any) {
    res.status(error.status).send(error.message)
  }
};
