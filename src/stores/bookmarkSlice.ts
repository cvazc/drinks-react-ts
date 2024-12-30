import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import {
    createNotificationSlice,
    NotificationSliceType,
} from "./notificationSlice"

export type BookmarksSliceType = {
    favorites: Recipe[]
    handleClickBookmark: (recipe: Recipe) => void
    bookmarkExist: (id: Recipe["idDrink"]) => boolean
    loadFromStorage: () => void
}

export const createBookmarksSlice: StateCreator<
    BookmarksSliceType & RecipesSliceType & NotificationSliceType,
    [],
    [],
    BookmarksSliceType
> = (set, get, api) => ({
    favorites: [],
    handleClickBookmark: (recipe) => {
        if (get().bookmarkExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(
                    (favorite) => favorite.idDrink !== recipe.idDrink
                ),
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: "Se eliminó de favoritos",
                error: false,
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: "Se agregó a favoritos",
                error: false,
            })
        }
        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },
    bookmarkExist: (id) => {
        return get().favorites.some((favorite) => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedBookmarks = localStorage.getItem("favorites")
        if (storedBookmarks) {
            set({
                favorites: JSON.parse(storedBookmarks),
            })
        }
    },
})
