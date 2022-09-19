import { CustomError } from "../errors/CustomError";
import { DatabaseCreateRecipeDTO } from "../model/DTOs/DatabaseCreateRecipeDTO";
import { DatabaseEditRecipeDTO } from "../model/DTOs/DatabaseEditRecipeDTO";
import { OutputGetRecipeDTO } from "../model/DTOs/OutputGetRecipeDTO";
import { OutputRecipeDTO } from "../model/DTOs/OutputRecipeDTO";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public createRecipe = async (
    input: DatabaseCreateRecipeDTO
  ): Promise<void> => {
    try {
      const date = new Date();
      const databaseDate: string[] = date.toISOString().split("T");

      const databaseObject: OutputRecipeDTO = {
        id: input.id,
        title: input.title,
        description: input.description,
        user_id: input.userId,
        creation_date: databaseDate[0],
      };

      await RecipeDatabase.connection("cookenu_recipes").insert(databaseObject);

      // inverter dependência

      // const date =  new Date()
      // > Mon Sep 19 2022 09:20:29 GMT+0200 (Central European Summer Time)
      // date.toISOString
      // > "2022-09-19T07:20:29.572Z"
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getRecipe = async (id: string): Promise<OutputGetRecipeDTO[]> => {
    try {
      const queryResult = await RecipeDatabase.connection("cookenu_recipes")
        .select()
        .where("id", id);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public editRecipe = async (
    editRecipeData: DatabaseEditRecipeDTO
  ): Promise<void> => {
    try {
      await RecipeDatabase.connection("cookenu_recipes")
        .where("id", editRecipeData.id)
        .update({
          title: editRecipeData.title,
          description: editRecipeData.description,
        });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public deleteRecipe = async (id: string): Promise<void> => {
    try {
      await RecipeDatabase.connection("cookenu_recipes").where("id", id).del();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public deleteUserRecipes = async (id: string): Promise<void> => {
    try {
      await RecipeDatabase.connection("cookenu_recipes")
        .where("user_id", id)
        .del();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
