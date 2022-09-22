import express, { Request, Response } from "express";
import cors from "cors";
import { postNewTurma } from "./requests/postNewTurma";
import { getAllTurmas } from "./requests/getAllTurmas";
import { serverRunning } from "./constants/serverRunning";
import { searchTurma } from "./requests/searchTurma";
import { changeMod } from "./requests/changeMod";
import { postNewEstudante } from "./requests/postNewEstudante";
import { searchEstudante } from "./requests/searchEstudante";
import { changeEstudanteTurma } from "./requests/changeEstudanteTurma";
import { postNewDocente } from "./requests/postNewDocente";
import { searchDocente } from "./requests/searchDocente";
import { putTurmaDocente } from "./requests/putTurmaDocente";
import { getAllFromTurma } from "./requests/getAllFromTurma";
import { getSameHobbyEstudante } from "./requests/getSameHobbyEstudante";
import { getDocenteByEspecialidade } from "./requests/getDocenteByEspecialidade";
import { searchAllBySign } from "./requests/searchAllBySign";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/turmas", getAllTurmas);
app.get("/turmas/:search", searchTurma);
app.get("/turmas/:id/todos", getAllFromTurma)
app.post("/turmas", postNewTurma);
app.patch("/turma/:id/modulo/:modulo", changeMod);

app.get("/estudante/:search", searchEstudante)
app.post("/estudante", postNewEstudante);
app.patch("/estudante/:id/turma/:turmaID", changeEstudanteTurma);
app.get("/estudante/hobby/:id", getSameHobbyEstudante)

app.post("/docente", postNewDocente)
app.get("/docente", searchDocente)
app.get("/docente/:especialidade", getDocenteByEspecialidade)
app.put("/docente/:docenteID/turma/:turmaID", putTurmaDocente)

app.get("/search/sign/:sign", searchAllBySign)

app.listen(3003, serverRunning);

