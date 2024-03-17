import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { React, createRef } from "react";
import Slider from "react-slick";
import { getData, postData, serverURL } from "../../Services/ServerServices";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Grid, Paper } from "@mui/material";
import { TechnoparvCss } from "./TechnoparvCss";
// import Footer from '../Component/administrator/Footer';
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScheduleSection from "./ScheduleSection";
// import TechnoparvDay01 from './TechnoparvDay01';
import TechnoparvDay02 from "./TechnoparvDay02";
import TechnoparvDay03 from "./TechnoparvDay03";
import TechnoparvDay04 from "./TechnoparvDay04";
import EventCard from "./EventCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import VilaySchedule from "./vilayschedule/VilaySchedule";
import "./Videos/videoCss.css";

export default function Vilay() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  var classes = TechnoparvCss();
  const [btnStatus, setBtnStatus] = useState(false);
  const [image, setImage] = useState([]);
  // ******************USED FOR Slider*****************************************
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  // *******************************************************************************

  // *********************************************USED FOR GALLERY**************************************
  var gallery = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: !matches ? 5 : 3,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  // **************************************************************************************************

  var slider = createRef();
  function handlePrevImg() {
    slider.current.slickPrev();
  }

  function handleNextImg() {
    slider.current.slickNext();
  }

  const fetchCarouselImg = async () => {
    var result = await getData("gallery/fetchTechnoparvCarouselImg");
    // alert(result)
    console.log(result.data);
    setImage(result.data);
  };

  //    ****************************USED FOR PLAY IMG ON SLIDER******************************

  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "12.jpg",
    "11.jpg",
    "3.jpg",
    "12.jpg",
  ];
  function playImg() {
    return image.map((item) => {
      return (
        <div>
          <img
            alt={"image"}
            src={`${serverURL}/uploaded/${item.slidepicl}`}
            style={{ width: "100%", height: !matches ? "90vh" : "50vh" }}
          ></img>
        </div>
      );
    });
  }

  function play() {
    return images.map((item) => {
      return (
        <div>
          <img
            alt={"image"}
            src={`${serverURL}/uploaded/${item}`}
            style={{ width: "100vw", height: !matches ? "94vh" : "25vh" }}
          ></img>
        </div>
      );
    });
  }

  function plays() {
    return images.map((item) => {
      return (
        <a data-fancybox="gallery" href={`${serverURL}/uploaded/${item}`}>
          <div>
            <img
              alt={"image"}
              src={`${serverURL}/uploaded/${item}`}
              style={{
                width: "100%",
                height: !matches ? "30vh" : "25vh",
                margin: 10,
              }}
            ></img>
          </div>
        </a>
      );
    });
  }
  // *******************************************************************************

  useEffect(function () {
    fetchCarouselImg();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Box sx={{ flexGrow: 1 }} id="technoparv">
        <AppBar position="fixed" sx={{ background: "#ff5e57", height: 50 }}>
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
        <div style={{ width: "100%", position: "relative" }}>
          {!matches ? (
            <>
              <ArrowBackIosNewIcon
                onClick={handlePrevImg}
                style={{
                  color: "white",
                  fontSize: 35,
                  zIndex: 1,
                  left: 20,
                  top: "40vh",
                  position: "absolute",
                }}
              />
            </>
          ) : (
            <></>
          )}

          <Slider ref={slider} {...settings}>
            {play()}
          </Slider>
          {!matches ? (
            <>
              <ArrowForwardIosIcon
                onClick={handleNextImg}
                style={{
                  color: "white",
                  fontSize: 35,
                  zIndex: 2,
                  right: 20,
                  top: "40vh",
                  position: "absolute",
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div id="events"> </div>
        <div className={classes.ribinbg}>
          <h1 className="d-flex justify-content-center mt-0 abouth1color  pt-3  ribinbg">
            {" "}
            &nbsp;&nbsp;&nbsp; About Us &nbsp; &nbsp;&nbsp;
          </h1>
        </div>
        <div
          className="main-back-cont"
          style={{ background: "#fff", height: "80vh" }}
        >
          <div className="main-cont">
            <img src="image/w2.jpg" className="img" />
            <img src="image/w1.jpg" className="img-2" />
            {/* <h1 className="img-heading" style={{color:"#000"}}>About Us </h1> */}
            <p className="text mt-3" style={{ color: "#000" }}>
              Full of vibrant colors and creativity, Vilay is a two-day annual
              fest. All colleges of IPS Group confluence on this occasion to
              celebrate the grand &Festive Odyssey. This annual fest is held in
              the month of Feb-March when nature calls for spring season. Amidst
              an aroma of spring, the college corridors come alive with
              students' activities. It provides a platform for various
              innovative competitions like singing, dancing, music, mimicry,
              acting, poetry, rangoli , poster making and the like. Based on
              socially relevant themes and carrying value-based messages the
              students imbibe values while enjoying the fest. Students are
              bestowed with prizes and certificates to recognize their efforts
              and celebrate their talents.
            </p>
          </div>
        </div>

        <div>
          <div id="events"> </div>
          <div className={classes.ribinbg} style={{ marginTop: "-3%" }}>
            <h1 className="d-flex justify-content-center mt-0 abouth1color  pt-3  ribinbg">
              {" "}
              &nbsp;&nbsp;&nbsp; Event's &nbsp; &nbsp;&nbsp;
            </h1>
          </div>

          {/* *****************************************EVENT SECTION********************************************************************* */}
          <div style={{ marginTop: "3%" }}>
            <EventCard />
          </div>
          {/* **************************************************************************************************************************** */}
        </div>

        {/* ************************************SCHEDULE SECTION****************************************************************** */}
        <div id="schedule"></div>
        <div className={classes.ribinbg} id="schedule">
          <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 ">
            Schedule
          </h1>
        </div>
        <div style={{ marginTop: "5%" }}>
          <VilaySchedule />
        </div>
      </div>

      {/* *************************************************************************************************************************** */}
      <div id="gallery"> </div>
      <div className={classes.ribinbg}>
        <h1 className="d-flex justify-content-center mt-4 abouth1color  pt-3  ribinbg">
          {" "}
          &nbsp; Gallery &nbsp;
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "20%",
          marginTop: "4%",
          position: "relative",
        }}
      >
        <Slider {...gallery}>{plays()}</Slider>
      </div>

      {/* <div style={{ marginTop: "7%" }}><hr></hr> <Footer /></div> */}
    </div>
  );
}
