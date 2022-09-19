import { CustomError } from "../errors/CustomError";
import { DatabaseCreateUserDTO } from "../model/DTOs/DatabaseCreateUserDTO";
import { DatabaseUnfollowUserDTO } from "../model/DTOs/DatabaseUnfollowUserDTO";
import { OutputFollowUserDTO } from "../model/DTOs/OutputFollowUserDTO";
import { OutputUserDTO } from "../model/DTOs/OutputUserDTO";
import { ResponseFeedDTO } from "../model/DTOs/ResponseFeedDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (
    userData: DatabaseCreateUserDTO
  ): Promise<void> => {
    try {
      await UserDatabase.connection("cookenu_users").insert(userData);
    } catch (error: any) {
      throw new CustomError(
        400,
        "Something unexpected happened. Please try again."
      );
    }
  };

  public searchUserByEmail = async (
    email: string
  ): Promise<OutputUserDTO[]> => {
    const queryResult = await UserDatabase.connection("cookenu_users")
      .select()
      .where("email", email);

    return queryResult;
  };

  public searchUserById = async (id: string): Promise<OutputUserDTO[]> => {
    const queryResult: OutputUserDTO[] = await UserDatabase.connection(
      "cookenu_users"
    )
      .select()
      .where("id", id);

    return queryResult;
  };

  public followUser = async (
    databaseObject: OutputFollowUserDTO
  ): Promise<void> => {
    try {
      await UserDatabase.connection("cookenu_followers").insert(databaseObject);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public unfollowUser = async (
    databaseObject: DatabaseUnfollowUserDTO
  ): Promise<void> => {
    try {
      await UserDatabase.connection("cookenu_followers")
        .del()
        .where("followed_id", databaseObject.followed_id)
        .andWhere("follower_id", databaseObject.follower_id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public searchConnectionById = async (
    userFollowerId: string,
    userToFollowId: string
  ): Promise<OutputUserDTO[]> => {
    try {
      const queryResult: OutputUserDTO[] = await UserDatabase.connection(
        "cookenu_followers"
      )
        .where("follower_id", userFollowerId)
        .andWhere("followed_id", userToFollowId);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getFeed = async (id: string): Promise<ResponseFeedDTO[]> => {
    try {
      const queryResult = await UserDatabase.connection("cookenu_followers")
        .where("cookenu_followers.follower_id", id)
        .join(
          "cookenu_users",
          "cookenu_users.id",
          "cookenu_followers.followed_id"
        )
        .join(
          "cookenu_recipes",
          "cookenu_recipes.user_id",
          "cookenu_followers.followed_id"
        )
        .select(
          "cookenu_recipes.id",
          "cookenu_recipes.title",
          "cookenu_recipes.description",
          "cookenu_recipes.creation_date",
          "cookenu_recipes.user_id",
          "cookenu_users.name"
        );
      const responseArray: ResponseFeedDTO[] = queryResult.map((object) => {
        return {
          id: object.id,
          title: object.title,
          description: object.description,
          createdAt: object.creation_date,
          userId: object.user_id,
          userName: object.name,
        };
      });

      return responseArray;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public unfollowAll = async (id: string): Promise<void> => {
    try {
      await UserDatabase.connection("cookenu_followers")
        .del()
        .where("followed_id", id)
        .orWhere("follower_id", id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public deleteUser = async (id: string): Promise<void> => {
    try {
      await UserDatabase.connection("cookenu_users").del().where("id", id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
