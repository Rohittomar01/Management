import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Paper } from '@mui/material';
import { TechnoparvCss } from '../TechnoparvCss';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import videoBg from '../Videos/VideoBg.mp4'
import '../Videos/videoCss.css'
export default function VilaySportsEvent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  var classes = TechnoparvCss()

  return (
    <div>

      <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
        {/* <h1 className="v-heading3">ilay</h1> */}
          <h1 className="v-heading">Welcome Back</h1>
          {/* <h1 className="v-heading2">I.P.S Group Of Colleges</h1> */}
          
        </div>
      </div>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }} id="technoparv">
        <AppBar position="fixed"  sx={{ background: "#ff5e57", height: 50 }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Vilay
            </Typography>
            {!matches ? <Grid item xs={12} className="v-header" style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "48%", width: 600 }}>
              <a style={{ textDecoration: "none" }} href="/homepage"><span className={classes.headeritem}>Home</span></a>
              <a style={{ textDecoration: "none" }} href="#aboutevent"><span className={classes.headeritem}>About Us</span></a>
              <a style={{ textDecoration: "none" }} href="#events"><span className={classes.headeritem}>Events</span></a>
              <a style={{ textDecoration: "none" }} href="#schedule"><span className={classes.headeritem}>Schedule</span></a>
              <a style={{ textDecoration: "none" }} href="#gallery"><span className={classes.headeritem}>Gallery</span></a>
              <a style={{ textDecoration: "none" }} href="/"><span className={classes.headeritem}>Contact</span></a>
            </Grid> : <></>}

          </Toolbar>


        </AppBar>
      </Box>
      <div>
        <div className="main-back-cont">
        <div className="main-cont">
         <img src="image/w26.jpg" className="img" />
         <img src="image/w27.jpg" className="img-2" />
         <h1 className="img-heading">BADMINDON</h1>
         <p className="text">Badminton is a racket sport played by two or four players, who hit a shuttlecock (also called a "birdie" or "shuttle") back and forth over a high net. The aim of the game is to hit the shuttlecock over the net and into the opponent's side of the court, making it difficult for them to return the shot. Points are awarded when a player successfully hits the shuttlecock onto the opponent's side of the court and the opponent is unable to return it. The game can be played as a singles or doubles match, and requires a combination of speed, agility, and precision to succeed.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse">
        <div className="main-cont-reverse">
         <img src="image/w28.jpg" className="img-reverse" />
         <img src="image/w29.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">BASKETBALL </h1>
         <p className="text-right">Basketball is a team sport played on a rectangular court with two teams of five players each. The objective of the game is to shoot a ball through a hoop (basket) that is positioned 10 feet above the ground, while preventing the other team from doing the same. Players can move the ball around the court by dribbling (bouncing the ball) or passing it to their teammates. Points are awarded when a team successfully shoots the ball through the hoop. The team with the most points at the end of the game, which usually consists of four quarters of 12 minutes each, wins. Basketball requires a combination of skills such as dribbling, shooting, passing, and teamwork.</p>
        </div>
        </div>

        <div className="main-back-cont" style={{backgroundImage:' linear-gradient(to top, #ff0844 0%, #ffb199 100%)'}}>
        <div className="main-cont">
         <img src="image/w30.jpg" className="img" />
         <img src="image/w31.jpg" className="img-2" />
         <h1 className="img-heading">VOLLEY BALL</h1>
         <p className="text">Volleyball is a team sport played on a rectangular court with two teams of six players each. The objective of the game is to hit a ball over a high net and to ground it on the opponent's side of the court, while preventing the other team from doing the same. Players can hit the ball with any part of their body, but can only touch the ball three times before it must be sent back over the net. Points are awarded when a team successfully grounds the ball on the opponent's side of the court or when the opposing team makes a mistake. The team with the most points at the end of the game, which is usually played to 25 points, wins. Volleyball requires a combination of skills such as serving, passing, setting, hitting, and teamwork.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse" style={{backgroundImage: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)'}}>
        <div className="main-cont-reverse">
         <img src="image/w32.jpg" className="img-reverse" />
         <img src="image/w33.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">SHOOTING</h1>
         <p className="text-right">Shooting is a sport or activity that involves the use of a firearm, air gun, or other projectile weapons to hit a target. The objective of shooting is to aim and hit a designated target with accuracy and precision. Shooting sports can involve a variety of disciplines, including rifle shooting, pistol shooting, trap shooting, skeet shooting, and sporting clays. Shooting can be done for recreational purposes, such as target shooting or hunting, or as a competitive sport, such as in the Olympics or other shooting competitions. Shooting requires a combination of physical and mental skills, including hand-eye coordination, focus, and control. Safety is also a key aspect of shooting, as firearms and other projectile weapons can be dangerous if not handled properly.</p>
        </div>
        </div>

      </div>
    </div>
  )
}