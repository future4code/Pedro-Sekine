import express from "express"
import { UserBusiness } from "../../business/UserBusines"
import { UserDatabase } from "../../data/UserDatabase"
import { UserController } from "../UserController"

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post("/", userController.createUser)

userRouter.post("/connection", userController.createConnection)
userRouter.delete("/connection", userController.deleteConnection)