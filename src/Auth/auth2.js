import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth3";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})