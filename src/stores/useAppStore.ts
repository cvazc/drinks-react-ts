import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import { createBookmarksSlice, BookmarksSliceType } from "./bookmarkSlice"

export const useAppStore = create<RecipesSliceType & BookmarksSliceType>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createBookmarksSlice(...a),
    }))
)
