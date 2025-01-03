import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import { createBookmarksSlice, BookmarksSliceType } from "./bookmarkSlice"
import {
    createNotificationSlice,
    NotificationSliceType,
} from "./notificationSlice"

export const useAppStore = create<
    RecipesSliceType & BookmarksSliceType & NotificationSliceType
>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createBookmarksSlice(...a),
        ...createNotificationSlice(...a),
    }))
)
