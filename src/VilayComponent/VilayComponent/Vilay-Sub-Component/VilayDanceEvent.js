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
export default function VilayDanceEvent() {
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
         <img src="image/w2.jpg" className="img" />
         <img src="image/w1.jpg" className="img-2" />
         <h1 className="img-heading">WESTERN GROUP DANCE </h1>
         <p className="text">Country/western dance, also called Country and Western dance, encompasses many dance forms or styles, which are typically danced to country-western music, and which are stylistically associated with American country and/or western traditions. Dance, along with music, has always dynamically expressed the spirit and personality of every culture. Modern western dance is part of this global language and its roots run wide and deep. They can be traced to the taverns of Ireland and to the ballrooms of Europe. Representatives from all of these cultures brought their native dances when they landed in America. Widely differing peoples who had little or no exposure to one another gathered and danced on common ground.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse">
        <div className="main-cont-reverse">
         <img src="image/w3.jpg" className="img-reverse" />
         <img src="image/w4.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">WESTERN SOLO DANCE </h1>
         <p className="text-right">Country/western dance, also called Country and Western dance, encompasses many dance forms or styles, which are typically danced to country-western music, and which are stylistically associated with American country and/or western traditions. Dance, along with music, has always dynamically expressed the spirit and personality of every culture. Modern western dance is part of this global language and its roots run wide and deep. They can be traced to the taverns of Ireland and to the ballrooms of Europe. Representatives from all of these cultures brought their native dances when they landed in America. Widely differing peoples who had little or no exposure to one another gathered and danced on common ground.</p>
        </div>
        </div>

        <div className="main-back-cont" style={{backgroundImage:' linear-gradient(to top, #ff0844 0%, #ffb199 100%)'}}>
        <div className="main-cont">
         <img src="image/w6.jpg" className="img" />
         <img src="image/w7.jpg" className="img-2" />
         <h1 className="img-heading">INDIAN GROUP DANCE </h1>
         <p className="text">Dance in India comprises the varied styles of dances in the country. As with other aspects of Indian culture, different forms of dances originated in different parts of India, developed according to the local traditions and also imbibed elements from other parts of the country.Classical dance in India has developed a type of dance-drama that is a form of a total theater. The dancer acts out a story almost exclusively through gestures. Most of the classical dances enact stories from Hindu mythology. Each form represents the culture and ethos of a particular region or a group of people.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse" style={{backgroundImage: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)'}}>
        <div className="main-cont-reverse">
         <img src="image/w8.jpg" className="img-reverse" />
         <img src="image/w9.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right"> INDIAN SOLO DANCE </h1>
         <p className="text-right">Dance in India comprises the varied styles of dances in the country. As with other aspects of Indian culture, different forms of dances originated in different parts of India, developed according to the local traditions and also imbibed elements from other parts of the country.Classical dance in India has developed a type of dance-drama that is a form of a total theater. The dancer acts out a story almost exclusively through gestures. Most of the classical dances enact stories from Hindu mythology. Each form represents the culture and ethos of a particular region or a group of people.</p>
        </div>
        </div>

      </div>
    </div>
  )
}