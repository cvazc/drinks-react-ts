import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type BookmarksSliceType = {
    favorites: Recipe[]
    handleClickBookmark: (recipe: Recipe) => void
    bookmarkExist: (id: Recipe["idDrink"]) => boolean
}

export const createBookmarksSlice: StateCreator<BookmarksSliceType> = (
    set,
    get
) => ({
    favorites: [],
    handleClickBookmark: (recipe) => {
        if (get().bookmarkExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(
                    (favorite) => favorite.idDrink !== recipe.idDrink
                ),
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }))
        }
    },
    bookmarkExist: (id) => {
        return get().favorites.some((favorite) => favorite.idDrink === id)
    },
})
