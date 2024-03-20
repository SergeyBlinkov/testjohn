"use client"
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {userSlice} from "@/app/redux/userRedux/UserStore";



export const store = () => configureStore({
    reducer: {
        userReducer:userSlice.reducer
    },
});
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



