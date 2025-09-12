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
    getProducts: builder.query<Product[], void>({
      query: () => `archive/products/`,
      transformResponse: (response: Product[]) =>
        response.map((product) => ({
          ...product,
          image: BASE_URL + product.image,
        })),
    }),
    getLaatsteProducts: builder.query<Product[], void>({
      query: () => `archive/products/laatste`,
      transformResponse: (response: Product[]) =>
        response.map((product) => ({
          ...product,
          image: BASE_URL + product.image,
        })),
    }),
  }),
  tagTypes: ['Product'],
});

export const { useGetProductsQuery, useGetLaatsteProductsQuery } = productsApi;
