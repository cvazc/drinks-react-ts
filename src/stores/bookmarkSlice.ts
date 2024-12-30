import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type BookmarksSliceType = {
    favorites: Recipe[]
}

export const createBookmarksSlice: StateCreator<BookmarksSliceType> = () => ({
    favorites: [],
})
