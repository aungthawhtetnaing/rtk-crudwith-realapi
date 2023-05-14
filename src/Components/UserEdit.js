import { Box, Button, TextField, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/Components/updateSlice';
import Person2Icon from '@mui/icons-material/Person2';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import { useHistory, useParams } from 'react-router-dom';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { fetchUsers } from '../redux/Components/userSlice';
const UserEdit = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');

    const {id} =useParams();
    // console.log(id)
    const history = useHistory()
    // const [values, setValues] = useState({
    //     name:"",
    //     email:"",
    //     phone:"",
    //     address:"",
    // })
    const data = useSelector(state=>state.user)
    const userData = data.users
    console.log(userData);
    
    const users = userData.filter(usr => {
        return usr.id== id ;
      });
    // console.log(users);
    //   console.log(users[0].name);

    const dispatch = useDispatch()

    const userEdit = users[0]
    console.log(userEdit);
    
    function getUsers() {
       
        setName(userEdit?.name)
        setEmail(userEdit?.email)
        setPhone(userEdit?.phone)
        setAddress(userEdit?.address)
    
  }

    const handleSubmit =(e) =>{
        e.preventDefault();
        const data ={ 
            name,
            email,
            phone,
            address };
        dispatch(editPost({data,id}));
        history.go(1);
        history.push('/')     
    };

    const handleBack =(e)=>{
        e.preventDefault();
        history.go(1);
        history.push('/')   
    }
    useEffect(()=>{
        getUsers();
    },[userEdit])

    useEffect(()=>{
        getUsers();
        dispatch(fetchUsers())
      },[])
   

  return (
    <div>
        <form onSubmit={handleSubmit}>
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
            ><ManageAccountsSharpIcon sx={{fontSize:50}} /></Typography>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><Person2Icon/></Typography>
             <TextField 
             name='name'
             value={name}
            onChange={(e)=> setName(e.target.value)}
              required
             type={'text'} 
             sx={{width:540,marginBottom:3}}
             variant='outlined' 
             placeholder='Name'/>
            </span>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><AttachEmailSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
             name='email'
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
            required
            type={'email'} 
            variant='outlined' 
            placeholder='Email'/>
            </span>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><PhoneInTalkSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
             name='phone'
             value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            required
            type={'number'} 
            variant='outlined' 
            placeholder='Phone'
            onInput = {(e) =>{
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,13)
            
            }}
            />
            </span>

            <span><Typography  sx={{color:'rgba(2,0,36,1)'}}><HomeSharpIcon/></Typography>
            <TextField 
            sx={{width:540,marginBottom:3}}
             name='address'
             value={address}
             required
            onChange={(e)=> setAddress(e.target.value)}
            type={'text'} 
            variant='outlined' 
            multiline
            rows={4}
            placeholder='Address'/>
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
            endIcon={<PersonOutlineSharpIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Update
            </Button> 
            </span>
        </Box>
        </form>
    </div>
  )
}

export default UserEdit


// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchUsers } from '../redux/Components/userSlice';
// import { editPost } from '../redux/Components/updateSlice';
// import { useEffect, useState } from "react";
// const UserEdit=()=> {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [phone,setPhone] = useState('');
//     const [address,setAddress] = useState('');
//     const{id} = useParams()
//     const data = useSelector(state=>state.user)
//     const userData = data.users
//     console.log(userData);

//     const users = userData.filter(usr => {
//         return usr.id== id ;
//       });

        
//     function getUsers() {
       
//         setName(userEdit?.name)
//         setEmail(userEdit?.email)
//         setPhone(userEdit?.phone)
//         setAddress(userEdit?.address)
    
//   }


//       const dispatch = useDispatch()

//       const userEdit = users[0]
//       console.log(userEdit);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     trigger,
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   useEffect(()=>{
//     getUsers();
//     },[userEdit])


//   useEffect(()=>{
//     getUsers();
//     dispatch(fetchUsers())
//   },[])
//   // console.log(watch());

//   // console.log(errors.name)

//   return (
//     <div className="container pt-5">
//       <div className="row justify-content-sm-center pt-5">
//         <div className="col-sm-6 shadow round pb-3">
//           <h1 className="text-center pt-3 text-secondary">Example Form</h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-group">
//               <label className="col-form-label">Name:</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.name && "invalid"}`}
//                 {...register("name", { required: "Name is Required" })}
//                 onKeyUp={() => {
//                   trigger("name");
//                 }}
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name.message}</small>
//               )}
//             </div>
            
//             <div className="form-group">
//               <label className="col-form-label">Email:</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.email && "invalid"}`}
//                 {...register("email", { required: "Email is Required" ,
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Invalid email address",
//                 }})}
//                 onKeyUp={() => {
//                   trigger("email");
//                 }}
//               />
//               {errors.email && (
//                 <small className="text-danger">{errors.email.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">Phone:</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.phone && "invalid"}`}
//                 {...register("phone", { required: "Phone is Required",
//                 pattern: {
//                   value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
//                   message: "Invalid phone no",
//                 },
//                })}
//                onKeyUp={() => {
//                 trigger("phone");
//               }}
//               />
//               {errors.phone && (
//                 <small className="text-danger">{errors.phone.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">Message:</label>
//               <textarea
//                 className={`form-control ${errors.message && "invalid"}`}
//                 {...register("message", { required: "Message is Required",
//                 minLength: {
//                   value: 10,
//                   message: "Minimum Required length is 10",
//                 },
//                 maxLength: {
//                   value: 50,
//                   message: "Maximum allowed length is 50 ",
//                 }
//                })}
//                onKeyUp={() => {
//                 trigger("message");
//               }}
//               ></textarea>
//               {errors.message && (
//                 <small className="text-danger">{errors.message.message}</small>
//               )}
//             </div>
//             <input
//               type="submit"
//               className="btn btn-primary my-3"
//               value="Send message"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserEdit;