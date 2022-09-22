import express, { Request, Response } from "express"
import cors from "cors"
import { PersonalHobbiesDatabase } from "../classes/PersonalHobbiesDatabase"

const app = express()
app.use(express.json())
app.use(cors())

export const getSameHobbyEstudante = async(req:Request, res: Response) => {
  const hobbyID = req.params.id

  const personalHobbyBase = new PersonalHobbiesDatabase
  const searchResult = await personalHobbyBase.searchStudents(hobbyID)

  res.send(searchResult)

}