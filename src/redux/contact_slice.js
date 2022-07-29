import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62e16d21fa99731d75d658d2.mockapi.io/api/v1/',
  }),

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
