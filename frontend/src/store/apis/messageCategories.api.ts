import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const messageCategoriesApi = createApi({
  reducerPath: 'messageCategories',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchMessageCategories: builder.query({
        query: () => {
          return {
            url: '/message-category',
            method: 'GET',
          }
        },
      }),
    }
  },
})

export const { useFetchMessageCategoriesQuery } = messageCategoriesApi
export { messageCategoriesApi }
