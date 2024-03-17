import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { React, createRef } from "react";
import Slider from "react-slick";
import { getData, postData, serverURL } from "../Services/ServerServices";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Grid, Paper } from "@mui/material";
import { TechnoparvCss } from "./TechnoparvCss";
import Footer from "../Component/administrator/Footer";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScheduleSection from "./ScheduleSection";
import TechnoparvDay01 from "./TechnoparvDay01";
import TechnoparvDay02 from "./TechnoparvDay02";
import TechnoparvDay03 from "./TechnoparvDay03";
import TechnoparvDay04 from "./TechnoparvDay04";
import EventCard from "./EventCard";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MaterialTable from "@material-table/core";
import { Tooltip } from "@mui/material";
import { ContainedButton } from "@iktakahiro/gradient-mui-button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageListItem from "@mui/material/ImageListItem";
import "../StyleSheets/TechnoparvCss.css";
import "../VilayComponent/VilayComponent/Videos/videoCss.css";
import TechnoSchedule from "./technoschedule/TechnoSchedule";

export default function Technoparv() {
  var Navigate = useNavigate();
  var location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const xmlns = useMediaQuery(theme.breakpoints.down("xmlns"));

  var classes = TechnoparvCss();

  const [image, setImage] = useState([]);
  const [Data, setData] = useState([]);
  const [btnstatus, setBtnStatus] = useState(true);

  // var status=location.state.status
  // if (status){
  //     setBtnStatus(false)
  // }
  const fetchScheduleData = async () => {
    var result = await getData("schedule/technoparvday01fetch");
    console.log(result.data);
    setData(result.data);
  };
  const getStorageData = (ADMIN, defaultValue) => {
    const savedItem = localStorage.getItem("ADMIN");
    const parsedItem = JSON.parse(savedItem);

    return parsedItem || defaultValue;
  };

  const [items, setItems] = useState(getStorageData());

  const handleClick = (rowData) => {
    if (items) {
      const feeValue = rowData.fee;

      Navigate("/RazorPay", { state: { fee: feeValue } });
    } else {
      Navigate("/RegistrationPage");
    }
  };
  useEffect(function () {
    fetchScheduleData();
  }, []);

  //   ***********************************USED FOR HANDLE SHEDULE TABLE***
  const handleNavigate01 = () => {
    Navigate("/Technoparv/TechnoparvDay02");
    setBtnStatus(false);
  };
  const handleNavigate02 = () => {
    Navigate("/Technoparv/TechnoparvDay03");
    setBtnStatus(false);
  };

  // ***************************************************************

  // ******************USED FOR Slider*************
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  // ***********************************************

  // *********************************************USED FOR GALLERY****
  var gallery = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: !matches ? 5 : 2,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  // **********************************************************************

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

  //    ****************************USED FOR PLAY IMG ON SLIDER**************

  var images = [
    "s3.jpg",
    "s5.jpg",
    "s6.jpg",
    "s7.jpg",
    "s8.jpg",
    "s1.png",
    "s4.png",
    "b1.jpg",
    "b2.jpg",
    "b3.jpg",
    "b4.jpg",
  ];
  function playImgs() {
    return image.map((item) => {
      return (
        <div>
          <img
            alt={"image"}
            src={`${serverURL}/uploaded/${item.slidepicl}`}
            style={{ width: "100%", height: !matches ? "90vh" : "35vh" }}
          ></img>
        </div>
      );
    });
  }

  function play() {
    return images.map((item) => {
      return (
        <ImageListItem key={item}>
          <a data-fancybox="gallery" href={`${serverURL}/images/${item}`}>
            <div>
              <img
                alt={"image"}
                src={`${serverURL}/images/${item}`}
                style={{
                  width: !matches ? "95%" : "100%",
                  height: !matches ? "40vh" : "30vh",
                }}
              ></img>
            </div>
          </a>
        </ImageListItem>
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
        <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Technoparv
            </Typography>
            {!matches ? (
              <>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "39%",
                    width: "100%",
                  }}
                >
                  <a>
                    <span
                      className={classes.headeritem}
                      onClick={() => Navigate("/homepage")}
                    >
                      Home
                    </span>
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
                    <span className={classes.headeritem}>Contacts</span>
                  </a>
                </Grid>
              </>
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
                  marginTop: "18%",
                  marginLeft: "6%",
                  position: "absolute",
                }}
              />
            </>
          ) : (
            <></>
          )}

          <Slider ref={slider} {...settings}>
            {playImgs()}
          </Slider>
          {!matches ? (
            <>
              <ArrowForwardIosIcon
                onClick={handleNextImg}
                style={{
                  color: "white",
                  fontSize: 35,
                  zIndex: 2,
                  marginLeft: "86%",
                  marginTop: "-25%",
                  position: "absolute",
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div id="aboutevent"></div>
        <div className={classes.ribinbg}>
          <h1 className="d-flex ribinbgtechno justify-content-center mt-4 abouth1colortechno pt-3 ">
            About Event
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "4%",
          }}
        >
          <div
            className="main-back-conttechno mt-5"
            style={{ background: "#fff", height: "50vh", padding: "4%" }}
          >
            <div className="main-conttechno">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324__480.jpg"
                className="imgtechno"
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__480.jpg"
                className="img-2techno"
                style={{ width: "28%", marginLeft: "-4%" }}
              />
              {/* <h1 className="img-heading" style={{color:"#000"}}>About Us </h1> */}
              <p className="texttechno mt-5" style={{ color: "grey" }}>
                TECHNOPARV, as it is fondly called, the technical & cultural
                festival of IPS College Of Technology and Management, Gwalior.
                It was started in 2010 by a bunch of enthusiastic IPSians. This
                year, your favourite fest is going to be more innovative, more
                exciting, more creative and more enjoying as it attracts more
                than 5,000 students from colleges and schools all over the
                INDIA. Technoparv has now snowballed to become the largest
                festival of its kind in this Region.
              </p>
            </div>
          </div>
        </div>

        {/* ************************************SCHEDULE SECTION****************************************************************** */}
        <div id="schedule" style={{ marginTop: "6%" }}></div>
        <div className={classes.ribinbg} id="schedule">
          <h1
            className="d-flex ribinbgtechno justify-content-center mt-5 abouth1colortechno pt-3 "
            id="abouth1colortechno"
          >
            Schedule
          </h1>
        </div>
        <div style={{marginTop:"5%"}}>
          <TechnoSchedule />
        </div>
        <div>
          <div id="events"> </div>
          <div className={classes.ribinbg}>
            <h1 className="d-flex justify-content-center mt-5 abouth1colortechno  pt-3  ribinbgtechno">
              {" "}
              &nbsp;&nbsp;&nbsp; Event's &nbsp; &nbsp;&nbsp;
            </h1>
          </div>

          {/* *****************************************EVENT SECTION********************************************************************* */}
          <div style={{ marginTop: "5%" }}>
            <EventCard />
          </div>
          {/* **************************************************************************************************************************** */}
        </div>
      </div>

      {/* *************************************************************************************************************************** */}
      <div id="gallery"> </div>
      <div className={classes.ribinbg}>
        <h1 className="d-flex justify-content-center mt-4 abouth1colortechno  pt-3  ribinbgtechno">
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
        <Slider {...gallery}>{play()}</Slider>
      </div>

      <div style={{ marginTop: "7%" }}>
        <hr></hr> <Footer />
      </div>
    </div>
  );
}
