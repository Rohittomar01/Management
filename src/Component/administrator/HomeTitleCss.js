import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

export const HomeTitleStyles=makeStyles({


    mainContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#dfe6e9",
        padding:30,
        height:"100vh",
        width:"100%"
        

    },
    box:{
        padding:25,
        borderRadius:10,
        margin:10,
        background:"#fff",
        width:"60%",
        
       


    },
    headingStyle:{
        fontFamily:"poppin",
        fontSize:26
    }
    ,margin:{
        margin:10
    },
    eventCard1:{
        fontSize:"1.3rem",
        color:"#ffff",
        fontWeight:600,
        padding:"5%",
        // borderRadius:"0 0 8% 8%",
        background:"#ff5e57",
        fontFamily:"sans-serif",
     
      },
      
      abouth2: {
      marginLeft: "8vw",
      marginTop: "3rem",
      fontFamily: 'Playfair Display , serif',
      color: "rgb(61, 89, 89)",
      fontSize: "5vw",
      // line-height: 9vh;
      lineHeight:"9vh"
    
        
    }

   
 



})