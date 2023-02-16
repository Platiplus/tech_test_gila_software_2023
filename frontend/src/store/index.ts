import { configureStore } from '@reduxjs/toolkit'
import { messageCategoriesApi } from './apis/messageCategories.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { notificationsApi } from './apis/notifications.api'

export const store = configureStore({
  reducer: {
    [messageCategoriesApi.reducerPath]: messageCategoriesApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([messageCategoriesApi.middleware, notificationsApi.middleware])
  },
})

setupListeners(store.dispatch)

export { useFetchMessageCategoriesQuery } from './apis/messageCategories.api'
export { useFetchNotificationsQuery, useSendNotificationMutation, useLazyFetchNotificationsQuery } from './apis/notifications.api'
