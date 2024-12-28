import { z } from "zod"
import {
    CategoriesAPIResponseSchema,
    DrinkAPIREsponse,
    DrinksAPIREsponse,
    RecipeAPIResponseSchema,
    SearchFilterSchema,
} from "../utils/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIREsponse>
export type Drink = z.infer<typeof DrinkAPIREsponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
