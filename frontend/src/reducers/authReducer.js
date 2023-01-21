import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const fetch2 = async (body, token = '')=> {
    const res = await fetch('/signup', {
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
        const result = await fetch2(body)
        console.log(result)
        return await result;

    }
)

const initialState = {
    token: "",
    loading: false,
    error: ""
}

const authReducer = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            state.error = action.payload.error
        },
        [signUp.pending]: (state, action) => {
            state.loading = true
        },

    }
})

export default authReducer.reducer;