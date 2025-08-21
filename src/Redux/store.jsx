import { configureStore } from "@reduxjs/toolkit";
import { TodoApi } from "./TodoApi/TodoApi";

export const store = configureStore({
  reducer: {
    [TodoApi.reducerPath]: TodoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoApi.middleware),
});
