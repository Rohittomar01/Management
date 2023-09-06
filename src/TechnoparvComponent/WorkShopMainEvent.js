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
import NavigationIcon from '@mui/icons-material/Navigation';



export default function WorkShopMainEvent() {

    var classes = TechnoparvCss()
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
                    <div  style={{ marginTop: "4%", paddingTop: "1%" }}>

                        <ContainedButton  color="secondary" onClick={() => navigate("/WorkshopMainEvent/workshopcard")}>Android App Development</ContainedButton>
                        <ContainedButton color="primary">HRB Development & Water Tank Design</ContainedButton>
                        <ContainedButton>Game Development Using Java</ContainedButton>
                        <ContainedButton color="primary">Home Automation Using AI</ContainedButton>

                        <div style={{ marginTop: "1%",justifyContent:"space-evenly"}}>
                            <ContainedButton color="primary">CNC</ContainedButton>
                            <ContainedButton color="secondary">Web Design</ContainedButton>
                            <ContainedButton>Python</ContainedButton>
                            <ContainedButton color="primary">PCB</ContainedButton>
                            <ContainedButton color="primary">Ethical Hacking</ContainedButton>
                            <ContainedButton>Ic Engine</ContainedButton>
                            <ContainedButton color="secondary">3D Printing</ContainedButton>
                        </div>
                    </div>
                   
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