import express, { Request, Response } from "express"
import cors from "cors"
import { DocenteTabela } from "../classes/DocenteTabela"

const app = express()

app.use(express.json())
app.use(cors())

export const searchDocente = async (req: Request, res: Response) => {
  const docenteBase = new DocenteTabela
  const getResult = await docenteBase.getAllDocente()

  res.status(200).send(getResult)
}