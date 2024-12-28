import { z } from "zod"

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
        })
    ),
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
})
<<<<<<< HEAD

export const DrinkAPIREsponse = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    idDrink: z.string(),
})

export const DrinksAPIREsponse = z.object({
    drinks: z.array(DrinkAPIREsponse),
})
=======
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05
