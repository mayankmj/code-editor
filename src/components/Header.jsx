
import {AppBar , Toolbar , styled} from '@mui/material';
import React, { Component }  from 'react';
const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;  
`

const Header = () =>{
   const logo = "https://picsum.photos/id/1/200/300";
   return(
    <Container position="static">
        <Toolbar>
           <img src ={logo} alt="logo" style={{width: 40}}/>
        </Toolbar>
    </Container>
    )
}

export default Header

