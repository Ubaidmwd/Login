import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { APICall, APICall2 } from "../API/Api"


export const addTodo = createAsyncThunk(
    'myTodo',
    async (body) => {
        const result = await APICall('/todo', body, 'post')
        console.log(result)
        return await result;

    }
)
export const getTodo = createAsyncThunk(
    'fetchTodo',
    async () => {
        const result = await APICall2('/gettodos','get')
       
        return result;

    }
)
export const deleteTodo = createAsyncThunk(
    'deleteTodo',
    async (id) => {
        const result = await APICall2(`/todos/${id}`,'delete')
        return result;

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
        },
        [getTodo.fulfilled]: (state, {payload: {message }}) => {
            return message
            
        },
        [deleteTodo.fulfilled]: (state, {payload: {message }}) => {
            const remove_item=state.filter(item=>{
                return item._id !=message._id
            })
            return remove_item
        }
    }
})

// export const  {}=todoReducer.actions
export default todoReducer.reducer;