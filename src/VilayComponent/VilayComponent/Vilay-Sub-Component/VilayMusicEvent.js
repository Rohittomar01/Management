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
import videoBg3 from '../Videos/VideoBg3.mp4'
import '../Videos/videoCss.css'
export default function VilayMusicEvent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  var classes = TechnoparvCss()

  return (
    <div>

      <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg3} autoPlay loop muted />
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
         <img src="image/w17.jpg" className="img" />
         <img src="image/w16.jpg" className="img-2" />
         <h1 className="img-heading">LIGHT VOCAL SONG</h1>
         <p className="text">Vocal Solo music is a type of music performed by one singer, with or without instrumental accompaniment, in which singing provides the main focus of the piece. Indian classical music is based on a rich vocal tradition, wherein even instruments are evaluated on their ability to follow the human voice, imitate it, or recreate the same expressions.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse">
        <div className="main-cont-reverse">
         <img src="image/w18.jpg" className="img-reverse" />
         <img src="image/w19.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">GROUP SONG </h1>
         <p className="text-right">Group Song can be defined as any kind of music sung by more than one singers, with or without musical instruments,light or heavy. The group can be of two types in general- A choir, and A Band. A choir generally sings together or in sync with one another, whereas in a a band there are one or two singers, while others are in charge of some musical instrument such as guitars, drums, flute, etc</p>
        </div>
        </div>

        {/* <div className="main-back-cont" style={{backgroundImage:' linear-gradient(to top, #ff0844 0%, #ffb199 100%)'}}>
        <div className="main-cont">
         <img src="image/w6.jpg" className="img" />
         <img src="image/w7.jpg" className="img-2" />
         <h1 className="img-heading">Rules :-</h1>
         <p className="text">Rangoli, also known as Kolam, is an artform from India in which patterns are created on the floor in living rooms or courtyards using materials such as colored rice, dry flour, colored sand or flower petals and paints. It is generally done during various Indian festivals.The purpose of rangoli is decoration, and it is thought to bring good luck. Design depictions may also vary as they reflect traditions, folklore and practices that are unique to each area.Generally, this practice is showcased during occasions such as festivals, auspicious observances, marriage celebrations and other similar milestones and gatherings.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse" style={{backgroundImage: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)'}}>
        <div className="main-cont-reverse">
         <img src="image/w8.jpg" className="img-reverse" />
         <img src="image/w9.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">NUKKAD NATAK</h1>
         <p className="text-right">Mime is a theatrical medium or a performance art involving miming or the acting out of a story through bodily motions without use of SPEECH.</p>
        </div>
        </div> */}

      </div>
    </div>
  )
}