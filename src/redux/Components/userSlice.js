import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    users:[], 
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
   return axios
    .get('http://192.168.100.96:8000/api/userList')
    .then((response)=>response.data.data)
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.users=action.payload
        })
    }
})

export default userSlice.reducer
