import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:"",
    loading:false,
    error:""
}

const authReducer=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{

    }
})

export default authReducer.reducer;