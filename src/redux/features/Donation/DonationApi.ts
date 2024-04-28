import { baseApi } from "../../api/baseApi";

const addDonationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonationPost: builder.mutation({
      query: (donationInfo) => ({
        url: "/add-donation-post",
        method: "POST",
        body: donationInfo,
      }),
      invalidatesTags: ["donation"],
    }),

    getDonation: builder.query({
      query: () => "/all-donations",
      providesTags: ["donation"],
    }),

    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `/delete-donation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donation"],
    }),

    updateDonation: builder.mutation({
      query: ({ id, donationInfo }) => ({
        url: `/update-donation/${id}`,
        method: "PUT",
        body: donationInfo,
      }),
      invalidatesTags: ["donation"],
    }),

    getSingleDonation: builder.query({
      query: (id) => `/donation/${id}`,
    }),

    addDonation: builder.mutation({
      query: (body) => ({
        url: "/add-donation",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAddDonationPostMutation,
  useGetDonationQuery,
  useDeleteDonationMutation,
  useUpdateDonationMutation,
  useGetSingleDonationQuery,
  useAddDonationMutation,
} = addDonationApi;
