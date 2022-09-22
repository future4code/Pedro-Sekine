import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { InputCommentDTO } from "../model/InputCommentDTO";
import { InputCreatePostDTO } from "../model/InputCreatePostDTO";
import { InputDislikeDTO } from "../model/InputDislikeDTO";
import { InputGetFeedDTO } from "../model/InputGetFeedDTO";
import { InputLikeDTO } from "../model/inputLikeDTO";
import { OutputPostDTO } from "../model/OutputPostDTO";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, authorId } = req.body;

      const inputPost: InputCreatePostDTO = {
        photo,
        description,
        type,
        authorId,
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(inputPost);

      res.status(201).send("Success");
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public searchPostByID = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const inputSearchPost: string = id;

      const postBusiness = new PostBusiness();
      const queryResult: OutputPostDTO[] = await postBusiness.seearchPostByID(
        inputSearchPost
      );

      res.status(200).send(queryResult);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getFeed = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id, page } = req.params;
      const pageNumber = Number(page)
      const inputGetFeed: InputGetFeedDTO = {id, pageNumber};

      const postBusiness = new PostBusiness();
      const queryResult = await postBusiness.getFeed(inputGetFeed);

      res.send(queryResult);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public filterFeed = async (req: Request, res: Response): Promise<void> => {
    try {
      const { type } = req.params;
      const postType: string = type;

      const postBusiness = new PostBusiness();
      const queryResult = await postBusiness.filterFeed(postType);

      res.send(queryResult);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public likePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userID, postID } = req.body;

      const inputLike: InputLikeDTO = { userID, postID };

      const postBusiness = new PostBusiness();
      await postBusiness.likePost(inputLike);

      res.status(201).send("Post liked.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public dislikePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userID, postID } = req.body;

      const inputDislike: InputDislikeDTO = { userID, postID };
      const postBusiness = new PostBusiness();
      await postBusiness.dislikePost(inputDislike);

      res.status(201).send("Post disliked.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public newComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const { postID, userID, comment } = req.body;

      const inputComment: InputCommentDTO = { postID, userID, comment };

      const postBusiness = new PostBusiness()
      await postBusiness.newComment(inputComment)

      res.status(201).send("success.")

    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
