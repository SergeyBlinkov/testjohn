import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createNewUser, loginUserThunk} from "@/app/redux/userRedux/ApiThunk";
import {AuthResponse} from "@/shared/api/user-api/userTypes";


export interface IUserType {
    loading: boolean;
    isLogged: boolean;
    user: AuthResponse | null
    errs: string | false;
    isRegistered: boolean
}


const initialState:IUserType = {
    loading: false,
    isLogged: false,
    user: null,
    errs: false,
    isRegistered:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        closeRegistration: (state) => {
            state.isRegistered = false
        },
        closeLogin: (state) => {
            state.isLogged = false
        }
    },
    extraReducers :(builder) => {
        builder.addCase(createNewUser.fulfilled,(state,action:PayloadAction<AuthResponse|undefined>) => {
            if(!action.payload) {
                return
            }
            state.user = action.payload
            state.loading = false
            state.errs = ""
            state.isRegistered = true
        })
        builder.addCase(createNewUser.pending,(state) => {
            state.loading = true
        })
        builder.addCase(createNewUser.rejected,(state,action) => {
            state.loading = false
            state.user = null
            state.isLogged = false
            state.errs = action.payload as string
        })
        builder.addCase(loginUserThunk.fulfilled,(state) => {
            state.loading = false
            state.isLogged = true
            state.errs = ""
            // state.user = action.payload
            state.errs = false
        })
        builder.addCase(loginUserThunk.pending,(state) => {
            state.loading = true
            state.isLogged = false
            state.errs = false
        })
        builder.addCase(loginUserThunk.rejected,(state,action) => {
            state.loading = false
            state.isLogged = false
            state.user = null
            state.errs = action.payload as string
        })
    }
})
export const {closeRegistration,closeLogin} = userSlice.actions

export default userSlice.reducer