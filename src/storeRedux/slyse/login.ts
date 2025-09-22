import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../routes';

interface LoginArg {
  login: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

interface VerifyResponse {
  success: boolean;
  id: number;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token =
        localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginArg>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<LoginResponse, LoginArg>({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    verify: builder.query<VerifyResponse, void>({
      query: () => 'auth/verify',
    }),
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'DELETE',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem('token');
        } catch (err) {
          console.error('Logout failed', err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyQuery,
  useLogoutMutation,
} = authApi;
