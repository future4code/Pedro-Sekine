import express, { request, Request, Response } from "express";
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
  MISSING_DATA_TASKS: {
    status: 400,
    message:
      "This request has multiple possibilities, but you haven't met any requirements. To get tasks by their creator, use Query Params creatorUserId. To getTaskById, use :id and a Path Variable. To getAllTasksByStatus, use `status` as a Query Param. To search for tasks, use 'query' as a Query Param.",
  },
  MISSING_QUERY: {
    status: 400,
    message: "Query must contain text to look for.",
  },
  MISSING_BODY: {
    status: 400,
    message: "Your request must contain task_id and responsible_user_id.",
  },
  MISSING_TASK_ID: {
    status: 400,
    message: "Your request must contain the task ID as as Path Variable.",
  },
  MISSING_USER_ID: {
    status: 400,
    message: "Your request must contain the user ID as as Path Variable.",
  },
  MISSING_DATA_UPDATE_STATUS: {
    status: 400,
    message:
      "Make sure to input the task ID as a Path Variable and the status inside the body of the request",
  },
  STATUS_MUST_BE_ENUM: {
    status: 400,
    message:
      "Status must follow one of three options: 'todo', 'doing' or 'done'.",
  },
  MISSING_DATA_FOR_DELETION: {
    status: 400,
    message:
      "Task ID and the ID of the person responsible for the task must be part of this request.",
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
app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    const {
      task_id,
      responsible_user_id,
    }: { task_id: string; responsible_user_id: string[] } = req.body;

    if (!task_id || !responsible_user_id.length) {
      throw new Error(errors.MISSING_BODY.message);
    }

    const task = await connection("Task").select().where({ id: task_id });
    if (!task.length) {
      throw new Error(errors.TASK_NOT_FOUND.message);
    }

    const fomattedUserList = Promise.all(
      responsible_user_id.map(async (userId) => {
        const itemFormat = { id: userId };
        const user = await connection("User").select().where({ id: userId });
        if (!user.length) {
          try {
            throw new Error(errors.USER_NOT_FOUND.message);
          } catch (err: any) {
            res
              .status(errors.USER_NOT_FOUND.status)
              .send(errors.USER_NOT_FOUND.message);
          }
        }
        return itemFormat;
      })
    ).then(async (fomattedUserList) => {
      const finalList = fomattedUserList.map((object) => {
        const finalObject = {
          id: generateID(),
          user_id: object.id,
          task_id: task_id,
        };
        return finalObject;
      });

      // console.log("finalList", finalList);

      await connection("Responsible").insert(finalList);

      res.send("Responsible assignment successful.");
    });

    // await connection("Responsible").insert({
    //   id: generateID(),
    //   user_id: responsible_user_id,
    //   task_id: task_id,
    // });

    // res.send("Responsible assignment successful.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_BODY.message:
        res
          .status(errors.MISSING_BODY.status)
          .send(errors.MISSING_BODY.message);
        break;
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
    }
  }
});
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  try {
    const responsibleUser = await connection("Responsible")
      .select("User.id", "User.nickname")
      .where({ task_id: req.params.id })
      .innerJoin("User", "Responsible.user_id", "User.id");

    if (!responsibleUser.length) {
      throw new Error(errors.TASK_NOT_FOUND.message);
    }

    res.status(200).send(responsibleUser);
  } catch (err: any) {
    switch (err.message) {
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
      case errors.MISSING_TASK_ID.message:
        res
          .status(errors.MISSING_TASK_ID.status)
          .send(errors.MISSING_TASK_ID.message);
        break;
    }
  }
});
app.get("/task/delayed", async (req: Request, res: Response) => {
  const taskList = await connection("Task")
    .select()
    .whereRaw("limit_date < NOW()");

  const finalTaskList = taskList.map((task) => {
    task.limit_date = dateToUserFormat(task.limit_date);
    return task;
  });

  res.send(finalTaskList);
});
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      throw new Error(errors.MISSING_TASK_ID.message);
    }

    const data = await connection("Task")
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
    data[0].limit_date = dateToUserFormat(data[0].limit_date as string);

    const dataObject = data[0];

    const responsibleUserData = await connection("Responsible")
      .select("Responsible.user_id", "User.nickname")
      .where({ "Responsible.task_id": req.params.id })
      .innerJoin("User", "Responsible.user_id", "User.id");

    const finalData = { ...dataObject, responsibleUsers: responsibleUserData };

    res.status(200).send(finalData);
  } catch (err: any) {
    switch (err.message) {
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
      case errors.MISSING_TASK_ID.message:
        res
          .status(errors.MISSING_TASK_ID.status)
          .send(errors.MISSING_TASK_ID.message);
    }
  }
});
app.delete("/task/:id", async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      throw new Error(errors.MISSING_TASK_ID.message);
    }
    const { id } = req.params;
    const taskExistanceCheck = await connection("Task").select().where({ id });
    if (!taskExistanceCheck.length) {
      throw new Error(errors.TASK_NOT_FOUND.message);
    }

    // search for references
    await connection("Responsible").where({ task_id: id }).del();
    await connection("Task").where({id}).del()

    res.send("Task and its references deleted succefully");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_TASK_ID.message:
        res
          .status(errors.MISSING_TASK_ID.status)
          .send(errors.MISSING_TASK_ID.message);
        break;
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
    }
  }
});
app.get("/task", async (req: Request, res: Response) => {
  // TEM QUERY

  try {
    const { creatorUserId } = req.query;
    const { status } = req.query;
    const { query } = req.query;

    if (!creatorUserId && !status && !query) {
      throw new Error(errors.MISSING_DATA_TASKS.message);
    }
    if (creatorUserId && !status && !query) {
      const userTasks = await connection("Task")
        .select(
          "Task.id",
          "Task.title",
          "Task.description",
          "Task.limit_date",
          "Task.status",
          "Task.creator_user_id",
          "User.name"
        )
        .where({ "Task.creator_user_id": creatorUserId })
        .innerJoin("User", "Task.creator_user_id", "User.id");
      const userTasksWithFormatting = userTasks.map((task) => {
        task.limit_date = dateToUserFormat(task.limit_date as string);
        return task;
      });
      res.status(200).send(userTasksWithFormatting);
    }
    if (status && !creatorUserId && !query) {
      if (status !== "todo" && status !== "doing" && status !== "done") {
        throw new Error(errors.STATUS_MUST_BE_ENUM.message);
      }

      const taskList = await connection("Task")
        .select(
          "Task.id",
          "Task.title",
          "Task.description",
          "Task.limit_date",
          "Task.creator_user_id",
          "Task.status",
          "User.nickname"
        )
        .innerJoin("User", "Task.creator_user_id", "User.id")
        .where({ status });
      const finalList = Promise.all(
        taskList.map(async (task) => {
          task.limit_date = dateToUserFormat(task.limit_date);
          task.responsibleUsers = await connection("Responsible")
            .select("Responsible.user_id", "User.nickname")
            .innerJoin("User", "Responsible.user_id", "User.id")
            .where({ "Responsible.task_id": task.id });
          // console.log("Task", task);
          return task;
        })
      ).then((finalList) => res.status(200).send(finalList));
    }

    if (query && !status && !creatorUserId) {
      const queryResults = await connection("Task")
        .select(
          "Task.id",
          "Task.title",
          "Task.description",
          "Task.limit_date",
          "Task.creator_user_id",
          "User.nickname"
        )
        .innerJoin("User", "Task.creator_user_id", "User.id")
        .whereILike("Task.title", `%${query}%`)
        .orWhereILike("Task.description", `%${query}%`);
      if (!queryResults.length) {
        throw new Error(errors.TASK_NOT_FOUND.message);
      }

      const finalList = queryResults.map((task) => {
        task.limit_date = dateToUserFormat(task.limit_date);
        return task;
      });

      res.send(finalList);
    }
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA_TASKS.message:
        res
          .status(errors.MISSING_DATA_TASKS.status)
          .send(errors.MISSING_DATA_TASKS.message);
        break;
      case errors.STATUS_MUST_BE_ENUM.message:
        res
          .status(errors.STATUS_MUST_BE_ENUM.status)
          .send(errors.STATUS_MUST_BE_ENUM.message);
        break;
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
    }
  }
});
app.put("/task/status/edit", async (req: Request, res: Response) => {
  // REFERENCE 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
  // insert(finalList)
  try {
    const { task_ids } = req.body;
    const { status } = req.body;
    // console.log("task_ids", task_ids);
    // console.log("status", status);

    if (!task_ids.length || !status) {
      throw new Error(errors.MISSING_DATA_UPDATE_STATUS.message);
    }
    if (status !== "todo" && status !== "doing" && status !== "done") {
      throw new Error(errors.STATUS_MUST_BE_ENUM.message);
    }

    for (let taskID of task_ids) {
      const idCheck = await connection("Task").select().where({ id: taskID });
      // console.log("went through idCheck async function", idCheck);

      if (!idCheck.length) {
        throw new Error(errors.TASK_NOT_FOUND.message);
      }
    }

    task_ids.map(async (taskID: string) => {
      await connection("Task").where({ id: taskID }).update({ status: status });
    });

    res.status(200).send("Task updated successfully.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA_UPDATE_STATUS.message:
        res
          .status(errors.MISSING_DATA_UPDATE_STATUS.status)
          .send(errors.MISSING_DATA_UPDATE_STATUS.message);
        break;
      case errors.STATUS_MUST_BE_ENUM.message:
        res
          .status(errors.STATUS_MUST_BE_ENUM.status)
          .send(errors.STATUS_MUST_BE_ENUM.message);
        break;
      case errors.TASK_NOT_FOUND.message:
        res
          .status(errors.TASK_NOT_FOUND.status)
          .send(errors.TASK_NOT_FOUND.message);
        break;
    }
  }
});
app.put("/task/status/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || !status) {
      throw new Error(errors.MISSING_DATA_UPDATE_STATUS.message);
    }
    if (status !== "todo" && status !== "doing" && status !== "done") {
      throw new Error(errors.STATUS_MUST_BE_ENUM.message);
    }

    await connection("Task").update({ status: status }).where({ id: id });

    res.status(200).send("Task updated successfully.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA_UPDATE_STATUS.message:
        res
          .status(errors.MISSING_DATA_UPDATE_STATUS.status)
          .send(errors.MISSING_DATA_UPDATE_STATUS.message);
        break;
      case errors.STATUS_MUST_BE_ENUM.message:
        res
          .status(errors.STATUS_MUST_BE_ENUM.status)
          .send(errors.STATUS_MUST_BE_ENUM.message);
        break;
    }
  }
});
app.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  async (req: Request, res: Response) => {
    try {
      const { taskId } = req.params;
      const { responsibleUserId } = req.params;

      if (!taskId || !responsibleUserId) {
        throw new Error(errors.MISSING_DATA_FOR_DELETION.message);
      }
      const user = await connection("User")
        .select()
        .where({ id: responsibleUserId });
      if (!user.length) {
        throw new Error(errors.USER_NOT_FOUND.message);
      }
      const task = await connection("Task").select().where({ id: taskId });
      if (!task.length) {
        throw new Error(errors.TASK_NOT_FOUND.message);
      }

      await connection("Responsible")
        .where({
          user_id: responsibleUserId,
          task_id: taskId,
        })
        .del();

      res.send("Todo deleted successfully.");
    } catch (err: any) {
      switch (err.message) {
        case errors.MISSING_DATA_FOR_DELETION.message:
          res
            .status(errors.MISSING_DATA_FOR_DELETION.status)
            .send(errors.MISSING_DATA_FOR_DELETION.message);
          break;
        case errors.TASK_NOT_FOUND.message:
          res
            .status(errors.TASK_NOT_FOUND.status)
            .send(errors.TASK_NOT_FOUND.message);
          break;
        case errors.USER_NOT_FOUND.message:
          res
            .status(errors.USER_NOT_FOUND.status)
            .send(errors.USER_NOT_FOUND.message);
          break;
      }
    }
  }
);
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
app.get("/user", async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    if (!query) {
      throw new Error(errors.MISSING_QUERY.message);
    }

    const queryResults = await connection("User")
      .select("id", "nickname")
      .whereILike("nickname", `%${query}%`)
      .orWhereILike("email", `%${query}%`);

    res.send(queryResults);
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_QUERY.message:
        res
          .status(errors.MISSING_QUERY.status)
          .send(errors.MISSING_QUERY.message);
        break;
    }
  }
});
app.get("/user/all", async (req: Request, res: Response) => {
  const users = await connection("User").select("id", "nickname");

  res.status(200).send(users);
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
app.delete("/user/:id", async (req:Request, res:Response) => {
  try {
    if (!req.params.id) {
      throw new Error(errors.MISSING_USER_ID.message);
    }
    const { id } = req.params;
    const userExistanceCheck = await connection("User").select().where({ id });
    if (!userExistanceCheck.length) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    await connection("Responsible").where({ task_id: id }).del();
    const userCreatedTasks = await connection("Task").where({creator_user_id: id})
    if (userCreatedTasks.length) {
      const otherResponsibleRemoval = userCreatedTasks.map(async task => {
        await connection("Responsible").where({ task_id: task.id }).del();
      })

      await connection("Task").where({creator_user_id: id}).del()
    }
    await connection("User").where({id}).del()

    res.send("User deleted succefully");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_USER_ID.message:
        res
          .status(errors.MISSING_USER_ID.status)
          .send(errors.MISSING_USER_ID.message);
        break;
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
    }
  }
})
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
