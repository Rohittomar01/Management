import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Paper } from "@mui/material";
import { TechnoparvCss } from "../TechnoparvCss";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import videoBg from "../Videos/VideoBg.mp4";
import "../Videos/videoCss.css";



export default function VilayLiteraryEvent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  var classes = TechnoparvCss();

  return (
    <div>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          {/* <h1 className="v-heading3">ilay</h1> */}
          <h1 className="v-heading">Welcome Back</h1>
          {/* <h1 className="v-heading2">I.P.S Group Of Colleges</h1> */}
        </div>
      </div>
      <Box sx={{ flexGrow: 1, overflow: "hidden" }} id="technoparv">
        <AppBar
          position="fixed"
          sx={{
            background: "#bc4e9c",
            background: "-webkit-linear-gradient(to right, #bc4e9c, #f80759",
            background: "linear-gradient(to right, #bc4e9c, #f80759)",
            height: 50,
          }}
        >
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Vilay
            </Typography>
            {!matches ? (
              <Grid
                item
                xs={12}
                className="v-header"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: "48%",
                  width: 600,
                }}
              >
                <a style={{ textDecoration: "none" }} href="/homepage">
                  <span className={classes.headeritem}>Home</span>
                </a>
                <a style={{ textDecoration: "none" }} href="#aboutevent">
                  <span className={classes.headeritem}>About Us</span>
                </a>
                <a style={{ textDecoration: "none" }} href="#events">
                  <span className={classes.headeritem}>Events</span>
                </a>
                <a style={{ textDecoration: "none" }} href="#schedule">
                  <span className={classes.headeritem}>Schedule</span>
                </a>
                <a style={{ textDecoration: "none" }} href="#gallery">
                  <span className={classes.headeritem}>Gallery</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/">
                  <span className={classes.headeritem}>Contact</span>
                </a>
              </Grid>
            ) : (
              <></>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <div className="main-back-cont">
          <div className="main-cont">
            <img src="image/w20.jpg" className="img" />
            <img src="image/w21.jpg" className="img-2" />
            <h1 className="img-heading">QUIZ </h1>
            <p className="text">
              A quiz is a form of game or mind sport in which the players (as
              individuals or in teams) attempt to answer questions correctly. In
              some countries, a quiz is also a brief assessment used in
              education and similar fields to measure growth in knowledge,
              abilities, and/or skills.Quizzes are usually scored in points and
              many quizzes are designed to determine a winner from a group of
              participants – usually the participant with the highest score.
            </p>
          </div>
        </div>

        <div className="main-back-cont-reverse">
          <div className="main-cont-reverse">
            <img src="image/w22.jpg" className="img-reverse" />
            <img src="image/w23.jpg" className="img-2-reverse" />
            <h1 className="img-heading-right">DEBATE </h1>
            <p className="text-right">
              Debate is contention in argument; strife, dissension, quarrelling,
              controversy; especially a formal discussion of subjects before a
              public assembly. Debate is a method of formally presenting an
              argument in a disciplined manner. Through logical consistency,
              factual accuracy and some degree of emotional appeal to the
              audience are elements in debating, where one side often prevails
              over the other party by presenting a superior "context" of the
              issue. The outcome of a debate may depend upon consensus or some
              formal way of reaching a resolution, rather than the objective
              facts.In a formal debating contest, there are rules for
              participants to discuss and decide on differences, within a
              framework defining how they will interact.
            </p>
          </div>
        </div>

        <div className="main-back-cont" style={{ background: "#f74c06" }}>
          <div className="main-cont">
            <img src="image/w24.jpg" className="img" />
            <img src="image/w25.jpg" className="img-2" />
            <h1 className="img-heading">CREATIVE WRITING</h1>
            <p className="text">
              Creative writing is any writing that goes outside the bounds of
              normal professional, journalistic, academic, or technical forms of
              literature, typically identified by an emphasis on narrative craft
              and character development. Both fictional and non-fictional works
              fall into this category. Creative writing can technically be
              considered any writing of original composition.Unlike its academic
              counterpart of writing classes that teach students to compose work
              based on the rules of the language, creative writing is believed
              to focus on students’ self-expression.
            </p>
          </div>
        </div>

        {/* <div className="main-back-cont-reverse" style={{backgroundImage: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)'}}>
        <div className="main-cont-reverse">
         <img src="image/w8.jpg" className="img-reverse" />
         <img src="image/w9.jpg" className="img-2-reverse" />
         <h1 className="img-heading-right"> INDIAN SOLO DANCE </h1>
         <p className="text-right">Dance in India comprises the varied styles of dances in the country. As with other aspects of Indian culture, different forms of dances originated in different parts of India, developed according to the local traditions and also imbibed elements from other parts of the country.Classical dance in India has developed a type of dance-drama that is a form of a total theater. The dancer acts out a story almost exclusively through gestures. Most of the classical dances enact stories from Hindu mythology. Each form represents the culture and ethos of a particular region or a group of people.</p>
        </div>
        </div> */}
      </div>
    </div>
  );
}
