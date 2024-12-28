import { z } from "zod"
<<<<<<< HEAD
import { CategoriesAPIResponseSchema, DrinksAPIREsponse, SearchFilterSchema } from "../utils/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIREsponse>
=======
import { CategoriesAPIResponseSchema, SearchFilterSchema } from "../utils/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05
