import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (body) => ({
        url: "/create-volunteer",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["volunteer"],
    }),

    getVolunteer: builder.query({
      query: () => "/all-volunteer",
      providesTags: ["volunteer"],
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetVolunteerQuery } =
  volunteerApi;
