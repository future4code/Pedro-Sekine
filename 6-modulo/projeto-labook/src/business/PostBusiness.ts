import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../errors/CustomError";
import { InputCreatePostDTO } from "../model/InputCreatePostDTO";
import { NewPostDTO } from "../model/NewPostDTO";
import { OutputPostDTO } from "../model/OutputPostDTO";
import { GenerateID } from "../services/GenerateID";

export class PostBusiness {
  public createPost = async (input: InputCreatePostDTO) => {
    try {
      const { photo, description, type, authorId } = input;

      const generateID = new GenerateID();
      const id: string = generateID.getId();

      const newPostTS: NewPostDTO = { id, photo, description, type, authorId };

      const postDatabase = new PostDatabase();
      await postDatabase.createPost(newPostTS);
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };

  public seearchPostByID = async (inputID: string) => {
    try {
      const postDatabase = new PostDatabase();
      const queryResult: OutputPostDTO[] = await postDatabase.searchPostByID(
        inputID
      );

      if (!queryResult.length) {
        throw new CustomError(404, "Post not found");
      }

      // Espero que esteja na formatação adequada para TS 👇 Fazer DTO de volta
      return queryResult;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getFeed = async (inputID: string):Promise<OutputPostDTO[]> => {
    try {
      const postDatabase = new PostDatabase()
      const queryResult = await postDatabase.getFeed(inputID)

      return queryResult
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
