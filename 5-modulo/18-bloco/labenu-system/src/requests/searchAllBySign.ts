import express, { Request, Response } from "express";
import cors from "cors";
import { Usuario } from "../classes/Usuario";
import { DocenteTabela } from "../classes/DocenteTabela";
import { EstudanteTabela } from "../classes/EstudanteTabela";
import { CustomError } from "../classes/CustomError";

const app = express();
app.use(express.json());
app.use(cors());

export const searchAllBySign = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sign } = req.params;

    const lowerCaseInput = sign.toLowerCase();

    if (
      lowerCaseInput !== "áries" &&
      lowerCaseInput !== "touro" &&
      lowerCaseInput !== "gêmeos" &&
      lowerCaseInput !== "câncer" &&
      lowerCaseInput !== "leão" &&
      lowerCaseInput !== "virgem" &&
      lowerCaseInput !== "libra" &&
      lowerCaseInput !== "escorpião" &&
      lowerCaseInput !== "sagitário" &&
      lowerCaseInput !== "capricórnio" &&
      lowerCaseInput !== "aquário" &&
      lowerCaseInput !== "peixes"
    ) {
      throw new CustomError("Por favor digite um signo.", 400)
    }

    // let range: string[] = [];
    let range: string = "";

    switch (sign) {
      case "áries":
        // range = ["03-21", "04-20"];
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '03-21' AND '04-20'";
        break;
      case "touro":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '04-21' AND '05-20'";
        break;
      case "gêmeos":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '05-21' AND '06-20'";
        break;
      case "câncer":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '06-21' AND '07-22'";
        break;
      case "leão":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '07-23' AND '08-22'";
        break;
      case "virgem":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '08-23' AND '09-22'";
        break;
      case "libra":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '09-23' AND '10-22'";
        break;
      case "escorpião":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '10-23' AND '11-21'";
        break;
      case "sagitário":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '11-22' AND '12-21'";
        break;
      case "capricórnio":
        range =
          "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '12-22' AND '12-31' OR DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '01-01' AND '01-20'";
        break;
      case "aquário":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '01-21' AND '02-18'";
        break;
      case "peixes":
        range = "DATE_FORMAT(data_nasc,'%m-%d') BETWEEN '02-19' AND '03-20'";
        break;
    }

    let finalArray: Usuario[] = [];
    const docenteBase = new DocenteTabela();
    const searchResultDocente = await docenteBase.searchDocenteBySign(range);

    const estudanteBase = new EstudanteTabela();
    const searchResultEstudante = await estudanteBase.searchEstudanteBySign(range);

    if (searchResultDocente.length) {
      searchResultDocente.map((docente) => {
        finalArray.push(docente);
      });
    }
    if (searchResultEstudante.length) {
      searchResultEstudante.map((estudante) => {
        finalArray.push(estudante);
      });
    }

    if (!finalArray.length) {
      throw new CustomError("Nenhuma pessoa possui esse signo", 404);
    }

    res.send(finalArray);
  } catch (error: any) {
    res.status(error.status || 500).send(error.message);
  }
};
