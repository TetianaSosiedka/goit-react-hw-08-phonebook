import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    //useLoginMutation
    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    //useLogoutMutation
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    //useRegisterMutation
    register: builder.mutation({
      query: payload => ({
        url: '/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    //useCurrentUserQuery
    currentUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentUserQuery,
  useLogoutMutation,
} = userApi;
