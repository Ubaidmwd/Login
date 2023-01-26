import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { APICall } from "../API/Api"


export const addTodo = createAsyncThunk(
    'myTodo',
    async (body) => {
        const result = await APICall('/todo', body, 'post')
        console.log(result)
        return await result;

    }
)


const initialState = []

const todoReducer = createSlice({
    name: "Todo",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [addTodo.fulfilled]: (state, {payload: {message }}) => {
         
            if (message) {
                state.push(message)
            }
        }
        
    }
})

export const  {}=todoReducer.actions
export default todoReducer.reducer;