import * as React from 'react';
import MaterialTable from "@material-table/core"
import { Grid, Avatar, Link } from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Typography from '@mui/material/Typography';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useNavigate } from "react-router-dom";
import { style } from '@mui/system';

export default function Day() {

    var classes = TechnoparvCss()
    var Navigate = useNavigate()

    return (
        <div>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12}>
                    <List sx={{ width: '100%', maxWidth: "100vw", bgcolor: 'background.paper' }}>

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <img alt="Remy Sharp" src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ width: "15vw" }} />
                            </ListItemAvatar>
                            <div style={{ diplay: "flex", flexDirection: "row" }}>
                                <div >
                                    <ListItemText
                                        primary={<span style={{ margin: 40 }}>{'Android app Developemen'}</span>}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Venue-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Timing-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Coordinators-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    registration & Fee -
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Link  to='#cnc'
                                        style={{
                                            textDecoration: "none",
                                            width: 115,
                                            height: 40, margin: 19,
                                            alignItems: "center",
                                            display: "flex",
                                            justifyItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}> <ContainedButton color="primary"><span className={classes.schedulelistbutton} onClick={() => Navigate("/WorkShopCard")}>Details</span></ContainedButton></Link>
                                    <Link style={{
                                        textDecoration: "none",
                                        width: 115,
                                        height: 40, margin: 19,
                                        alignItems: "center",
                                        display: "flex",
                                        justifyItems: "center",
                                        justifyContent: "center",

                                    }}> <ContainedButton color="primary" ><span className={classes.schedulelistbutton}>join</span></ContainedButton></Link>
                                </div>
                            </div>

                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <img alt="Travis Howard" src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ width: "15vw" }} />
                            </ListItemAvatar>
                            <div>
                                <div style={{ width: "100%" }}>
                                    <ListItemText
                                        primary={<span style={{ margin: 40 }}>{'Home automation using AI'}</span>}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Venue-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Timing-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Coordinators-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    registration & Fee -
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Link to='#cnc' style={{
                                        textDecoration: "none",
                                        width: 115,
                                        height: 40, margin: 19,
                                        alignItems: "center",
                                        display: "flex",
                                        justifyItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}> <ContainedButton color="primary"><span className={classes.schedulelistbutton} onClick={() => Navigate("/WorkShopCard")}>Details</span></ContainedButton></Link>
                                    <Link style={{
                                        textDecoration: "none",
                                        width: 115,
                                        height: 40, margin: 19,
                                        alignItems: "center",
                                        display: "flex",
                                        justifyItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}> <ContainedButton color="primary" className={classes.schedulelistbuttonstyle} ><span className={classes.schedulelistbutton}>join</span></ContainedButton></Link>
                                </div>
                            </div>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <img alt="Cindy Baker" src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ width: "15vw" }} />
                            </ListItemAvatar>
                            <div>
                                <div style={{ width: "100%" }}>
                                    <ListItemText
                                        primary={<span style={{ margin: 40 }}>{'Ethical Hacking'}</span>}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Venue-
                                                </Typography>
                                                {"Finishing Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Timing-
                                                </Typography>
                                                {"Centeral Lab"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Coordinators-
                                                </Typography>
                                                {"Nisha Mathe, Avnish Sharma"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    Contacts-
                                                </Typography>
                                                {"+91-7089046399, +91-9926131298"}
                                            </React.Fragment>
                                        }


                                    />
                                    <ListItemText

                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    margin={5}
                                                >
                                                    registration & Fee -
                                                </Typography>
                                                {"₹300"}
                                            </React.Fragment>
                                        }


                                    />

                                </div>

                                <div style={{ display: "flex", flexDirection: "row", alignSelf: "end" }}>
                                    <Link to='#cnc' style={{
                                        textDecoration: "none",
                                        width: 115,
                                        height: 40, margin: 19,
                                        alignItems: "center",
                                        display: "flex",
                                        justifyItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}> <ContainedButton color="primary"><span className={classes.schedulelistbutton} onClick={() => Navigate("/WorkShopCard")}>Details</span></ContainedButton></Link>
                                    <Link style={{
                                        textDecoration: "none",
                                        width: 115,
                                        height: 40, margin: 19,
                                        alignItems: "center",
                                        display: "flex",
                                        justifyItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}> <ContainedButton color="primary" className={classes.schedulelistbuttonstyle} ><span className={classes.schedulelistbutton}>join</span></ContainedButton></Link>
                                </div>
                            </div>
                        </ListItem>
                    </List>

                </Grid>
            </Grid>
        </div >


    )
}