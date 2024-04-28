import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (body) => ({
        url: "/create-testimonial",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["testimonial"],
    }),

    getTestimonial: builder.query({
      query: () => "/all-testimonial",
      providesTags: ["testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetTestimonialQuery } =
  testimonialApi;
