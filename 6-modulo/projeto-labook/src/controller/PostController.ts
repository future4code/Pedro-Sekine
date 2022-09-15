import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { InputCreatePostDTO } from "../model/InputCreatePostDTO";
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
      console.log("req.body", req.params);
      const { id } = req.params;

      console.log("id", id);
      const userID: string = id;

      const postBusiness = new PostBusiness();
      const queryResult = await postBusiness.getFeed(userID);

      res.send(queryResult);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
