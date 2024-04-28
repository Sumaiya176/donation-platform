import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCommunity: builder.mutation({
      query: (body) => ({
        url: "/create-community",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["community"],
    }),

    getCommunity: builder.query({
      query: () => "/all-community",
      providesTags: ["community"],
    }),
  }),
});

export const { useCreateCommunityMutation, useGetCommunityQuery } =
  communityApi;
