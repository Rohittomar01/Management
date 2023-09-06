import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { Grid} from '@mui/material';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useStyles } from '../../Component/administrator/HomePageCss';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Navigation';


import RoboRace from './RoboRace';
import RoboWar from './RoboWar';
import AquaRace from './AquaRace';
import CircuitDesign from './CircuitDesign';
import WaterRocketCompitition from './WaterRocketCompitition';
import WebDevelopment from './WebDevelopment';




export default function TechventureEvent() {

    var classes = useStyles()
    var navigate=useNavigate()
    return (
        <div  style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2016/12/14/13/59/ball-1906468_1280.png")`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"75%",height:"100vh"}}>
            <div>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
                        <Toolbar variant="dense">
                          
                            <Typography variant="h6" color="inherit" component="div">
                                Eventos
                            </Typography>
                            <Grid xs={6} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "40%" }}>


                                <a href="technoparv"style={{textDecoration:"none"}}><span className={classes.headeritem}>Home</span></a>
                                <a href="#events"><span className={classes.headeritem}></span></a>
                                <a href="#sponsor"><span className={classes.headeritem}></span></a>
                                <a href="/"><span className={classes.headeritem}></span></a>
                                <a href="/"><span className={classes.headeritem}></span></a>



                            </Grid>
                        </Toolbar>

                    </AppBar>
                </Box>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <div  style={{ marginTop: "4%", paddingTop: "2%" }}>

                        {/* <ContainedButton  color="secondary" onClick={() => navigate("/TechventureEvent/workshopcard")}>Android App Development</ContainedButton> */}
                        <ContainedButton color="primary" onClick={()=>navigate("/TechventureEvent/RoboRace")}>Robo Race</ContainedButton>
                        <ContainedButton onClick={()=>navigate("/TechventureEvent/AquaRace")}>Aqua Race</ContainedButton>
                        <ContainedButton color="primary" onClick={()=>navigate("/TechventureEvent/WebDevelopment")}>Web Development</ContainedButton>

                        {/* <div style={{ marginTop: "1%",justifyContent:"space-evenly"}}> */}
                            <ContainedButton color="primary"onClick={()=>navigate("/TechventureEvent/CircuitDesign")}>Circuit Design</ContainedButton>
                            <ContainedButton color="secondary"onClick={()=>navigate("/TechventureEvent/RoboWar")}>Robo War</ContainedButton>
                            <ContainedButton onClick={()=>navigate("/TechventureEvent/WaterRocketCompetition")}>Water Rocket Competition</ContainedButton>
                           
                        {/* </div> */}
                    </div>
                   
                </Grid>
            </Grid>
            <div>
               <Routes>
               <Route element={<RoboRace />} path={"/RoboRace"}></Route>
               <Route element={<RoboWar />} path={"/RoboWar"}></Route>
               <Route element={<AquaRace />} path={"/AquaRace"}></Route>
               <Route element={<WaterRocketCompitition />} path={"/WaterRocketCompetition"}></Route>
               <Route element={<WebDevelopment />} path={"/WebDevelopment"}></Route>
               <Route element={<CircuitDesign />} path={"/CircuitDesign"}></Route>
               </Routes>
            </div>
        </div>
    )
}