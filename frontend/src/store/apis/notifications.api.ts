import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateNotificationDto } from '../../interfaces/CreateNotificationDto'

const notificationsApi = createApi({
  reducerPath: 'messageLogs',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchNotifications: builder.query({
        query: (user_id: string) => {
          return {
            url: '/message-log',
            params: {
              user_id,
            },
            method: 'GET',
          }
        },
      }),
      sendNotification: builder.mutation({
        query: (body: CreateNotificationDto) => {
          return {
            url: '/message-log',
            body,
            method: 'POST',
          }
        },
      }),
    }
  },
})

export const { useFetchNotificationsQuery, useSendNotificationMutation, useLazyFetchNotificationsQuery } = notificationsApi
export { notificationsApi }
