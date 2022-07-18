import { Response, Request } from "express";
import selectUsers from "./selectUsers";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const nameFilter = req.query.name as string;
    const typeFilter = req.query.type as string;
    const orderTypeChoice = req.query.order as string;
    const page = req.query.page as string

    const users = await selectUsers(nameFilter, typeFilter, orderTypeChoice, page);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
