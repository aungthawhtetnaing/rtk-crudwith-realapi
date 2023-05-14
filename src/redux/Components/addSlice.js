import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
    'post/createPost',async({data})=>{
    return fetch(`http://192.168.100.96:8000/api/userList`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify({
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address
        })
    })
    .then(res=>res.json(),
    console.log(data)
    );
})
const addSlice = createSlice({
    name:'post',
    initialState:{
        error:false
    },
    extraReducers :{
        [createPost.fulfilled]:(state,action)=>{  
            state.post=[action.payload];
        }, 
    }
})

export default addSlice.reducer;