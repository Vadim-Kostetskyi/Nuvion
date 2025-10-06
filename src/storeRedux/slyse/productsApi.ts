import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, BASE_URL_IMAGE } from '../routes';
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
      transformResponse: (response: Product[]) =>
        response.map((item) => ({
          ...item,
          images: item.images.map((img) => `${BASE_URL_IMAGE}${img}`),
        })),
      providesTags: ['Product'],
    }),

    getLaatsteProducts: builder.query<Product[], void>({
      query: () => `archive/products/laatste`,
      transformResponse: (response: Product[]) =>
        response.map((item) => ({
          ...item,
          images: item.images
            ? item.images.map((img) => `${BASE_URL_IMAGE}${img}`)
            : [],
        })),
      providesTags: ['Product'],
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `archive/products/${slug}`,
      transformResponse: (item: Product) => ({
        ...item,
        images: item.images
          ? item.images.map((img) => `${BASE_URL_IMAGE}${img}`)
          : [],
      }),
      providesTags: ['Product'],
    }),

    saveProduct: builder.mutation<Product, SaveProductArg>({
      query: ({ formData, id }) => ({
        url: id ? `archive/products/${id}` : 'archive/products',
        method: 'POST',
        body: formData,
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
  useGetProductBySlugQuery,
  useSaveProductMutation,
  useDeleteProductMutation,
} = productsApi;
