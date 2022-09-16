import express from "express";
import { PostController } from "../PostController";

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/", postController.createPost);

postRouter.get("/:id", postController.searchPostByID);

postRouter.get("/feed/:id/:page", postController.getFeed)

postRouter.get("/feed/all/filter/:type", postController.filterFeed)

postRouter.post("/like", postController.likePost)

postRouter.delete("/like", postController.dislikePost)

postRouter.post("/comment", postController.newComment)


// LIMIT e OFFSET