import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodoApi = createApi({
  reducerPath: "TodoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTasks: build.query({
      query: (userId) => `task?userId=${userId}`,
      providesTags: ["Todos"],
    }),

    addUser: build.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Todos"],
    }),

    getUsername: build.query({
      query: () => "users",
      providesTags: ["Todos"],
    }),

    addTask: build.mutation({
      query: (newTask) => ({
        url: "task",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Todos"],
    }),

    removeTask: build.mutation({
      query: (taskId) => ({
        url: `task/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),

    updateTask: build.mutation({
      query: ({ id, status }) => ({
        url: `task/${id}`,
        method: "PATCH",
        body: { status: !status },
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddUserMutation,
  useGetUsernameQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} = TodoApi;
