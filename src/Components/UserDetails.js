import {Grid, Box, Typography ,Button} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailPost } from "../redux/Components/detailsSlice";
import { useEffect, useState } from "react";
import Person2Icon from '@mui/icons-material/Person2';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import AddCardSharpIcon from '@mui/icons-material/AddCardSharp';
import CameraSharpIcon from '@mui/icons-material/CameraSharp';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import swal from "sweetalert";
const UserDetails = () => {
    
 const [todoUsers,setTodoUsers] = useState([]);
   const id = useParams()
   console.log(id);
    const userdetail = useSelector((state)=>state.detail)
    const detail=userdetail.data
    const dispatch= useDispatch()
    console.log(detail);
    const todoUser = detail.todos
    console.log(todoUser);

    
    function handleDelete(id){
        swal({
            title: "Are you sure?",
            text: "You want to delete this todo?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                fetch(`http://192.168.100.96:8000/api/todoList/${id}`,{
                    method:'DELETE'
            
                }).then((result)=>{
                    result.json().then((resp)=>{
                    console.log(resp);
                    const list = todoUsers.filter((todo) => todo.id != resp?.data?.id)
                    setTodoUsers(list);
        
                    })
                })
            }
        });
    }

    // function detail(){
        
    // }
    
    useEffect(()=>{
        dispatch(detailPost(id))
       
    },[todoUsers])
  return (
    <div>
    <Grid container={3} spacing={2}>
        <Grid  item md={12} lg={5} xs={12} >
             <Box
            display="flex"  
            flexDirection={"column"} 
            width={600}
            height={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            
            borderRadius={5}
            boxShadow={"8px 5px 15px #ccc"}
            sx={{
                ":hover":{
                    boxShadow:'10px 10px 20px #ccc'
                },
                marginTop:10,
                
            }}
            >
            <Typography variant="h6" fontWeight="bold" sx={{marginRight:"auto",marginLeft:35, verticalAlign:"middle",display:"inline-flex"}}>
                        <PersonOutlineSharpIcon sx={{fontSize:50}}/>
            </Typography>
            <br/><br/>
            <Typography variant="h6" fontWeight="bold" sx={{marginRight:"auto",marginLeft:17, verticalAlign:"middle",display:"inline-flex"}}>
                <Person2Icon style={{color:"yellow"}}/>&nbsp; &nbsp;&nbsp;{detail.name}       
            </Typography>
            <br/>
            <Typography  variant="h6"  fontWeight="bold"  sx={{marginRight:"auto",marginLeft:17,verticalAlign:"middle",display:"inline-flex" }}>
                <AttachEmailSharpIcon style={{color:"yellow"}}/>&nbsp; &nbsp;&nbsp;{detail.email}     
            </Typography>
            <br/>
            <Typography  variant="h6"  fontWeight="bold"  sx={{marginRight:"auto",marginLeft:17,verticalAlign:"middle",display:"inline-flex"}}>
                <PhoneInTalkSharpIcon style={{color:"yellow"}}/>&nbsp; &nbsp;&nbsp;{detail.phone}    
            </Typography>
            <br/>
            <Typography variant="h6"  fontWeight="bold"  sx={{marginRight:"auto",marginLeft:17,verticalAlign:"middle",display:"inline-flex"}}>
                <HomeSharpIcon style={{color:"yellow"}}/>&nbsp; &nbsp;&nbsp;{detail.address}    
            </Typography>

            </Box>
    </Grid>
           
    <Grid  item md={12} lg={7}  xs={12}>
         <Box       
                alignItems="center"
                justifyContent={"center"}
                margin={4}
                borderRadius={5}
                boxShadow={"8px 5px 15px #ccc"}
                sx={{
                    ":hover":{
                        boxShadow:'10px 10px 20px #ccc'
                    },
                    marginTop:3,
                    padding:5
                    
                }}
                >
                <Typography
                    variant='h5' 
                    fontWeight='bold'
                    padding={1}
                    textAlign="center"
                    sx={{verticalAlign:"middle",display:"inline-flex"}}
                    >TODO USER LISTS
                    
                </Typography>

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
        >
        <Button
            type='submit'
            endIcon={<AddCardSharpIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{ borderRadius:2}} 
                variant='contained'>
                <Link to={`/addtodo/${detail.id}`} style={{textDecoration:"none",color:"black"}}>
               ADD TODO
               </Link>
        </Button>
        </Box>
            {todoUser?.map((todo)=>(
                <div key={todo.id}>
                <Box
                display="flex"  
                flexDirection={"row"} 
                maxWidth={1000}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={1}
                padding={3}
                boxShadow={"8px 5px 15px #ccc"}
                sx={{
                    ":hover":{
                        boxShadow:'10px 10px 20px #ccc'
                    },
                }}
                >
            <Typography   fontWeight="bold"  sx={{marginRight:"auto",verticalAlign:"middle",display:"inline-flex"}}>
            <CameraSharpIcon sx={{color:"brown"}}/> &nbsp;{todo.todo}       
            </Typography>
            <Typography sx={{marginLeft:"auto"}}>
            <Button
                type='submit'
                endIcon={<AppRegistrationIcon style={{color:"green"}}/>}
                style={{color:'black'}}
                color="inherit"
                    sx={{ borderRadius:2}} 
                    variant='contained'>
                    <Link to={`/edittodo/${todo.id}`} style={{textDecoration:"none",color:"black"}}>
                Edit
                </Link>
                </Button>
                &nbsp;  &nbsp;
                <Button
                type='submit'
                endIcon={<DeleteOutlineSharpIcon style={{color:"red"}}/>}
                style={{color:'black'}}
                color="inherit"
                    sx={{ borderRadius:2}} 
                    onClick={()=>handleDelete(todo.id)}
                    variant='contained'>
                Delete
                </Button>
            </Typography>
        </Box>
    </div>
            ))}
</Box>
</Grid>
           
</Grid>
</div>
  )
}

export default UserDetails