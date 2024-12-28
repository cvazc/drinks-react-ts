import axios from "axios"
<<<<<<< HEAD
import { CategoriesAPIResponseSchema, DrinksAPIREsponse } from "../utils/recipes-schema"
=======
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema"
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05
import { SearchFilter } from "../types"

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)

    if (result.success) {
        return data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
<<<<<<< HEAD

    const { data } = await axios(url)
    const result = DrinksAPIREsponse.safeParse(data)
=======
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05

    if (result.success) {
        return data
    }
}
