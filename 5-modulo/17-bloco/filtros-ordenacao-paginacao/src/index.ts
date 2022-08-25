import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./connection";
import { getAllUsers } from "./endpoints/getAllUsers";
import selectAllUsers from "./endpoints/selectUsers";

app.get("/user",getAllUsers)

// app.get("/testedb", async (req:Request, res:Response) => {
//   console.log("tudo bem por aqui 1")
//   const testedbconst = await connection("User").select()
//   console.log("tudo bem por aqui 2")
//   res.send(testedbconst)
// })

// app.get("/pedro", (req:Request, res:Response) => {
//   res.send("oie")
// })