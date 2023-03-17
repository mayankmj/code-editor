
import Editor from "./Editor"
import {Box ,styled} from '@mui/material'  
import { useContext } from "react"

import { DataContext } from "../context/DataProvider"

const Code = () =>{

  const{html,sethtml,css,setcss,js,setjs} = useContext(DataContext);

    return(
       <Container>
         <Editor 
             heading="HTML"
             icon="/"
             color = "#FF3C41"
             value={html}
             onChange={sethtml}
             />
         <Editor 
             heading="CSS"
             icon="*"
             color = "#0EBEFF"
             value={css}
             onChange={setcss}
            />
         <Editor 
             heading="Javascript"
             icon="()"
             color = "#FCD000"
             value={js}
             onChange={setjs}
          />
       </Container>
    )
}


// css
const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`
export default Code;