import { Box, Typography ,Button} from "@mui/material";
// import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import React,{useEffect ,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsers } from "./redux/Components/userSlice";
import Person2Icon from '@mui/icons-material/Person2';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import { createAsyncThunk } from "@reduxjs/toolkit";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import swal from "sweetalert";
const Home = () => {
  const [todoUser,setTodoUser] = useState([]);
  const user = useSelector((state)=>state.user)
 
  const dispatch= useDispatch()
  console.log(user);

  function handleDelete(id){
    swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        fetch(`http://192.168.100.96:8000/api/userList/${id}`,{
          method:'DELETE'
  
      }).then((result)=>{
          result.json().then((resp)=>{
          console.log(resp);
          const list = todoUser.filter((todo) => todo.id != resp?.data?.id)
          setTodoUser(list);
          })
      })
      }
    });
}

  
  useEffect(()=>{
    dispatch(fetchUsers())
  },[todoUser])

  


  return (
    <div>
          {user.users.map((user)=>
          (
            <div key={user.id}>
     
      <Box
      display="flex"  
      
      flexDirection={"row"} 
      maxWidth={1000}
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      marginTop={1}
      padding={3}
      borderRadius={5}
      boxShadow={"8px 5px 15px #ccc"}
      sx={{
          ":hover":{
              boxShadow:'10px 10px 20px #ccc'
          },
      }}
      >
         <Link to={`/user/${user.id}`} style={{textDecoration:"none",color:"black"}}>
        <Typography   fontWeight="bold"  sx={{marginRight:"auto",verticalAlign:"middle",display:"inline-flex"}}>
        
          <Person2Icon style={{color:"yellow"}}/>&nbsp;&nbsp; &nbsp;{user.name}        
       
        </Typography>
        </Link>
        <Typography sx={{marginLeft:"auto"}}>
        <Button
            type='submit'
            endIcon={<AppRegistrationIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{ borderRadius:2}} 
                variant='contained'>
                <Link to={`/useredit/${user.id}`} style={{textDecoration:"none",color:"black"}}>
               Edit
               </Link>
            </Button>
           
            &nbsp;  &nbsp;
            <Button
            type='submit'
            onClick={()=>handleDelete(user.id)}
            endIcon={<DeleteForeverRoundedIcon style={{color:"red"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{ borderRadius:2}} 
                variant='contained'>
               Delete
            </Button>
        </Typography>
       
      </Box>
      
            </div>
          ))}
        

      
    </div>
  );
}
 
export default Home;