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
import videoBg2 from '../Videos/VideoBg2.mp4'
import '../Videos/videoCss.css'

export default function VilayCreativityEvent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  var classes = TechnoparvCss()

  return (
    <div>

      <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg2} autoPlay loop muted />
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
        <div className="main-back-cont" style={{background:'#ff930f'}}>
        <div className="main-cont">
         <img src="image/w11.jpg" className="img" />
         <img src="image/w10.jpg" className="img-2" />
         <h1 className="img-heading">POSTER PAINTING </h1>
         <p className="text">A poster is any piece of printed paper designed to be attached to a wall or vertical surface. Typically posters include both textual and graphic elements, although a poster may be either wholly graphical or wholly text. Posters are designed to be both eye-catching and informative. Posters may be used for many purposes. They are a frequent tool of advertisers (particularly of events, musicians and films), propagandists, protestors and other groups trying to communicate a message. Posters are also used for reproductions of artwork, particularly famous works, and are generally low-cost compared to original artwork. The modern poster, as we know it, however, dates back to the 1840s and 1850s when the printing industry perfected colour lithography and made mass production possible.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse" style={{background:'#eca0ff'}}>
        <div className="main-cont-reverse">
         <img src="image/ips1.jpg" className="img-reverse" />
         <img src="image/ips2.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">COLLAGE MAKING </h1>
         <p className="text-right">Collage is a technique of an art production, primarily used in the visual arts, where the artwork is made from an assemblage of different forms, thus creating a new whole.A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers, portions of other artwork or texts, photographs and other found objects, glued to a piece of paper or canvas. The origins of collage can be traced back hundreds of years, but this technique made a dramatic reappearance in the early 20th century as an art form of novelty.The term collage was coined by both Georges Braque and Pablo Picasso in the beginning of the 20th century when collage became a distinctive part of modern art.</p>
        </div>
        </div>

        <div className="main-back-cont" style={{background:'#f1515e'}}>
        <div className="main-cont">
         <img src="image/w12.jpg" className="img" />
         <img src="image/w13.jpg" className="img-2" />
         <h1 className="img-heading">RANGOLI </h1>
         <p className="text">Rangoli, also known as Kolam, is an artform from India in which patterns are created on the floor in living rooms or courtyards using materials such as colored rice, dry flour, colored sand or flower petals and paints. It is generally done during various Indian festivals.The purpose of rangoli is decoration, and it is thought to bring good luck. Design depictions may also vary as they reflect traditions, folklore and practices that are unique to each area.Generally, this practice is showcased during occasions such as festivals, auspicious observances, marriage celebrations and other similar milestones and gatherings.</p>
         </div>
        </div>

        <div className="main-back-cont-reverse" style={{background: '#ffcb6b'}}>
        <div className="main-cont-reverse">
         <img src="image/w14.jpg" className="img-reverse" />
         <img src="image/w15.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right">NUKKAD NATAK</h1>
         <p className="text-right">Mime is a theatrical medium or a performance art involving miming or the acting out of a story through bodily motions without use of SPEECH.</p>
        </div>
        </div>

      </div>
    </div>
  )
}