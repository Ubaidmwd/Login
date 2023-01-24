import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { APICall } from "../API/Api"


export const signUp = createAsyncThunk(
    'signUp',
    async (body) => {
        const result = await APICall('/signup', body, 'post')
        console.log(result)
        return await result;

    }
)
export const login = createAsyncThunk(
    'Login',
    async (body) => {
        const result = await APICall('/login', body, 'post')
        console.log(result)
        return await result;

    }
)


const initialState = {
    token: "",
    loading: false,
    error: "",
    message: ""
}

const authReducer = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        addtoken:(state,action)=>{
            state.token=localStorage.getItem('token')

        }

    },
    extraReducers: {
        [signUp.fulfilled]: (state, { payload: { error, message } }) => {
            state.loading = false
            if (error) {
                state.error = error
                state.message = initialState.message

            } else {
                state.error = initialState.error
                state.message = message
            }
        },
        [signUp.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, { payload: { error, token } }) => {
            state.loading = false
            if (error) {
                state.error = error
                state.token = initialState.token

            } else {
                state.error = initialState.error
                state.message = initialState.message

                state.token = token
                localStorage.setItem('token',token)
            }
        },
        [login.pending]: (state, action) => {
            state.loading = true
        }
    }
})
export const  {addtoken}=authReducer.actions
export default authReducer.reducer;