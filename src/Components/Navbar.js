import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import DownhillSkiingSharpIcon from '@mui/icons-material/DownhillSkiingSharp';
import { Link } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
const NavTest = () => {
  return (
    <div>
        <AppBar sx={{background:'white',height:89, justifyContent:"center", ":hover":{
                boxShadow:'10px 10px 20px #ccc'
            }}}
        >
            <Toolbar>
                <Typography sx={{color:'rgba(2,0,36,1)'}}>
                    <DownhillSkiingSharpIcon sx={{fontSize:50,color:"inherit"}}/>
                </Typography>
                <Button endIcon={<HomeSharpIcon sx={{color:"black"}}/>} sx={{marginLeft:"auto",borderRadius:3  }} color="inherit" variant='contained'><Link style={{textDecoration:"none",color:'rgba(2,0,36,1)'}} to="/"  color='white'> Home</Link></Button>
                <Button  endIcon={<GroupAddSharpIcon sx={{color:"black"}}/>}  sx={{marginLeft:1,borderRadius:3 }} color="inherit" variant='contained'> <Link style={{textDecoration:"none",color:'rgba(2,0,36,1)'}} to="/create" underline="none">Create</Link></Button>
                    
            </Toolbar>
        </AppBar>
        <br/> <br/><br/><br/><br/>
    </div>
  )
}

export default NavTest