import { JwtPayload } from "jsonwebtoken";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  LimitEditRecipe,
  MissingDataDeleteRecipe,
  MissingDataEditRecipe,
  MissingDataRecipe,
  MissingToken,
  NoPermission,
  ProfileNotFound,
  RecipeNotFound,
} from "../errors/CustomError";
import { DatabaseCreateRecipeDTO } from "../model/DTOs/DatabaseCreateRecipeDTO";
import { DatabaseEditRecipeDTO } from "../model/DTOs/DatabaseEditRecipeDTO";
import { inputCreateRecipeDTO } from "../model/DTOs/inputCreateRecipeDTO";
import { InputDeleteRecipeDTO } from "../model/DTOs/InputDeleteRecipeDTO";
import { InputEditRecipeDTO } from "../model/DTOs/InputEditRecipeDTO";
import { InputGetRecipeDTO } from "../model/DTOs/InputGetRecipeDTO";
import { OutputGetRecipeDTO } from "../model/DTOs/OutputGetRecipeDTO";
import { OutputRecipeDTO } from "../model/DTOs/OutputRecipeDTO";
import { ResponseGetRecipeDTO } from "../model/DTOs/ResponseGetRecipeDTO";
import { dateDatabaseToUser } from "../services/dateDatabaseToUser";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { UserBusiness } from "./UserBusiness";

export class RecipeBusiness {
  public createRecipe = async (input: inputCreateRecipeDTO): Promise<void> => {
    try {
      const { token, title, description } = input;

      if (!token) {
        throw new MissingToken();
      }

      if (!title || !description) {
        throw new MissingDataRecipe();
      }

      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;
      const id = payload.id;

      const userDatabase = new UserDatabase();
      const user = await userDatabase.searchUserById(id);

      if (!user.length) {
        throw new ProfileNotFound();
      }

      const idGenerator = new IdGenerator();
      const recipeId = idGenerator.getId();

      const databaseCreateRecipe: DatabaseCreateRecipeDTO = {
        id: recipeId,
        title: title,
        description: description,
        userId: id,
      };

      const recipeDatabase = new RecipeDatabase();
      await recipeDatabase.createRecipe(databaseCreateRecipe);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getRecipe = async (
    input: InputGetRecipeDTO
  ): Promise<ResponseGetRecipeDTO> => {
    try {
      const { id, token } = input;

      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;

      const recipeDatabase = new RecipeDatabase();
      const recipe: OutputGetRecipeDTO[] = await recipeDatabase.getRecipe(id);

      if (!recipe.length) {
        throw new RecipeNotFound();
      }

      const responseDate = dateDatabaseToUser(recipe[0].creation_date);

      const responseObject: ResponseGetRecipeDTO = {
        id: recipe[0].id,
        title: recipe[0].title,
        description: recipe[0].description,
        creationDate: responseDate,
      };

      return responseObject;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public editRecipe = async (input: InputEditRecipeDTO): Promise<void> => {
    try {
      const { id, title, description, token } = input;

      if (!token) {
        throw new MissingToken();
      }
      if (!id || !title || !description) {
        throw new MissingDataEditRecipe();
      }

      // look for id
      const recipeDatabase = new RecipeDatabase();
      const originalRecipe: OutputGetRecipeDTO[] =
        await recipeDatabase.getRecipe(id);
      if (!originalRecipe.length) {
        throw new RecipeNotFound();
      }
      // validate token
      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;
      // verify if IDs are the same
      if (payload.id !== originalRecipe[0].user_id) {
        throw new LimitEditRecipe();
      }

      const databaseEditRecipe: DatabaseEditRecipeDTO = {
        id,
        title,
        description,
        user_id: originalRecipe[0].user_id,
      };

      // make edit
      await recipeDatabase.editRecipe(databaseEditRecipe);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public deleteRecipe = async (input: InputDeleteRecipeDTO): Promise<void> => {
    try {
      const { id, token } = input;

      if (!token) {
        throw new MissingToken();
      }
      if (!id) {
        throw new MissingDataDeleteRecipe();
      }

      // look for id
      const recipeDatabase = new RecipeDatabase();
      const originalRecipe: OutputGetRecipeDTO[] =
        await recipeDatabase.getRecipe(id);
      if (!originalRecipe.length) {
        throw new RecipeNotFound();
      }
      // validate token
      const tokenManager = new TokenManager();
      const payload = tokenManager.verifyToken(token) as JwtPayload;
      // verify if IDs are the same
      if (
        payload.role === "normal" &&
        payload.id !== originalRecipe[0].user_id
      ) {
        throw new NoPermission();
      }

      // make edit
      await recipeDatabase.deleteRecipe(id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
