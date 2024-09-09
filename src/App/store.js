import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// todoReducer is todoSlice.reducer
export const store = configureStore({
    reducer: todoReducer
}) // step 1 

