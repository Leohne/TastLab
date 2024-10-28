import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-features/user.ts"

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})
