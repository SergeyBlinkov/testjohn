import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "@/shared/api/user-api/AuthService";
import {AxiosError} from "axios";
import {AuthResponse} from "@/shared/api/user-api/userTypes";

export const createNewUser = createAsyncThunk(
    'user/registration',
    async (arg: { email: string; password: string }, thunkAPI):Promise<AuthResponse | undefined> => {
        try {
            const { email, password } = arg;
            const response = await AuthService.registration(email, password);
            return response.data
        } catch (err) {
            if (err instanceof AxiosError) {
                if(err.message) {
                    throw thunkAPI.rejectWithValue(err.message)
                }
                else {
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                }
            } else {
                throw thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);


type LoginType = {
    email: string;
    password: string;
    passwordCode:string | null | undefined
};
export const loginUserThunk = createAsyncThunk(
    'user/login',
    async (arg: LoginType, thunkAPI) => {

        try {
            const { email, password,passwordCode } = arg;
            if(!passwordCode) {
                return thunkAPI.rejectWithValue('You should Sign up')
            }
            const response = await AuthService.login(email, password,passwordCode)
            return response.data;
        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {
                if(err.message) {
                    throw thunkAPI.rejectWithValue(err.message)
                }
                else {
                    err.response &&
                    err.response.data &&
                    thunkAPI.rejectWithValue(err.response.data.toString())
                }



            } else {
                throw thunkAPI.rejectWithValue('Нет связи с сервером');
            }
        }
    },
);