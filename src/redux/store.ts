import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/slice";
import { filtersReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
