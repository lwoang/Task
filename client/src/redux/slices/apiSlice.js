import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  (import.meta.env.VITE_APP_BASE_URL?.replace(/\/$/, "")) ||
  "https://task-j1a6.onrender.com";
const API_URL = `${baseUrl}/api`;

const baseQuery = fetchBaseQuery({ baseUrl: API_URL, credentials: "include" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
