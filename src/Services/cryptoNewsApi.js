import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '93f7e225cfmsh3887bac42995694p1c750bjsn92e7b8cf0989'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} =cryptoNewsApi;
