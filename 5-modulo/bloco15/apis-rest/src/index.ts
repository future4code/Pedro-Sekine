// https://documenter.getpostman.com/view/18694580/UzJPMEso

import express, { Request, Response } from "express";
import cors from "cors";
import data from "./data.json";
import { v4 as generateID } from "uuid";
import { writeFile } from "fs";

const app = express();
app.use(express.json());
app.use(cors());

enum USERTYPES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

const errors = {
  DATA_MISSING: {
    status: 400,
    message:
      "You should fill all fields to create a user: name, email, type, age",
  },
  NO_TYPE: {
    status: 400,
    message: "You must choose between Admin or User",
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found",
  },
  WRONG_DATA_TYPE: {
    status: 400,
    message: "Name and email must be strings",
  },
  NOT_A_NUMBER: {
    status: 400,
    message: "Age must be a non-negative number",
  },
};

app.get("/users", (req: Request, res: Response) => {
  try {
    const nameRequest = req.query.name as string;
    if (nameRequest) {
      const searchResult = data.find(
        (user) => user.name.toLowerCase() === nameRequest.toLowerCase()
      );

      if (!searchResult) {
        throw new Error(errors.USER_NOT_FOUND.message);
      } else {
        res.status(200).send(searchResult);
      }
    }

    res.send(data);
  } catch (err: any) {
    switch (err.message) {
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
    }
  }
});

app.get("/users/type/:type", (req: Request, res: Response) => {
  try {
    const requestType = req.params.type.toUpperCase();

    if (requestType !== USERTYPES.ADMIN && requestType !== USERTYPES.NORMAL) {
      throw new Error(errors.NO_TYPE.message);
    }

    const usersByType = data.filter((user) => user.type === requestType);

    res.send(usersByType);
  } catch (err: any) {
    switch (err.message) {
      case errors.NO_TYPE.message:
        res.status(errors.NO_TYPE.status).send(errors.NO_TYPE.message);
        break;
    }
  }
});

app.post("/users/create", (req: Request, res: Response) => {
  try {
    const { name, email, type, age } = req.body;
    if (!name || !email || !type || !age) {
      throw new Error(errors.DATA_MISSING.message);
    }
    if (
      type.toUpperCase() !== USERTYPES.ADMIN &&
      type.toUpperCase() !== USERTYPES.NORMAL
    ) {
      throw new Error(errors.NO_TYPE.message);
    }
    if (typeof name === "number" || typeof email === "number") {
      throw new Error(errors.WRONG_DATA_TYPE.message);
    }
    if (Number.isNaN(Number(age)) === true || Number(age) < 0) {
      throw new Error(errors.NOT_A_NUMBER.message);
    }

    const userID = generateID();

    const newUser = {
      id: userID,
      name: name,
      email: email,
      type: type,
      age: age,
    };

    const newUserList = [...data, newUser];

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/apis-rest/src/data.json",
      JSON.stringify(newUserList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(201).send("Usuário criado com sucesso.");
  } catch (err: any) {
    switch (err.message) {
      case errors.DATA_MISSING.message:
        res
          .status(errors.DATA_MISSING.status)
          .send(errors.DATA_MISSING.message);
        break;
      case errors.NO_TYPE.message:
        res.status(errors.NO_TYPE.status).send(errors.NO_TYPE.message);
        break;
      case errors.WRONG_DATA_TYPE.message:
        res
          .status(errors.WRONG_DATA_TYPE.status)
          .send(errors.WRONG_DATA_TYPE.message);
        break;
      case errors.NOT_A_NUMBER.message:
        res
          .status(errors.NOT_A_NUMBER.status)
          .send(errors.NOT_A_NUMBER.message);
        break;
    }
  }
});

app.put("/users/create", (req: Request, res: Response) => {
  const lastUserIndex = data.length - 1;

  const newUserList = data.map((user, index) => {
    if (index === lastUserIndex) {
      user.name = user.name + "-ALTERADO";
    }
    return user;
  });

  writeFile(
    "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/apis-rest/src/data.json",
    JSON.stringify(newUserList),
    (err) => {
      if (err) {
        console.log("erro");
      }
    }
  );

  res.status(200).send("Usuário editado com sucesso");
});

app.patch("/users/create", (req: Request, res: Response) => {
  const lastUserIndex = data.length - 1;

  const newUserList = data.map((user, index) => {
    if (index === lastUserIndex) {
      user.name = user.name + "-REALTERADO";
    }
    return user;
  });

  writeFile(
    "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/apis-rest/src/data.json",
    JSON.stringify(newUserList),
    (err) => {
      if (err) {
        console.log("erro");
      }
    }
  );
  res.status(200).send("Usuário editado com sucesso");
});

app.get("/pedro", (req: Request, res: Response) => {
  res.send("brabo");
});

app.listen(3003, () => {
  console.log("Server is now running on port 3003");
});
