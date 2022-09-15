import express from "express"
import { UserController } from "../UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/", userController.createUser)

userRouter.post("/connection", userController.createConnection)
userRouter.delete("/connection", userController.deleteConnection)