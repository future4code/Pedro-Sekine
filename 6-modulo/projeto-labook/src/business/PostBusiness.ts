import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { IncompletePost } from "../errors/IncompletePost";
import { AlreadyLikedDTO } from "../model/AlreadyLikedDTO";
import { DatabaseCommentDTO } from "../model/DatabaseCommentDTO";
import { DatabaseDislikeDTO } from "../model/DatabaseDislikeDTO";
import { DatabaseGetFeedDTO } from "../model/DatabaseGetFeedDTO";
import { DatabaseLikeDTO } from "../model/DatabaseLikeDTO";
import { InputCommentDTO } from "../model/InputCommentDTO";
import { InputCreatePostDTO } from "../model/InputCreatePostDTO";
import { InputDislikeDTO } from "../model/InputDislikeDTO";
import { InputGetFeedDTO } from "../model/InputGetFeedDTO";
import { InputLikeDTO } from "../model/inputLikeDTO";
import { NewPostDTO } from "../model/NewPostDTO";
import { OutputPostDTO } from "../model/OutputPostDTO";
import { GenerateID } from "../services/GenerateID";

export class PostBusiness {
  public createPost = async (input: InputCreatePostDTO) => {
    try {
      const { photo, description, type, authorId } = input;

      if (!photo || !description || !type || !authorId) {
        throw new IncompletePost();
      }

      if (type.toLowerCase() !== "normal" && type !== "event") {
        throw new CustomError(400, "Type must be 'normal' or 'event'.");
      }

      const generateID = new GenerateID();
      const id: string = generateID.getId();

      const newPostTS: NewPostDTO = {
        id,
        photo,
        description,
        type: type.toLowerCase(),
        authorId,
      };

      const postDatabase = new PostDatabase();
      await postDatabase.createPost(newPostTS);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
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

  public getFeed = async (input: InputGetFeedDTO): Promise<OutputPostDTO[]> => {
    try {

      // calcular offset, mas no database fazer com que existe um limite de 5
      const databaseGetFeed: DatabaseGetFeedDTO = {
        id: input.id,
        offset: (input.pageNumber - 1) * 5
      }

      const postDatabase = new PostDatabase();
      const queryResult = await postDatabase.getFeed(databaseGetFeed);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public filterFeed = async (postType: string): Promise<OutputPostDTO[]> => {
    try {
      if (postType.toLowerCase() !== "normal" && postType !== "event") {
        throw new CustomError(400, "Type must be 'normal' or 'event'.");
      }
      const databaseType: string = postType.toLowerCase();

      const postDatabase = new PostDatabase();
      const queryResult = await postDatabase.filterFeed(databaseType);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public likePost = async (inputLike: InputLikeDTO): Promise<void> => {
    try {
      const generateID = new GenerateID();
      const likeVerification: AlreadyLikedDTO = {
        user_id: inputLike.userID,
        post_id: inputLike.postID,
      };
      const databaseLike: DatabaseLikeDTO = {
        id: generateID.getId(),
        user_id: inputLike.userID,
        post_id: inputLike.postID,
      };

      const postDatabase = new PostDatabase();

      const queryResult = await postDatabase.alreadyLiked(likeVerification);

      if (queryResult.length) {
        throw new CustomError(400, "Post has already been liked.");
      }

      await postDatabase.likePost(databaseLike);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public dislikePost = async (inputDislike: InputDislikeDTO): Promise<void> => {
    try {
      const databaseDislike: DatabaseDislikeDTO = {
        user_id: inputDislike.userID,
        post_id: inputDislike.postID,
      };

      const postDatabase = new PostDatabase();

      const queryResult = await postDatabase.alreadyLiked(databaseDislike);

      if (!queryResult.length) {
        throw new CustomError(
          404,
          "Post not found. Make sure post id and user id are correct."
        );
      }

      await postDatabase.dislikePost(databaseDislike);
      // se sim, deletar
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public newComment = async (inputComment: InputCommentDTO): Promise<void> => {
    try {

      if (!inputComment.comment || !inputComment.postID || !inputComment.userID){
        throw new CustomError(400, "Make sure the request has a valid comment, postID and userID.")
      }

      const generateID = new GenerateID
      const databaseComment:DatabaseCommentDTO = {
        id: generateID.getId(),
        post_id: inputComment.postID,
        user_id:inputComment.userID,
        comment: inputComment.comment
      }

      const postDatabase = new PostDatabase()
      const userDatabase = new UserDatabase()
      // check if post exists
      const postQueryResult = await postDatabase.searchPostByID(inputComment.postID)
      if (!postQueryResult.length){
        throw new CustomError(404, "Post not found.")
      }
      // check if user exists
      const userQueryResult = await userDatabase.findUserByID(inputComment.userID)
      if (!userQueryResult.length){
        throw new CustomError(404, "User not found.")
      }
      // post comment
      await postDatabase.newComment(databaseComment)

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
