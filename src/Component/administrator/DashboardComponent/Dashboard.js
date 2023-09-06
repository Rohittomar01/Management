import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import Product from './Product';
import Sponsor from '../SponsorIterface';
import DisplayAllSponsor from '../DisplayAllSponsor';
import HomeTitle from '../HomeTitle';
import InsertImage from '../gallery/InsertImage';
import DisplayTechnoparvSchedule from '../../../TechnoparvComponent/DisplayTechnoparvSchedule';
import ScheduleInterface from '../ScheduleInterface';
import InsertSliderImage from '../InsertSliderImage';
import { getData, serverURL } from '../../../Services/ServerServices';
import { useEffect, useState } from 'react';
import UpdateSliderImage from '../UpdateSliderImage';
import MessageSend from '../../../Message/MessageSend';
import CandidateListList from './CandidateList';




export default function Dashboard() {

    var navigate = useNavigate()

    const getStorageData = (ADMIN, defaultValue) => {
        const savedItem = localStorage.getItem("ADMIN");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }

    const [items, setItems] = useState(getStorageData());


    const handleLogoutClick = () => {

        localStorage.clear();
        navigate('/SigninPage')

    };


    return (

        <div>
            <div>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="static" sx={{ background: "black" }}>
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                             
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                Evanto
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>

            <Grid container>

                <Grid item xs={2} >
                    <div style={{ margin: 30 }}><Avatar alt="Remy Sharp" variant="rounded" src={"/assets/evento.png"} sx={{ width: "120%" }} /></div>
                    <Paper elevation={3} style={{ width: 180, height: 95, margin: 20, background: "EEEEEE" }}>
                        <div style={{ display: "flex",flexDirection:"column", justifyContent: "space-evenly", alignItems: "center", paddingTop: 14, fontFamily: "poppins", fontWeight: "bold" }}>
                            <Avatar alt="Remy Sharp" src={`${serverURL}/uploaded/${items[0].adminpic}`} variant="rounded" sx={{ height: 50 }} />
                            <span style={{ marginTop:"2%",fontWeight: 900, fontFamily: "serif", fontSize: "1rem" }}>{items[0].adminname}</span>
                        </div>
                    </Paper>
                    <div>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/HomeTitle")}
                                >

                                    <ListItemIcon>

                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<span style={{ fontFamily: "poppins", fontWeight: 600, letterSpacing: 1 }}>Title</span>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/DisplayAllSponsor")}
                                >
                                    <ListItemIcon>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sponsor" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/CandidateList")}
                                >
                                    <ListItemIcon>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Candidates list" />
                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/DisplayTechnoparvSchedule")}
                                >
                                    <ListItemIcon>
                                        <EventAvailableIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Schedule" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/msg")}
                                >
                                    <ListItemIcon>
                                        <NotificationsActiveIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Notification" />
                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/InsertImage")}
                                >
                                    <ListItemIcon>
                                        <AddPhotoAlternateIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Gallery Images" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/UpdateSliderImage")}
                                >
                                    <ListItemIcon>
                                        <ViewCarouselIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Carousel Images" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => handleLogoutClick()}
                                >
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>


                        </List>
                    </div>

                </Grid>
                <Grid item xs={10}>
                    <Routes>
                        {/* <Route element={< DisplayAllCategories />} path={"/DisplayAllCategories"}></Route> */}
                    </Routes>
                    <Routes>
                    <Route element={<UpdateSliderImage />} path={"/UpdateSliderImage"}></Route>
                        <Route element={<DisplayAllSponsor />} path={"/DisplayAllSponsor"}></Route>
                        <Route element={<Sponsor />} path={"/sponsor"}></Route>
                        <Route element={<HomeTitle />} path={"/hometitle"}></Route>
                        <Route element={<InsertImage />} path={"/InsertImage"}></Route>
                        <Route element={<DisplayTechnoparvSchedule />} path={"/DisplayTechnoparvSchedule"}></Route>
                        <Route element={<ScheduleInterface />} path={"/ScheduleInterface"}></Route>
                        <Route element={<InsertSliderImage />} path={"/InsertSliderImage"}></Route>
                        <Route element={<MessageSend />} path={"/msg"}></Route>
                        <Route element={<CandidateListList />} path={"/CandidateList"}></Route>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    );
}

