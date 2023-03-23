import {Box,styled} from '@mui/material'
import { useContext, useState,useEffect } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
  height: 41vh;
  ${'' /* position: relative; */}
`
const Result = () => {

    const [src,setSrc] = useState('');

    // js,css,js
    const {html,css,js} = useContext(DataContext)

    const srcCode = `
       <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
       </html> `

       useEffect( () => {
         const timeout = setTimeout( () => {
            setSrc(srcCode);

          },250)
           return () => clearTimeout(timeout) // value in ms
       },[html,css,js]) // array dependancy telling the useefect to run 
           // to run when therer is a cange in html or css or js
           // by defualt it runs 1 time at the time of page render

    return(
        <Container style={html || css || js ? {background: '#444857'} : {background: '#444857' } }>
           <iframe 
              srcDoc={srcCode}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
           />
        </Container>
    )
}

export default Result