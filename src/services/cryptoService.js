import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const CRYPTO_API_KEY = process.env.REACT_APP_CRYPTO_API_KEY;
const CRYPTO_URL = 'https://coinranking1.p.rapidapi.com';

const headersConfig = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': CRYPTO_API_KEY
}

const createRequest = (url) => ({ url, headers: headersConfig });

export const cryptoService = createApi({
  reducerPath: 'cryptoService',
  baseQuery: fetchBaseQuery({ baseUrl: CRYPTO_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`)
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`)
    })
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoService;