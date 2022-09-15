import { CustomError } from "../errors/CustomError";
import { NewPostDTO } from "../model/NewPostDTO";
import { OutputPostDTO } from "../model/OutputPostDTO";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public createPost = async (newPostTS: NewPostDTO) => {
    try {
      const newPostDB = {
        id: newPostTS.id,
        photo: newPostTS.photo,
        description: newPostTS.description,
        type: newPostTS.type,
        author_id: newPostTS.authorId,
      };

      await PostDatabase.connection("labook_posts").insert(newPostDB);
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };
  public searchPostByID = async (inputID: string): Promise<OutputPostDTO[]> => {
    const queryResult: {
      id: string;
      photo: string;
      description: string;
      type: string;
      created_at: Date;
      author_id: string;
    }[] = await PostDatabase.connection("labook_posts").where("id", inputID);

    const post: OutputPostDTO[] = [
      {
        id: queryResult[0].id,
        photo: queryResult[0].photo,
        description: queryResult[0].description,
        type: queryResult[0].type,
        createdAt: queryResult[0].created_at,
        authorId: queryResult[0].author_id,
      },
    ];

    // Espero que esteja na formatação adequada para TS 👇 Fazer DTO de volta.
    // Talvez a solução na verdade seja um Adapter para casos como esse

    return post;
  };

  public getFeed = async (inputID: string): Promise<OutputPostDTO[]> => {
    try {
      const queryResult = await PostDatabase.connection("labook_posts")
        .innerJoin("labook_connections", function () {
          this.on(
            "labook_connections.user_id_one",
            "=",
            "labook_posts.author_id"
          ).orOn(
            "labook_connections.user_id_two",
            "=",
            "labook_posts.author_id"
          );
        })
        .where("labook_connections.user_id_one", inputID)
        .orWhere("labook_connections.user_id_two", inputID)
        .orderBy("created_at", "desc");

      console.log("queryResult", queryResult);

      const postCollection: OutputPostDTO[] = queryResult.map((post) => {
        return {
          id: post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
          createdAt: post.created_at,
          authorId: post.author_id,
        };
      });

      return postCollection;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
