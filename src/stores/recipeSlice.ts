import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
<<<<<<< HEAD
import type { Categories, Drinks, SearchFilter } from "../types"
=======
import type { Categories, SearchFilter } from "../types"
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    serachRecipes: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: { drinks: [] },
    drinks: {
        drinks: [],
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories,
        })
    },
    serachRecipes: async (filters) => {
<<<<<<< HEAD
        const drinks = await getRecipes(filters)
        set({
            drinks,
        })
=======
        await getRecipes(filters)
>>>>>>> 42c4afe78d049008119ce33fd98ec14a438c6a05
    },
})
