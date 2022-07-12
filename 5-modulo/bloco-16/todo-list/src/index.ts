import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateID } from "uuid";
import { connection } from "./connections";
import { dateFormatter } from "./functions/dateFormatter";
import { dateToUserFormat } from "./functions/dateToUserFormat";

const app = express();
app.use(express.json());
app.use(cors());

const errors = {
  UNKNOWN_ERROR: {
    status: 500,
    message: "Something wrong happened, please try again.",
  },
  MISSING_DATA: {
    status: 400,
    message: "Make sure to fill all data needed: name, nickname, email",
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found.",
  },
  TASK_NOT_FOUND: {
    status: 404,
    message: "Task not found.",
  },
};

app.post("/task", async (req: Request, res: Response) => {
  const { title, description, limitDate, creatorUserId } = req.body;
  const id = generateID();

  try {
    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error(errors.MISSING_DATA.message);
    }

    await connection("Task").insert({
      id,
      title,
      description,
      status: "todo",
      limit_date: dateFormatter(limitDate),
      creator_user_id: creatorUserId,
    });

    res.status(201).send("Task successfully created.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA.message:
        res
          .status(errors.MISSING_DATA.status)
          .send(errors.MISSING_DATA.message);
        break;
    }
  }
});
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const data: {
      id: string;
      title: string;
      description: string;
      limit_date: Date|string;
      status: string;
      creator_user_id: string;
      name: string;
    }[] = await connection("Task")
      .select(
        "Task.id",
        "Task.title",
        "Task.description",
        "Task.limit_date",
        "Task.status",
        "Task.creator_user_id",
        "User.name"
      )
      .where({ "Task.id": req.params.id })
      .innerJoin("User", "Task.creator_user_id", "User.id");

    if (!data.length) {
      throw new Error(errors.TASK_NOT_FOUND.message);
    }
    data[0].limit_date = dateToUserFormat(data[0].limit_date as string)

    res.status(200).send(data);
  } catch (err: any) {
    switch (err.message) {
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
    }
  }
});

app.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      throw new Error(errors.MISSING_DATA.message);
    }

    await connection("User").insert({
      id: generateID(),
      name,
      nickname,
      email,
    });

    res.status(201).send("User created successfully.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA.message:
        res
          .status(errors.MISSING_DATA.status)
          .send(errors.MISSING_DATA.message);
        break;
    }
  }
});
app.get("/user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const user = await connection("User").select().where({ id });

    if (!user.length) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    res.status(200).send(user);
  } catch (err: any) {
    switch (err.message) {
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
    }
  }
});
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  const { name, nickname } = req.body;
  const updateObject: { name?: string; nickname?: string } = {};

  try {
    if (typeof name === "string" && name.length === 0) {
      throw new Error(errors.MISSING_DATA.message);
    } else if (typeof nickname === "string" && nickname.length === 0) {
      throw new Error(errors.MISSING_DATA.message);
    } else if (name === undefined && nickname === undefined) {
      throw new Error(errors.MISSING_DATA.message);
    } else if (name === undefined) {
      updateObject.nickname = nickname;
    } else if (nickname === undefined) {
      updateObject.name = name;
    } else if (nickname && name) {
      updateObject.name = name;
      updateObject.nickname = nickname;
    } else {
      throw new Error(errors.UNKNOWN_ERROR.message);
    }

    const updatedUser = await connection("User")
      .update(updateObject)
      .where({ id: req.params.id });

    res.status(200).send("User updated successfully.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA.message:
        res
          .status(errors.MISSING_DATA.status)
          .send(errors.MISSING_DATA.message);
        break;
      case errors.UNKNOWN_ERROR.message:
        res
          .status(errors.UNKNOWN_ERROR.status)
          .send(errors.UNKNOWN_ERROR.message);
        break;
    }
  }
});
app.listen(3003, () => {
  console.log("Server is now running at http://localhost:3003");
});
