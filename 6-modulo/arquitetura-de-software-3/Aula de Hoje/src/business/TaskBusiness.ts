import { TaskDatabase } from "../data/TaskDatabase";
import { InvalidDescription } from "../errors/CustomError";
import { task, TaskInputDTO } from "../model/task";
import { generateId } from "../services/generateId";

export class TaskBusiness {
  public createTask = async (input: TaskInputDTO) => {
    try {
      const { title, description, deadline, authorId } = input;

      if (!title || !description || !deadline || !authorId) {
        throw new Error(
          '"title", "description", "deadline" e "authorId" são obrigatórios'
        );
      }

      if (description.length < 100) {
        throw new InvalidDescription()
      }

      const id: string = generateId();

      const taskDatabase = new TaskDatabase();

      const task: task = {
        id,
        title,
        description,
        deadline,
        authorId,
      };

      await taskDatabase.insertTask(task);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
