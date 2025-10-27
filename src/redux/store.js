import { configureStore } from '@reduxjs/toolkit'
import featureSliceReducer from './featureSlice'


export const store = configureStore({
    reducer: {
    note: featureSliceReducer,
    },
})