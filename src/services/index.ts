import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from './baseQuery';

export enum TagTypes {
  characters = 'characters',
}

export const endpoints = {
  characters: '/characters',
};

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: Object.values(TagTypes),
  baseQuery: apiBaseQuery,
  endpoints: () => ({}),
});
