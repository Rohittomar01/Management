import { Grid, Paper ,Link} from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";


export default function EventCard() {

    var navigate=useNavigate()

    var classes = TechnoparvCss()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid container  style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddinghrefp: "2%", paddingLeft: "5%" }}>
                <div className="mb-4 ">
                    <Grid item xs={3}>
                       <Paper elevation={4} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://cdn.pixabay.com/photo/2017/03/07/20/45/cog-wheels-2125169__480.jpg")`,backgroundSize:'cover', borderRadius: "4%" }}onClick={()=>navigate("/WorkshopMainEvent")} ><span className={classes.eventCard}>Workshop</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4 ">
                    <Grid item xs={3}>
                     <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180,backgroundImage:`url("https://media.istockphoto.com/id/1263154432/photo/female-astronaut-with-glass-helmet.jpg?s=612x612&w=0&k=20&c=sr-IMBYjzKnrGa2EjrUb6sAHXNommNxEu8-j9nwukTk=")`,backgroundSize:'cover', borderRadius: "4%" }} onClick={()=>navigate("/TechventureEvent")} ><span className={classes.eventCard}>Techventure</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4 ">
                    <Grid item xs={3}>
                      <Paper elevation={3} style={{ display: "flex",width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558__480.jpg")`,backgroundSize:'cover', borderRadius: "4%" }}onClick={()=>navigate("/SportEvent")}  ><span className={classes.eventCard}>Sports</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4">
                    <Grid item xs={3}>
                       <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180,backgroundImage:`url("https://cdn.pixabay.com/photo/2020/02/24/06/33/crescent-4875339__480.jpg")`,backgroundSize:'cover', borderRadius: "4%" }}onClick={()=>navigate("/WorkshopMainEvent")} ><span className={classes.eventCard}>Star Night</span></Paper>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                      <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516__480.jpg")`,backgroundSize:'cover', borderRadius: "4%" }}onClick={()=>navigate("/WorkshopMainEvent")}  ><span className={classes.eventCard}>Culture</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4">
                    <Grid item xs={3}>
                       <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://media.istockphoto.com/id/1093627396/photo/dj-music-console-in-bright-colors-of-light-in-night-club.jpg?s=612x612&w=0&k=20&c=FXx6C2-sexkkMhHG17c6PYdVTylzItLSpZZdFehfFJY=")`,backgroundSize:'cover', borderRadius: "4%" }} onClick={()=>navigate("/DjNight")}  ><span className={classes.eventCard}>DJ Night</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4">
                    <Grid item xs={3}>
                        <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://media.istockphoto.com/id/638651064/photo/festival-vibes.jpg?s=612x612&w=0&k=20&c=afZFqRzSmUJrbUkNIwUdH8XMLzCwd-enolJjVvubyb4=")`,backgroundSize:'cover', borderRadius: "4%" }} ><span className={classes.eventCard}onClick={()=>navigate("/WorkshopMainEvent")} >Fun & Entertainment</span></Paper>
                    </Grid>
                </div>
                <div  className="mb-4">
                    <Grid item xs={3}>
                        <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage:`url("https://media.istockphoto.com/id/638651064/photo/festival-vibes.jpg?s=612x612&w=0&k=20&c=afZFqRzSmUJrbUkNIwUdH8XMLzCwd-enolJjVvubyb4=")`,backgroundSize:'cover', borderRadius: "4%" }} ><span className={classes.eventCard}onClick={()=>navigate("/WorkshopMainEvent")} >Workshop</span></Paper>
                    </Grid>
                </div>


            </Grid>
        </div>
    )

}