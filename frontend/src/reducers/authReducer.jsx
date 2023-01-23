import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const fetch2 = async (endpoint,body, token = '')=> {
    const res = await fetch(endpoint, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    })
    console.log(res)
    return await res.json()

}

export const signUp = createAsyncThunk(
    'signUp',
    async (body) => {
        const result = await fetch2('/signup',body)
        console.log(result)
        return await result;

    }
)
export const login = createAsyncThunk(
    'Login',
    async (body) => {
        const result = await fetch2('/login',body)
        console.log(result)
        return await result;

    }
)


const initialState = {
    token: "",
    loading: false,
    error: "",
    message:""
}

const authReducer = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [signUp.fulfilled]: (state, {payload:{error,message}}) => {
            state.loading=false
            if(error){
            state.error =error
            state.message=initialState.message

            }else{
            state.error =initialState.error
            state.message=message
            }


        },
        [signUp.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, {payload:{error,token}}) => {
            state.loading=false
            if(error){
            state.error =error
            state.token=initialState.token

            }else{
            state.error =initialState.error
            state.token=token
            }


        },
        [login.pending]: (state, action) => {
            state.loading = true
        }

    }
})

export default authReducer.reducer;