import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../routes';
import { Product, SaveProductArg } from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_API_KEY;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `archive/products/`,
      providesTags: ['Product'],
    }),
    getLaatsteProducts: builder.query<Product[], void>({
      query: () => `archive/products/laatste`,
      providesTags: ['Product'],
    }),
    saveProduct: builder.mutation<Product, SaveProductArg>({
      query: ({ formData, id }) => ({
        url: id ? `archive/products/${id}` : 'archive/products',
        method: 'POST',
        body: formData, // <- тільки FormData
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `archive/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetLaatsteProductsQuery,
  useSaveProductMutation,
  useDeleteProductMutation,
} = productsApi;
