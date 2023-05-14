import { createSlice , createAsyncThunk, current } from "@reduxjs/toolkit";
import  axios from "axios";

export const detailPost = createAsyncThunk(
  'post/detailPost',async(id)=>{
    console.log(id);
    return axios.post('http://192.168.100.96:8000/api/details',{
      id:id
    })
    .then((response)=>response.data.data)
  }
)

const detailSlice = createSlice ({
  name:'post',
  initialState:{
    data:[],
    loading:false,
        error:null,
  },
  extraReducers:{
    [detailPost.pending]:(state,action) =>{
        state.loading=true;
    },
    [detailPost.fulfilled]:(state,action)=>{
        state.loading=false;
        state.data=action.payload;
    },
    [detailPost.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
 
  }
})

export default detailSlice.reducer


