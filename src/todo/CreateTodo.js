import React, { useState } from 'react'
import { Box, Typography ,Button, TextField} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { GroupSharp, HomeSharp } from "@mui/icons-material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { todoPost } from '../redux/Components/todocreateSlice';
import { useDispatch } from 'react-redux';
import PostAddIcon from '@mui/icons-material/PostAdd';

const CreateTodo = () => { 
  let lodash = require("lodash");
 
  let array = [0, false, '', undefined, NaN];
  let newArray = lodash.compact(array);
  const [val,setVal]=useState([""])
  // const history = useHistory();
  const {id} = useParams()
  const dispatch = useDispatch()
  // console.log(id);

  const handleAdd=()=>{
    const text=[...val,'']
    setVal(text)
  }
  const handleChange=(onChangeValue,id)=>{
    const inputdata=[...val]
    inputdata[id]=onChangeValue.target.value;
    setVal(inputdata)
  }
  const handleSubmit=()=>{
    const inputdata= { user_list_id: parseInt(id) ,
      todos: lodash.compact([...val]) };
      console.log(inputdata);
      dispatch(todoPost({inputdata}))
  }
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent={"center"}
        margin={4}
        width={600}
        borderRadius={5}
        boxShadow={"8px 5px 15px #ccc"}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #ccc'
            },
            marginTop:3,
            padding:5,
            margin:"auto"
            
        }}
        >
        <Typography
            variant='h5' 
            fontWeight='bold'
            
            textAlign="center"
            sx={{verticalAlign:"middle",display:"inline-flex"}}
            >ADD TODO
        </Typography>
      
        {val.map((data,id)=>{
             return(
                <div key={id}> 
                    <span>
                    <Typography  sx={{color:'rgba(2,0,36,1)'}}><PostAddIcon/></Typography>
                     <TextField 
                      sx={{width:540,marginBottom:3}}
                      value={data} 
                      placeholder="Please enter todo" 
                      required 
                      onChange={e=>handleChange(e,id)}   />
                    </span>
                </div>
             )
         })}
            <span style={{marginLeft:70}}>
            <Link to={`/user/${id}`}  style={{textDecoration:"none",color:"black"}}>
            <Button
            type='submit'
            endIcon={<HomeSharp style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               UserDetails
            </Button>
            </Link>
            &nbsp;  &nbsp;
            <Button
            type='submit'
            onClick={()=>handleAdd()}
            endIcon={<GroupSharp style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Add More
            </Button> 
            &nbsp;  &nbsp;
            <Link to={`/user/${id}`}  style={{textDecoration:"none",color:"black"}}>
            <Button
            type='submit'
            onClick={()=>handleSubmit()}
            endIcon={<DoneAllIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Create
            </Button> 
            </Link>
            </span>

            {/* </div>
        ))} */}
        </Box>  
    </div>
  )
}

export default CreateTodo