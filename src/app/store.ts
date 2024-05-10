import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterSlice";
import jobsReducer from "./reducers/jobsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
