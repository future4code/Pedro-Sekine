import express from "express";
import { PostController } from "../PostController";

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/", postController.createPost);

postRouter.get("/:id", postController.searchPostByID);

postRouter.get("/feed/:id", postController.getFeed)


// O feed é composto por todos os posts dos amigos do usuário. 
// Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.
