import { BASE_URL } from "@constants/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});
