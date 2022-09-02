import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://62ff4d5234344b6431f64f5d.mockapi.io/api/v1/contacts',
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    //useGetContactsQuery
    getContacts: builder.query({
      query: () => ``,
      providesTags: ['Contacts'],
    }),
    //useAddContactMutation
    addContact: builder.mutation({
      query: payload => ({
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Contacts'],
    }),
    //useDeleteContactMutation
    deleteContact: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContacts: builder.mutation({
      query: (payload, id) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useUpdateContactsMutation,
  useAddContactMutation,
} = contactsApi;
