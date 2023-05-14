import React, { useEffect, useState } from 'react'
import { Box, Typography ,Button, TextField} from "@mui/material";
import { Link, useHistory, useParams } from "react-router-dom";
import { HomeSharp } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { todoeditPost } from '../redux/Components/todoeditSlice';

import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import { fetchsUsers } from '../redux/Components/todoindexSlice';
const EditTodo = () => {
  const [todo,setTodo] = useState('');
  const [user_list_id,setUuid] = useState('')
  const [isPending,setIsPending] = useState(false);
  const {id} = useParams()
  const dispatch = useDispatch()
  // const userdetail = useSelector((state)=>state.detail)
  
  const users = useSelector((state)=>state.users)
  const detail = users.users
  console.log(detail);
  
  // const detail=userdetail.data.todos
  const todoid = detail.filter(usr=>{
    return  usr.id == id
  })
  const history = useHistory()
  console.log(todoid);
  const tododata =todoid[0]
  console.log(tododata);
  
  // dispatch(fetchsUsers())
  function getUsers(){
    
    setTodo(tododata?.todo)
    setUuid(tododata?.user_list_id)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const data ={ todo , user_list_id };
    setIsPending(true)
    dispatch(todoeditPost({data,id}))
    
    history.go(1);
    history.push(`/user/${todoid[0].user_list_id}`);
    
  } 


  useEffect(()=>{
    getUsers();
    
  },[tododata])
  useEffect(()=>{
    getUsers();
    dispatch(fetchsUsers())
  },[])
  // useEffect(()=>{
   
  // })


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
            >EDIT TODO
        </Typography>
      
        {/* {todoUser?.map((todo)=>(
            <div key={todo.id}> */}
             <form onSubmit={handleSubmit}>
           <span>
            <Typography  sx={{color:'rgba(2,0,36,1)'}}><PostAddIcon/></Typography>
            <TextField 
            type="text"
            required
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            sx={{width:540,marginBottom:3}}
             />
            
            <input 
            type="hidden"
            required
            value={user_list_id}
            onChange={(e)=> setUuid(e.target.value)}
            sx={{width:540,marginBottom:3}}
             />
            </span>

            <span style={{marginLeft:160}}>
            <Link to={`/user/${user_list_id}`}  style={{textDecoration:"none",color:"black"}}>
            <Button
            
            endIcon={<HomeSharp style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Back Detail
            </Button>
            </Link>
            &nbsp;  &nbsp;
            
            <Button
            type='submit'
            endIcon={<AddIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
                 
               Update
              
            </Button> 
            
            </span>
            </form>

            {/* </div>
        ))} */}
        </Box>  
    </div>
  )
}

export default EditTodo