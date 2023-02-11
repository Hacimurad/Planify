import { configureStore } from '@reduxjs/toolkit'
import tasksSlice  from './tasks'
import  userSlice  from './user'

export default configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: false,
  }),
})