import express, { raw, Request, Response } from "express";
import cors from "cors";
import { v4 as generateID } from "uuid";
import { CustomError } from "../classes/CustomError";
import { dateInputToDatabase } from "../functions/dateInputToDatabase";
import { TurmaTabela } from "../classes/TurmaTabela";
import { EstudanteTabela } from "../classes/EstudanteTabela";
import { Estudante } from "../classes/Estudante";
import { Knex } from "../classes/Knex";
import { Hobby } from "../classes/Hobby";
import { HobbiesDatabase } from "../classes/HobbiesDatabase";
import { PersonalHobbiesDatabase } from "../classes/PersonalHobbiesDatabase";

const app = express();

app.use(express.json());
app.use(cors());

export const postNewEstudante = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, email, dataNasc, turmaID, hobbies } = req.body;

    const estudanteID = generateID();

    if (
      !nome ||
      !email ||
      !dataNasc ||
      !turmaID ||
      !hobbies.length ||
      !hobbies
    ) {
      throw new CustomError(
        "O Body da requisição deve conter nome, email, dataNasc, turmaID e hobbies",
        400
      );
    }

    const dateObject = dateInputToDatabase(dataNasc);
    // YYYY-MM-DD MYSQL
    if (dateObject.isValid === false) {
      throw new CustomError("Data inválida. Use 'DD/MM/YYYY' ", 400);
    }

    const turmaClasse = new TurmaTabela();
    const searchResultID = await turmaClasse.searchTurmaID(turmaID);

    if (!searchResultID.length) {
      throw new CustomError("Turma não encontrada", 404);
    }

    const estudanteClasse = new EstudanteTabela();
    const newEstudante = new Estudante(
      estudanteID,
      nome,
      email,
      dateObject.message,
      turmaID
    );
    await estudanteClasse.postEstudante(newEstudante);

    // Verificar se Hobby já existe
    // Remover os que já existem

    const hobbyBase = new HobbiesDatabase();

    const getData = async () => {
      return Promise.all(
        hobbies.map(async (hobby: string) => {
          return await hobbyBase.searchHobbie(hobby);
        })
      );
    };
    const newHobbies: any[] = [];
    const existingHobbie = await getData().then((searchHobbieResult) => {
      console.log("searchHobbieResult", searchHobbieResult);
      const filteredArray = searchHobbieResult.filter((element, index) => {
        if (element.length) {
          return true;
        } else {
          newHobbies.push(hobbies[index]);
          return false;
        }
      });
      return filteredArray;
    });
    const formattedExistingHobbie = existingHobbie.map((array) => {
      return array[0];
    });
    console.log("existingHobbie", existingHobbie);
    console.log("formattedExistingHobbie", formattedExistingHobbie);
    console.log("newHobbies", newHobbies);

    // Criar os que não existem
    const personalHobbiesBase = new PersonalHobbiesDatabase();

    if (newHobbies.length) {
      const formattedHobbies: Hobby[] = newHobbies.map((hobby: string) => {
        return { id: generateID(), nome: hobby };
      });
      await hobbyBase.postHobbieList(formattedHobbies);
      // const linkNewHobbieFunction = async () => {
      //   return Promise.all(
      //     formattedHobbies.map(async (hobby: { id: string; nome: string }) => {
      //       return await personalHobbiesBase.linkHobbieEstudante(
      //         generateID(),
      //         estudanteID,
      //         hobby.id
      //       );
      //     })
      //   );
      // };
      // await linkNewHobbieFunction();

      const personalFormattedHobbies: {
        id: string;
        estudante_id: string;
        hobbie_id: string;
      }[] = formattedHobbies.map((hobby: Hobby) => {
        return {
          id: generateID(),
          estudante_id: estudanteID,
          hobbie_id: hobby.id,
        };
      });

      await personalHobbiesBase.linkHobbieEstudante(personalFormattedHobbies);
    }

    if (formattedExistingHobbie.length) {
      const personalExistingHobbies: {
        id: string;
        estudante_id: string;
        hobbie_id: string;
      }[] = formattedExistingHobbie.map((hobby: Hobby) => {
        return {
          id: generateID(),
          estudante_id: estudanteID,
          hobbie_id: hobby.id,
        };
      });

      await personalHobbiesBase.linkHobbieEstudante(personalExistingHobbies);
      // const linkOldHobbieFunction = async () => {
      //   return Promise.all(
      //     existingHobbie[0].map(async (hobby: { id: string; nome: string }) => {
      //       return await personalHobbiesBase.linkHobbieEstudante(
      //         generateID(),
      //         estudanteID,
      //         hobby.id
      //       );
      //     })
      //   );
      // };

      // if (existingHobbie.length) {
      //   await linkOldHobbieFunction();
      // }
    }

    res.status(201).send("Estudante criado com sucesso");
  } catch (error: any) {
    res.status(error.status || 400).send(error.message);
  }
};
