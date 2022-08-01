// testar express e cors para depois fazer knex e dotenv junto com connect e tal
import express from 'express'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Server is now running at http://localhost:3003")
})