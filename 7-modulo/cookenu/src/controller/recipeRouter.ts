import express from "express"
import { RecipeController } from "./RecipeController"

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post("/", recipeController.createRecipe)
recipeRouter.put("/edit", recipeController.editRecipe)
recipeRouter.delete("/delete/:id", recipeController.deleteRecipe)
recipeRouter.get("/:id", recipeController.getRecipe)