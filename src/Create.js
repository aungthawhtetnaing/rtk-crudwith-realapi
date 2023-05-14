// import { Box, Button, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import {useDispatch } from 'react-redux';
// import { createPost } from './redux/Components/addSlice';
// import Person2Icon from '@mui/icons-material/Person2';
// import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
// import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';
// import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
// import { useHistory } from 'react-router-dom';
// import AddHomeSharpIcon from '@mui/icons-material/AddHomeSharp';
// const Create = () => {
    
//     const history = useHistory()
//     const [values, setValues] = useState({
//         name:"",
//         email:"",
//         phone:"",
//         address:"",
//     })
    
//     const dispatch = useDispatch()

//     // const handleChange =(e)=>{
//     //     setInputs((prev)=>({
//     //         ...prev,
//     //         [e.target.name] : e.target.value
//     //     }))
//     // }

//     const handleSubmit =(e) =>{
//         e.preventDefault();
//         dispatch(createPost({values}));
//         setValues({name:"",email:"",phone:"",address:""})
//         console.log(values);
//         history.go(1);
//         history.push('/')     
//     };

//     const handleBack =(e)=>{
//         e.preventDefault();
//         history.go(1);
//         history.push('/')   
//     }
   

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <Box 
//         display="flex"  
//         flexDirection={"column"} 
        
        
//         alignItems="center"
//         justifyContent={"center"}
//         margin="auto"
//           maxWidth={700}
//         padding={3}
//         borderRadius={5}
//         boxShadow={"8px 5px 15px #ccc"}
//         sx={{
//             ":hover":{
//                 boxShadow:'10px 10px 20px #ccc'
//             },
            
//         }}
//         >
//             <Typography
//             variant='h5' 
//             fontWeight='bold'
//             padding={1}
//             textAlign="center"
//             sx={{verticalAlign:"middle",display:"inline-flex"}}
//             ><AddHomeSharpIcon sx={{fontSize:50}} /></Typography>

//             <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><Person2Icon/></Typography>
//              <TextField 
//              name='name'
//              value={values.name}
//              onChange={(e)=>setValues({...values,name:e.target.value})}
//               required
//              type={'text'} 
//              sx={{width:540,marginBottom:3}}
//              variant='outlined' 
//              placeholder='Name'/>
//             </span>

//             <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><AttachEmailSharpIcon/></Typography>
//             <TextField 
//             sx={{width:540,marginBottom:3}}
//              name='email'
//              value={values.email}
//              onChange={(e)=>setValues({...values,email:e.target.value})}
//             required
//             type={'email'} 
//             variant='outlined' 
//             placeholder='Email'/>
//             </span>

//             <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><PhoneInTalkSharpIcon/></Typography>
//             <TextField 
//             sx={{width:540,marginBottom:3}}
//              name='phone'
//              value={values.phone}
//             //  onInput = {(e) =>{
//             //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
                
//             // }}
            
//              onChange={(e)=>setValues({...values,phone:e.target.value})}
//            required
//             type={'number'} 
//             variant='outlined' 
//             placeholder='Phone'/>
//             </span>

//             <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><HomeSharpIcon/></Typography>
//             <TextField 
//             sx={{width:540,marginBottom:3}}
//              name='address'
//              value={values.address}
//              onChange={(e)=>setValues({...values,address:e.target.value})}
//            required
//             type={'text'} 
//             variant='outlined' 
//             placeholder='Address'/>
//             </span>
//             <span>
//             <Button
//             type='submit'
//             endIcon={<HomeSharpIcon style={{color:"green"}}/>}
//                style={{color:'black'}}
//                onClick={handleBack}
//                color="inherit"
//                 sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
//                 variant='contained'>
//                Back
//             </Button>
//             &nbsp;  &nbsp;
//             <Button
//             type='submit'
//             endIcon={<GroupAddSharpIcon style={{color:"green"}}/>}
//                style={{color:'black'}}
//                color="inherit"
//                 sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
//                 variant='contained'>
//                Create
//             </Button> 
//             </span>
//         </Box>
//         </form>
//     </div>
//   )
// }

// export default Create

import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useDispatch } from 'react-redux';
import { createPost } from './redux/Components/addSlice';
import Person2Icon from '@mui/icons-material/Person2';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import { useHistory } from 'react-router-dom';
import AddHomeSharpIcon from '@mui/icons-material/AddHomeSharp';
import { useForm } from 'react-hook-form';
import { color } from '@mui/system';
const Create = () => {
    
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createPost({data}))
    console.log(data);
    reset();
    history.go(1);
    history.push('/')   
  };

    const handleBack =(e)=>{
        e.preventDefault();
        history.go(1);
        history.push('/')   
    }
   

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
          maxWidth={700}
        padding={3}
        borderRadius={5}
        boxShadow={"8px 5px 15px #ccc"}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #ccc'
            },
            
        }}
        >
            <Typography
            variant='h5' 
            fontWeight='bold'
            padding={1}
            textAlign="center"
            sx={{verticalAlign:"middle",display:"inline-flex"}}
            ><AddHomeSharpIcon sx={{fontSize:50}} /></Typography>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><Person2Icon/></Typography>
             <TextField 
             name='name'
             sx={{width:540,marginBottom:3}}
             variant='outlined' 
             placeholder='Name'
             type="text"
             className={`form-control ${errors.name && "invalid"}`}
             {...register("name", { required: "Name is Required" })}
             onKeyUp={() => {
               trigger("name");
             }}
           /><br/>
           {errors.name && (
             <small style={{color:"red"}}>{errors.name.message}</small>
           )}
            </span>
            <br/>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><AttachEmailSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
            variant='outlined' 
            placeholder='Email'
            type="text"
            className={`form-control ${errors.email && "invalid"}`}
            {...register("email", { required: "Email is Required" ,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            }})}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          <br/>
          {errors.email && (
            <small style={{color:"red"}}>{errors.email.message}</small>
          )}
            </span>
            <br/>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><PhoneInTalkSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
            variant='outlined' 
            placeholder='Phone'
            type="text"
            className={`form-control ${errors.phone && "invalid"}`}
            {...register("phone", { required: "Phone is Required",
            pattern: {
              value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              message: "Invalid phone no",
            },
           })}
           onKeyUp={() => {
            trigger("phone");
          }}
          />
          <br/>
          {errors.phone && (
            <small style={{color:"red"}}>{errors.phone.message}</small>
          )}
            </span>
            <br/>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><HomeSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
            multiline
            rows={4}
            variant='outlined' 
            placeholder='Address'
            className={`form-control ${errors.address && "invalid"}`}
            {...register("address", { required: "address is Required",
            minLength: {
              value: 2,
              message: "Minimum Required length is 3",
            },
            maxLength: {
              value: 40,
              message: "Maximum allowed length is 50 ",
            }
           })}
           onKeyUp={() => {
            trigger("message");
          }}
          />
          <br/>
          {errors.address && (
            <small style={{color:"red"}}>{errors.address.message}</small>
          )}
            </span>
            <span>
            <Button
            type='submit'
            endIcon={<HomeSharpIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               onClick={handleBack}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Back
            </Button>
            &nbsp;  &nbsp;
            <Button
            type='submit'
            endIcon={<GroupAddSharpIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Create
            </Button> 
            </span>
        </Box>
        </form>
    </div>
  )
}

export default Create