import { createSlice } from "@reduxjs/toolkit"

const fetchapi=async(api,body,token="",method="post")=>{
    const res= awaitfetch(api,{
        method:method,
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)

      })
      return await res.json()

}

// First, create the thunk
const signUp = createAsyncThunk(
    'users/fetchByIdStatus',
    async (body) => {
       const result= fetchapi('/signup',body,method='post')
       return result;
      
    }
  )

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