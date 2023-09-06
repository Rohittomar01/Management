import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { Grid } from '@mui/material';
import { Button } from '@material-ui/core';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useStyles } from '../../Component/administrator/HomePageCss';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



import Ipl from './Ipl';
import Crafting from './Crafting';
import Dancing from './Dancing';
import NailArt from './NailArt';
import Quiz from './Quiz';
import Snooker from './Snooker';
import TresureHunt from './TresureHunt';




export default function SportEvent() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    var classes = useStyles()
    var navigate = useNavigate()
    return (
        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/12/14/13/59/ball-1906468_1280.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "75%", height: "100vh" }}>
            <div>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
                        <Toolbar variant="dense">

                            <Typography variant="h6" color="inherit" component="div">
                                Eventos
                            </Typography>
                            <Grid xs={6} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "40%" }}>


                                <a href="technoparv" style={{ textDecoration: "none" }}><span className={classes.headeritem}>Home</span></a>
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
                    {!matches?<> <div style={{ marginTop: !matches ? "4%" : "10%", paddingTop: "2%", zIndex: "2", position: "absolute", display: "flex", flexWrap: "wrap", }}>

                        {/* <containedButton  color="secondary" onClick={() => navigate("/TechventureEvent/workshopcard")}>Android App Development</containedButton> */}
                        <ContainedButton color="primary" onClick={() => navigate("/SportEvent/Ipl")}>6Pl</ContainedButton>
                        <ContainedButton onClick={() => navigate("/SportEvent/Crafting")}>Crafting</ContainedButton>
                        <ContainedButton color="primary" onClick={() => navigate("/SportEvent/Dancing")}>Dancing</ContainedButton>

                        {/* <div style={{ marginTop: "1%",justifyContent:"space-evenly"}}> */}
                        <ContainedButton color="primary" onClick={() => navigate("/SportEvent/NailArt")}>NailArt</ContainedButton>
                        <ContainedButton color="secondary" onClick={() => navigate("/SportEvent/Quiz")}>Quiz</ContainedButton>
                        <ContainedButton onClick={() => navigate("/SportEvent/Snooker")}>Snooker</ContainedButton>
                        <ContainedButton onClick={() => navigate("/SportEvent/TresureHunt")}>Tresure Hunt</ContainedButton>
                        {/* </div> */}
                    </div></>:<>
                    <div style={{ marginTop: "9%", paddingTop: "1%", zIndex: "2", position: "absolute", display: "flex", flexDirection:"column",marginLeft:"-2%" }}>

                        {/* <containedButton  color="secondary" onClick={() => navigate("/TechventureEvent/workshopcard")}>Android App Development</containedButton> */}
                        <Button style={{borderRadius:" 0 10% 10% 10%"}} variant="contained" size="small" onClick={() => navigate("/SportEvent/Ipl")}>6Pl</Button>
                        <Button  color="primary" variant="contained" size="small" onClick={() => navigate("/SportEvent/Crafting")}>Crafting</Button>
                        <Button  variant="contained" size="small" onClick={() => navigate("/SportEvent/Dancing")}>Dancing</Button>

                        {/* <div style={{ marginTop: "1%",justifyContent:"space-evenly"}}> */}
                        <Button  color="primary" variant="contained" size="small"  onClick={() => navigate("/SportEvent/NailArt")}>NailArt</Button>
                        <Button   variant="contained" size="small" onClick={() => navigate("/SportEvent/Quiz")}>Quiz</Button>
                        <Button  color="primary" variant="contained" size="small" onClick={() => navigate("/SportEvent/Snooker")}>Snooker</Button>
                        <Button variant="contained" size="small"  onClick={() => navigate("/SportEvent/TresureHunt")}>Tresure Hunt</Button>
                        {/* </div> */}
                    </div></>}

                </Grid>
            </Grid>
            <div>
                <Routes>
                    <Route element={<Ipl />} path={"/Ipl"}></Route>
                    <Route element={<Dancing />} path={"/Dancing"}></Route>
                    <Route element={<Crafting />} path={"/Crafting"}></Route>
                    <Route element={<NailArt />} path={"/NailArt"}></Route>
                    <Route element={<Quiz />} path={"/Quiz"}></Route>
                    <Route element={<TresureHunt />} path={"/TresureHunt"}></Route>
                    <Route element={<Snooker />} path={"/Snooker"}></Route>
                </Routes>
            </div>
        </div>
    )
}