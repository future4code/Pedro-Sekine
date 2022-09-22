import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { TaskInputDTO } from "../model/task";

export class TaskController {
  public createTask = async (req: Request, res: Response) => {
    try {
      const { title, description, deadline, authorId } = req.body;

      const input: TaskInputDTO = {
        title,
        description,
        deadline,
        authorId,
      };

      const taskBusiness = new TaskBusiness();
      await taskBusiness.createTask(input);

      res.status(201).send({ message: "Produto criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
