import { Box } from "@mui/material";
import LoginImage from "../assets/2.jpg"

function LoginPage() {
  return(
   <Box component="div" sx={{display:"flex",alignItems:"center", height:"100vh"}}>
    <ImageSection/>
    <FormSection/>
   </Box> 
  )
}

function ImageSection(){
    return(
        <Box component="div" sx={{height:"auto", width:"50%", overflow:"hidden", mt:2}}>
            <Box component="img" src={LoginImage} sx={{width:"100%", height:"100%", objectFit:"cover"}}/>
        </Box>
    )
}

function FormSection(){
    return(
        <Box component="div"></Box>
    )
}

export default LoginPage;
