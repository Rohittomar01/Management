import Techno_EventCards from "./Techno_EventCards";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Techno_Events() {

  const mobile = useMediaQuery('(max-width:426px)');
  const tablet = useMediaQuery("(max-width:768px)");
  const laptop= useMediaQuery('(max-width:1500px)');
  const xlg= useMediaQuery('(min-width:1500px)');

  return (
    <div>
      <div>
        <h1 style={{color:"rgb(4, 184, 4)",textAlign:"center",fontWeight:400,fontFamily:"serif",fontSize:xlg?"3.5rem":''}}>Events</h1>
      </div>
      <div>
        <Techno_EventCards/>
      </div>
    </div>
  );
}
