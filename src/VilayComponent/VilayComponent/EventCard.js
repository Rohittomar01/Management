import { Grid, Paper ,Link} from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EventCard() {

    var classes = TechnoparvCss()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid container spacing={2} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddinghrefp: "2%", paddingLeft: "5%" }}>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}}href="/vilaydance"><Paper elevation={4} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180,backgroundImage:'url("https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_960_720.jpg")',objectFit:'cover', borderRadius: "4%" ,backgroundSize:'cover'}} ><span className={classes.eventCard}>Dancing</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}} href="/vilaycreativity"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage: "url(https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080_960_720.jpg)", borderRadius: "4%",backgroundSize:'cover' }} ><span className={classes.eventCard}>Creativity</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}} href="/vilaymusic"><Paper elevation={3} style={{ display: "flex",width:!matches?230:200, height:!matches?210:180, backgroundImage: "url(https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_960_720.jpg)", borderRadius: "4%",backgroundSize:'cover'}} ><span className={classes.eventCard}>Music</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a   style={{textDecoration:"none"}}href="/vilayliterary"> <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180,backgroundImage: "url('https://images.pexels.com/photos/6334887/pexels-photo-6334887.jpeg?auto=compress&cs=tinysrgb&w=600')",backgroundSize:'cover', borderRadius: "4%" }}><span className={classes.eventCard}>Literary</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}}href="/vilaysports"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, backgroundImage: "url('https://cdn.pixabay.com/photo/2014/10/22/17/25/woman-498257__340.jpg')",backgroundSize:'cover', borderRadius: "4%" }} ><span className={classes.eventCard}>Sports</span></Paper></a>
                    </Grid>
                </div>
                


            </Grid>
        </div>
    )

}