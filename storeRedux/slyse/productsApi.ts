import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../routes';
import { GetProductsResponse, Product } from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_API_KEY;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product, string>({
      query: () => `products`,
      transformResponse: (response: Product) => ({
        ...response,
        image: BASE_URL + response.image,
      }),
    }),
  }),
  tagTypes: ['Product'],
});

export const { useGetProductsQuery } = productsApi;
