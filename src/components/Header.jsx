
import {AppBar , Toolbar , styled} from '@mui/material';
import React  from 'react';
const Container = styled(AppBar)`
   background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh; 
`

const Header = () =>{
   const logo = "https://cdn-icons-png.flaticon.com/512/7083/7083977.png";
   return(
    <Container position="static">
        <Toolbar>
           <img src ={logo} alt="logo" style={{width: 40}}/>
        </Toolbar>
    </Container>
    )
}

export default Header

