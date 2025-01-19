import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
      fetchUsers: builder.query({
          query: () => "/users",
      }),
      addUser: builder.mutation({
          query: (newUser) => ({
              url: "/users",
              method: "POST",
              body: newUser,
          }),
      }),
  }),
});

export const { useFetchUsersQuery, useAddUserMutation } = apiSlice;
