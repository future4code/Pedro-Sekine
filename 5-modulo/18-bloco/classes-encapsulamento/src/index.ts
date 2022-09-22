import express, { Request, Response } from "express";
import cors from "cors";
import { Express } from "express";

import knex from "knex";
import { UserAccount } from "./classes/UserAccount";

const app = express();

app.use(express.json());
app.use(cors());

const newUser = new UserAccount('00000000000','Jeremias da Silva', 19)



app.get("/test", (req: Request, res: Response) => {
  // newUser
  res.send("test")
});

app.listen(3006, () => {
  console.log("Server is now running on port 3006. http://localhost:3006");
});