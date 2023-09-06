import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { Grid} from '@mui/material';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { TechnoparvCss } from './TechnoparvCss';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import WorkShopCard from './WorkshopCns';



export default function WorkShopMainEvent() {

    var classes = TechnoparvCss()
    var navigate=useNavigate()
    return (
        <div>
            <div>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                Eventos
                            </Typography>
                            <Grid xs={6} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "40%" }}>


                                <a href="#aboutevent"><span className={classes.headeritem}></span></a>
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
                    <div style={{ margin: "1%", paddingTop: "1%" }}>

                        <ContainedButton color="secondary" onClick={() => navigate("/WorkshopMainEvent/workshopcard")}>Android App Development</ContainedButton>
                        <ContainedButton color="primary">HRB Development & Water Tank Design</ContainedButton>
                        <ContainedButton>Game Development Using Java</ContainedButton>
                        <ContainedButton color="primary">Home Automation Using AI</ContainedButton>

                        <div style={{ marginTop: "1%" }}>
                            <ContainedButton color="primary">CNC</ContainedButton>
                            <ContainedButton color="secondary">Web Design</ContainedButton>
                            <ContainedButton>Python</ContainedButton>
                            <ContainedButton color="primary">PCB</ContainedButton>
                            <ContainedButton color="primary">Ethical Hacking</ContainedButton>
                            <ContainedButton>Ic Engine</ContainedButton>
                            <ContainedButton color="secondary">3D Printing</ContainedButton>
                        </div>
                    </div>
                    {/* <NavigationIcon sx={{ mr: 1 }} /> */}
                </Grid>
            </Grid>
            <div>
               <Routes>
               <Route element={<WorkShopCard />} path={"/workshopcard"}></Route>
               </Routes>
            </div>
        </div>
    )
}