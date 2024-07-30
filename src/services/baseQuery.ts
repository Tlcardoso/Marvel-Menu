import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { fetchBaseQuery, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { environment } from '../config/enviroments';
import md5 from 'md5';

const publicKey = environment.marvelPublicToken;
const privateKey = environment.marvelPrivateToken;

const setLocalStorageHeaders = (headers: Headers, fields: string[]) => {
  for (const field of fields) {
    const found = localStorage.getItem(field);
    if (found) headers.set(field, `Bearer ${found}`);
  }
};

const tokens = ['Authorization'];

const baseQuery = fetchBaseQuery({
  baseUrl: environment.baseApiUrl,
  prepareHeaders: (headers) => {
    setLocalStorageHeaders(headers, tokens);

    const ts = new Date().getTime().toString();
    const hash = md5(ts + privateKey + publicKey);

    headers.set('ts', ts);
    headers.set('apikey', publicKey);
    headers.set('hash', hash);

    return headers;
  },
});

const apiBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => baseQuery(args, api, extraOptions);

export { apiBaseQuery };