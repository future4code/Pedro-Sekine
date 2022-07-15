// https://documenter.getpostman.com/view/18694580/UzJLPbwm

import express, { Request, Response } from "express";
import cors from "cors";
import todos from "./todos.json";
import { v4 as generateId } from "uuid";
import { writeFile } from "fs";

type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  const userId: string = req.headers.userid as string;

  if (!userId) {
    res.status(400).send("You must enter a User").end();
    
  }

  const userCheck = todos.find((todo) => {
    if (userId === todo.userId) {
      return true;
    }
  });
  if (!userCheck) {
    res.status(404).send("User not Found").end();
  }

  const filteredTodos = todos.filter(todo => {
    return (userId === todo.userId)
  })

  res.status(200).send(filteredTodos)
});

app.delete("/todos/delete/:id", (req, res) => {
  const todoId: string = req.params.id;
  const userId: string = req.headers.userid as string;

  if (!todoId || !userId) {
    res
      .status(400)
      .send("You must send the user ID and the name of the task in the request")
      .end();
  }

  const findTodo = todos.find((todo) => {
    return todoId === todo.id;
  });

  if (!findTodo) {
    res.status(404).send("task not found").end();
  }

  const updatedTodoList = todos.filter((todo) => {
    if (userId !== todo.userId || todoId !== todo.id) {
      return true;
    } else if (userId === todo.userId && todoId === todo.id) {
      return false;
    }
  });

  writeFile(
    "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/aprofundamento-express/src/todos.json",
    JSON.stringify(updatedTodoList),
    (err) => {
      if (err) {
        console.log("erro");
      }
    }
  );

  res.status(200).send("Tarefa deletada com sucesso.");
});

app.post("/todos/edit/status/:id", (req, res) => {
  const receivedUserId: string = req.headers.userid as string;
  console.log("receivedUserId", receivedUserId);
  const todoId: string = req.params.id;

  if (!receivedUserId || !todoId) {
    res
      .status(400)
      .send("You must send the user ID and the name of the task in the request")
      .end();
  }

  const editedTodoArray: Todo[] = todos.map((todo) => {
    if (todo.id === todoId && receivedUserId === todo.userId) {
      todo.completed = !todo.completed;
      // } else {
      //   res.status(404).send("User or Task not found.").end();
    }
    return todo;
  });

  writeFile(
    "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/aprofundamento-express/src/todos.json",
    JSON.stringify(editedTodoArray),
    (err) => {
      if (err) {
        console.log("erro");
      }
    }
  );

  res.send("Status da Tarefa alterado com sucesso.");
});

app.post("/todos/create", (req, res) => {
  const receivedBody: string = req.body.title;
  const receivedUserId: string = req.headers.userid as string;
  const id: string = generateId();

  if (!receivedBody || !receivedUserId) {
    res
      .status(400)
      .send(
        "You must send the user ID and the name of the task in the request"
      );
    return;
  }

  const finalTodo: Todo = {
    userId: receivedUserId,
    id: id,
    title: receivedBody,
    completed: false,
  };

  const finalTodoList = JSON.stringify([...todos, finalTodo]);

  writeFile(
    "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/aprofundamento-express/src/todos.json",
    finalTodoList,
    (err) => {
      if (err) {
        console.log("erro");
      }
    }
  );

  res.send(finalTodo);
  // const newTodo:Todo =
});

app.get("/todos/:status", (req: Request, res: Response) => {
  if (req.params.status !== "true" && req.params.status !== "false") {
    res
      .status(400)
      .send("You must use 'true' or 'false' as the status of your request");
    return;
  }

  const booleanStatus: boolean = "true" === req.params.status;

  const filteredArray = todos.filter((todo) => {
    return todo.completed === booleanStatus;
  });
  res.send(filteredArray);
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
  return;
});

app.get("/pedro", (req, res) => {
  res.send("esse cara é fera");
});

app.listen(3003, () => {
  console.log("Server is Running in port 3003, http://localhost:3003");
});
