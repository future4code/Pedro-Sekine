import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import { connection } from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/movie", async (req: Request, res: Response) => {
  const { name, synopsis, launchDate, rating, playingLimitDate } = req.body;
  await connection("Movie").insert({
    name,
    synopsis,
    launchDate: new Date(launchDate),
    rating,
    playing_limit_date: new Date(playingLimitDate),
  });

  res.send("Filme criado com sucesso");
});

app.get("/movie/all", async (req: Request, res: Response) => {
  const allMovies = await connection("Movie").limit(15);

  res.status(200).send(allMovies);
});

app.get("/movie/search", async (req: Request, res: Response) => {
  const queryString = req.query.test;
  const searchResult = await connection("Movie")
    .whereILike('name', `%${queryString}%`)
    .orWhereILike("synopsis", `%${queryString}%`);

  res.send(searchResult);
});

//🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
app.get("/actor", async (req: Request, res: Response) => {
  // ✅ Query Builder
  // const actorList = await connection("Actor")
  // res.status(200).send(actorList)

  // 🔴 RAW
  const gender = req.query.gender;
  if (!gender) {
    const response = await connection.raw(`
    SELECT * FROM Actor
  `);
    res.status(200).send(response[0]);
  } else {
    const response = await connection.raw(`
      SELECT * FROM Actor
      WHERE gender = "${gender}"
    `);
    res.status(200).send(response[0]);
  }
});

app.get("/actor/:name", async (req: Request, res: Response) => {
  const actor = await connection.raw(`
    SELECT * FROM Actor 
    WHERE name = "${req.params.name}"
  `);
  res.status(200).send(actor[0][0]);
});

app.delete("/actor/:id/delete", async (req: Request, res: Response) => {
  await connection("Actor").delete().where({ id: req.params.id });

  res.status(200).send("Ator deletado com sucesso.");
});

app.patch("/actor/:id/salary", async (req: Request, res: Response) => {
  await connection("Actor")
    .update({
      salary: req.body.salary,
    })
    .where({
      id: req.params.id,
    });

  res.status(200).send("Salário atualizado com sucesso.");
});

app.get(
  "/actor/salary/average/:gender",
  async (req: Request, res: Response) => {
    const average = await connection("Actor")
      .avg("salary")
      .where({ gender: req.params.gender });

    res.status(200).send(average);
  }
);

app.get("/pedro", (req: Request, res: Response) => {
  res.send("brabo");
});

app.listen(3003, () => {
  console.log("Server in Running on port 3003");
});
