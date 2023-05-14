import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    users:[], 
}

export const fetchsUsers = createAsyncThunk('user/fetchsUsers',async()=>{
   return axios
   .get('http://192.168.100.96:8000/api/todoList')
   .then((response)=>response.data.data) 
})

const usersSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchsUsers.fulfilled,(state,action)=>{
            state.users=action.payload  
        })
    }
})

export default usersSlice.reducer
