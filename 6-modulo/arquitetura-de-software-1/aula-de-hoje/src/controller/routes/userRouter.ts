import express, { Request, Response } from "express";
import { UserController } from "../UserController";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/", userController.createUser);

userRouter.get("/teste", (req: Request, res: Response) => {
  console.log("chegou aqui");
  res.send("foi");
});
