import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./services/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import planets from "@store/slices/planets";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    planets,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
