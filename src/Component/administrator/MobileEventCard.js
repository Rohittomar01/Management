import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Zoom from 'react-reveal/Zoom';
import { Button } from '@mui/material';
// import './EventCard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      // transform: 'translateY(-3px)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },
  },
  eventImage: {
    width: '100%',
    maxWidth: '100%',
    borderRadius: '4px',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function MobileEventCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Zoom>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className={classes.eventImage}>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790__340.jpg" alt="Example Event" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                Example Event
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nulla vel risus interdum rhoncus eget ut augue.
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <EventIcon className={classes.icon} />
                  June 1, 2023
                </li>
                <li className="list-group-item">
                  <AccessTimeIcon className={classes.icon} />
                  2:00 PM - 5:00 PM
                </li>
                <li className="list-group-item">
                  <LocationOnIcon className={classes.icon} />
                  123 Main St, Anytown USA
                </li>
                
                
                <Button variant="contained" color="primary">Join Now</Button>
               
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>


      <Zoom>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className={classes.eventImage}>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790__340.jpg" alt="Example Event" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                Example Event
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nulla vel risus interdum rhoncus eget ut augue.
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <EventIcon className={classes.icon} />
                  June 1, 2023
                </li>
                <li className="list-group-item">
                  <AccessTimeIcon className={classes.icon} />
                  2:00 PM - 5:00 PM
                </li>
                <li className="list-group-item">
                  <LocationOnIcon className={classes.icon} />
                  123 Main St, Anytown USA
                </li>
                
                <Button variant="contained" color="primary">Join Now</Button>
               
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>
      <Zoom>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className={classes.eventImage}>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790__340.jpg" alt="Example Event" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                Example Event
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nulla vel risus interdum rhoncus eget ut augue.
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <EventIcon className={classes.icon} />
                  June 1, 2023
                </li>
                <li className="list-group-item">
                  <AccessTimeIcon className={classes.icon} />
                  2:00 PM - 5:00 PM
                </li>
                <li className="list-group-item">
                  <LocationOnIcon className={classes.icon} />
                  123 Main St, Anytown USA
                </li>
                
                <Button variant="contained" color="primary">Join Now</Button>
               
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>
      <Zoom>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className={classes.eventImage}>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790__340.jpg" alt="Example Event" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                Example Event
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nulla vel risus interdum rhoncus eget ut augue.
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <EventIcon className={classes.icon} />
                  June 1, 2023
                </li>
                <li className="list-group-item">
                  <AccessTimeIcon className={classes.icon} />
                  2:00 PM - 5:00 PM
                </li>
                <li className="list-group-item">
                  <LocationOnIcon className={classes.icon} />
                  123 Main St, Anytown USA
                </li>
                
                <Button variant="contained" color="primary">Join Now</Button>
               
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>
    </div>
  );
}

export default MobileEventCard;
