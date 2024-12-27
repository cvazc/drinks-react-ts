import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

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
        const drinks = await getRecipes(filters)
        set({
            drinks,
        })
    },
})
