import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editPost = createAsyncThunk(
    'post/editPost',async({data,id})=>{
    return fetch(`http://192.168.100.96:8000/api/userList/`+id,{
        method :'PUT',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(data)
    })
    .then((result)=>{result.json()
            .then((res)=>{ console.log(res);
              console.log(id);
            //   console.log();
                            })
                        })
})


const editSlice = createSlice({
    name:'post',
    initialState:{
        error:false,
        name:""
    },
    extraReducers :{ 
        [editPost.fulfilled]:(state,action)=>{
            state.post=[action.payload];
        }, 
    }
})

export default editSlice.reducer;