import { makeStyles } from "@mui/styles";

export const useStyle=makeStyles({
    container:
    {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:' center',
    alignItems: 'center',
    textAlign:'center',
    color:'white',
    margin: '40px 20px 0 20px',
    },
    containerHeading:
    {
     width: '50%',
     paddingBottom:'50px',
    },
    
    containerHeadingH3:
    {
        fontSize: '3em',
        fontWeight: 'bolder',
        paddingBottom: '10px',
        borderBottom:' 3px solid #FFF',
        boxShadow:' 0px 2px rgba(255, 0, 170, 0.845)',
        textShadow:'2px 2px 8px red,2px 2px 8px rgb(230, 0, 255)',
    },
    
    containerHeadingH3Span:{
        fontWeight: 20,
        fontSize: '70%',
        textShadow:'5px 5px 3px red',
        
    }
})