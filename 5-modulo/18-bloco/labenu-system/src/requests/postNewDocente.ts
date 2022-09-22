import { CustomError } from "../classes/CustomError";
import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateID } from "uuid";
import { Docente } from "../classes/Docente";
import { dateInputToDatabase } from "../functions/dateInputToDatabase";
import { DocenteTabela } from "../classes/DocenteTabela";
import { PersonalEspecialidadeDatabase } from "../classes/PersonalEspecialidadeDatabase";

const app = express();

app.use(express.json());
app.use(cors());

export const postNewDocente = async (req: Request, res: Response) => {
  try {
    const {
      nome,
      email,
      dataNasc,
      especialidade,
    }: {
      nome: string;
      email: string;
      dataNasc: string;
      especialidade: string[];
    } = req.body;

    const id = generateID();

    if (!nome || !email || !dataNasc || !especialidade.length) {
      throw new CustomError(
        "O Body da requisição deve conter nome, email, dataNasc e especialidade (em um array de strings)",
        400
      );
    }

    especialidade.map((especialidade) => {
      const caseInsensitiveEspecialidade = especialidade.toLowerCase();
      if (
        caseInsensitiveEspecialidade !== "css" &&
        caseInsensitiveEspecialidade !== "js" &&
        caseInsensitiveEspecialidade !== "poo" &&
        caseInsensitiveEspecialidade !== "react" &&
        caseInsensitiveEspecialidade !== "typescript"
      ) {
        throw new CustomError(
          "Especialidade deve ser uma das seguintes opções: css, js, poo, react, typescript.",
          400
        );
      }
    });

    const dateObject = dateInputToDatabase(dataNasc);
    // YYYY-MM-DD MYSQL
    if (dateObject.isValid === false) {
      throw new CustomError("Data inválida. Use 'DD/MM/YYYY' ", 400);
    }

    const newDocente = new Docente(id, nome, email, dateObject.message);
    const docenteBase = new DocenteTabela();
    await docenteBase.postDocente(newDocente);

    const PersonalEspBase = new PersonalEspecialidadeDatabase();

    const formattedEspecialidades = especialidade.map(
      (especialidade: string) => {
        return { docenteID: id, especialidadeID: especialidade.toLowerCase() };
      }
    );

    console.log("formattedEspecialidades", formattedEspecialidades);
    await PersonalEspBase.linkEspecialidade(formattedEspecialidades);

    res.status(201).send("Docente criado com sucesso.");
  } catch (error: any) {
    res.status(error.status || 400).send(error.message);
  }
};
// docente nn precias de turma
