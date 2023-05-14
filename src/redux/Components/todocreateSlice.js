import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const todoPost = createAsyncThunk(
    'post/todoPost',async({inputdata})=>{
    return fetch(`http://192.168.100.96:8000/api/todoList`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(inputdata)
    })
    .then((result)=>{result.json()
        .then((res)=>{ console.log(res);
          console.log(inputdata);
        //   console.log();
                        })
                    })
})

const todoSlice = createSlice({
    name:'post',
    initialState:{
        error:false
    },
    extraReducers :{
        [todoPost.fulfilled]:(state,action)=>{ 
            state.post=[action.payload];
        },
    }
})

export default todoSlice.reducer;