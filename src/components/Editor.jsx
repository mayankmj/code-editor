
import {Box,styled} from '@mui/material'
import CloseFullscreen from '@mui/icons-material/CloseFullscreen'
import React, { Component }  from 'react';
import {Controlled as ControlledEditor} from 'react-codemirror2' // for code editor
import 'codemirror/mode/xml/xml' // for auto complete of html in editor
import 'codemirror/mode/javascript/javascript' //for auto complete of js in editor
import 'codemirror/mode/css/css'  //for auto complete css js in editor

// codemirror css


const Editor = () =>{
    return(
       <Box>
          <Header>
             <Heading>
                <Box component="spam" style = {{background: 'red', height: 20, width: 20, display: 'flex',
                placeContent: 'center', borderRadius: 5, marginRight: 5, paddingButtom: 2}}>
                /</Box>
                HTML
             </Heading>
             <CloseFullscreen />
          </Header>

          <ControlledEditor />
       </Box>
    )
}



const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
`

export default Editor