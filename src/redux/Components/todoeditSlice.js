
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const todoeditPost = createAsyncThunk(
    'post/todoeditPost',async({data,id})=>{
    return fetch(`http://192.168.100.96:8000/api/todoList/`+id,{
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
                            })
                        })
})


const todoeditSlice = createSlice({
    name:'post',
    initialState:{
        error:false
    },
    extraReducers :{
        [todoeditPost.fulfilled]:(state,action)=>{  
            state.post=[action.payload];
        },
    }
})
export default todoeditSlice.reducer;