import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Button, formLabelClasses } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./HomePageCss";
import { Grid } from "@material-ui/core";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { getData, serverURL } from "../../Services/ServerServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Swal from "sweetalert2";
import "../../StyleSheets/homepage.css";
import CountDown from "../../countdown/CountDown";
import HomePageDrawer from "../../Drawer/HomePageDrawer";
import HomeEvents from "./HomeEvents/HomeEvents";
import Zoom from "react-reveal/Zoom";
// import ClipLoader from "react-spinners/ClipLoader";
import { GridLoader } from "react-spinners";

// import { messaging } from '../../PushNotification/FireBase2';
// import { getToken } from "firebase/messaging";
import { green } from "@material-ui/core/colors";

export default function Homepage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  // const   smd= useMediaQuery(theme.breakpoints.up('375px'));

  var classes = useStyles();

  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       mobile: 0,
  //       tablet: 640,
  //       laptop: 1024,
  //       desktop: 1200,
  //     },
  //   },
  // });

  var navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [sponsor, setSponsor] = useState([]);
  const [title, setTitle] = useState([]);
  const [btnstatus, setBtnStatus] = useState(false);
  const [iconstatus, setIconStatus] = useState(false);
  const [opendrawer, setOpenDrawer] = useState(false);

  // **********************************USED FOR HANDLE DRAWER***********************************************

  const handleDrawer = () => {
    setOpenDrawer(true);
  };

  const getStorageData = (USER, defaultValue) => {
    const savedItem = localStorage.getItem("USER");
    const parsedItem = JSON.parse(savedItem);

    return parsedItem || defaultValue;
  };

  const [items, setItems] = useState(getStorageData());

  const handleUserAvatar = () => {
    if (items) {
      setBtnStatus(false);
      setIconStatus(true);
    } else {
      setBtnStatus(true);
      setIconStatus(false);
    }
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    setBtnStatus(true);
    setIconStatus(false);
    Swal.fire({
      icon: "success",
      title: "You are signOut",
    });
  };

  const [anchorEl, setAnchorEl] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const videoRef = useRef();

  // const requestPermision = async () => {
  //   const permision = await Notification.requestPermission();
  //   if (permision === "granted") {
  //     const Token = await getToken(messaging, { vapidKey: "BG6cjqdRDi5Gj070GQKQ5mZrKA8o1hH8GvPq_BAguwRtdvmUsyG-2hPCnIniSO5AnfuK3yThEhqSCl7BSz49pbc" })
  //     console.log(Token)

  //   }
  //   else if (permision === "denied") {
  //     alert("you denied notification permision")
  //   }
  // }

  const fetchSponsorImg = async () => {
    var result = await getData("index/showsponsorimg");
    // alert(result)
    console.log(result.data);
    setSponsor(result.data);
  };
  const fetchTitle = async () => {
    var result = await getData("index/fetchtitle");
    // alert(result)
    console.log(result.data);
    setTitle(result.data);
  };

  useEffect(() => {
    fetchSponsorImg();
    fetchTitle();
    handleUserAvatar();
    // requestPermision();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const fillImg = () => {
    return sponsor.map((item) => {
      return (
        <div>
          {" "}
          <Box>
            <img
              id="sponsor_img"
              alt={"sponsor logo"}
              title="sponser logo"
              src={`${serverURL}/uploaded/${item.companylogo}`}
              width="90rem"
              className="mx-5 mt-4"
            ></img>
          </Box>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <GridLoader
          color="#ff5e57"
          style={{
            marginTop: "20%",
            marginLeft: "47%",
            position: "absolute",
            zIndex: 2,
          }}
        />
      ) : (
        <>
          <HomePageDrawer open={opendrawer} setOpen={setOpenDrawer} />
          <div
            className={"classes.navcolor position-absolute z-4s"}
            style={{ width: "90%" }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
                <Toolbar variant="dense">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  ></IconButton>
                  {!matches ? (
                    <>
                      <Typography
                        id="nav_list"
                        variant="h6"
                        color="inherit"
                        component="div"
                      >
                        Evento
                      </Typography>
                    </>
                  ) : (
                    <>
                      <MenuIcon onClick={handleDrawer} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          Evento
                        </Typography>
                      </div>
                    </>
                  )}

                  <Grid
                    item
                    xs={{ matches: 1 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginLeft: { matches: "40%" },
                    }}
                    id="navbar"
                  >
                    {!matches ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            margin: "1.4%",
                            width: 550,
                          }}
                        >
                          <a style={{ textDecoration: "none" }} href="homepage">
                            <span id="nav_list" className={classes.headeritem}>
                              Home
                            </span>
                          </a>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#aboutevent"
                          >
                            <span id="nav_list" className={classes.headeritem}>
                              About
                            </span>
                          </a>
                          <a style={{ textDecoration: "none" }} href="#events">
                            <span id="nav_list" className={classes.headeritem}>
                              Events
                            </span>
                          </a>
                          <a style={{ textDecoration: "none" }} href="#sponsor">
                            <span id="nav_list" className={classes.headeritem}>
                              Sponsor
                            </span>
                          </a>
                          <a
                            style={{ textDecoration: "none" }}
                            onClick={() => navigate("/Gallery")}
                          >
                            <span id="nav_list" className={classes.headeritem}>
                              Gallery{" "}
                            </span>
                          </a>
                          <a
                            style={{ textDecoration: "none" }}
                            onClick={() => navigate("/OurTeam")}
                          >
                            <span id="nav_list" className={classes.headeritem}>
                              OurTeam{" "}
                            </span>
                          </a>
                          {btnstatus ? (
                            <>
                              {" "}
                              <a
                                style={{ textDecoration: "none" }}
                                onClick={() => navigate("/RegistrationPage")}
                              >
                                <span
                                  id="nav_list"
                                  className={classes.headeritem}
                                >
                                  Register
                                </span>
                              </a>
                              <a
                                style={{ textDecoration: "none" }}
                                onClick={() => navigate("/StudentSigninPage")}
                              >
                                <span
                                  id="nav_list"
                                  className={classes.headeritem}
                                >
                                  Login
                                </span>
                              </a>
                            </>
                          ) : (
                            <></>
                          )}{" "}
                        </div>{" "}
                      </>
                    ) : (
                      <></>
                    )}
                    {iconstatus ? (
                      <>
                        {" "}
                        <div style={{ margin: "1%" }}>
                          <AccountCircleIcon
                            // src={`${serverURL}/uploaded/${items.adminpic}`}
                            // src={"https://as1.ftcdn.net/v2/jpg/02/03/26/54/1000_F_203265470_uNAa2zAcCYXOcc4XxwF7r4uQsio6xxii.jpg"}
                            id="user_acount_icon"
                            className=""
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem onClick={() => navigate("/userprofile")}>
                              Profile
                            </MenuItem>
                            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                            {/* <MenuItem onClick={handleClose}>Dashboard</MenuItem> */}
                            <MenuItem onClick={handleLogoutClick}>
                              Logout
                            </MenuItem>
                          </Menu>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Toolbar>
              </AppBar>
            </Box>
            <div className="position- z-3 text-white  d-flex title justify-content-center">
              <h1 className="title col-12">
                {title.titlename}

                <p>coming soon....</p>
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "9%",
                marginTop: !matches ? "7%" : "",
              }}
            >
              <a style={{ textDecoration: "none" }} href={title.titlename}>
                <Button
                  variant="contained"
                  size={!matches ? "large" : "small"}
                  style={{
                    wordSpacing: "1%",
                    fontWeight: "bold",
                    background: "#ff5e57",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                >
                  Join Now
                </Button>
              </a>
            </div>
            <Zoom>
              <div>
                <CountDown />
              </div>
            </Zoom>
          </div>

          <div className="position-relative h-auto">
            <svg
              className="  maincsvg  z-3 position-absolute p-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                id="path"
                fill=" white"
                d="M0,190L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,186.7C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>

          <video autoPlay muted width="100%" loop>
            <source src="./eventvideo.mp4" type="video/webm" />
          </video>

          <div id="spacer"></div>
          <Zoom>
            <div
              className="col-12  mt-4  d-flex justify-content-center  "
              id="aboutevent"
            >
              <h1
                className="d-flex ribinbg justify-content-center abouth1color pt-3 "
                id="Allheading"
                style={{ marginTop: "4%" }}
              >
                About Event
              </h1>
            </div>
          </Zoom>

          <div className="d-flex flex-row  mb-3 flex-wrap  mt-3 ">
            <div className=" aboutcircle aboutdiv col-xl-6 mx-3   d-flex justify-content-center align-item-xl-center  ">
              {/* <Link href='./ips.mp4' target="_blank" > <Fab className="intro-banner-vdo-play-btn pinkBg" variant="circular" aria-label="add" style={{ background: "#FD8A8A", zIndex: 3, position: "absolute", marginLeft: !matches ? "32%" : "67%", marginTop: !matches ? "8%" : "27%", height: !matches ? "14%" : "8%", width: !matches ? "7%" : "18%" }}>
            <PlayArrowIcon />
          </Fab></Link> */}

              <div className="row aboutbtnposition">
                <div className="container">
                  <div
                    className="row "
                    id="btnsize"
                    style={{
                      zIndex: 3,
                      position: "absolute",
                      marginLeft: !matches ? "32%" : "66%",
                      marginTop: !matches ? "8%" : "25%",
                      height: !matches ? "" : "8%",
                      width: !matches ? "" : "20%",
                    }}
                  >
                    <a
                      href="./ips.mp4"
                      className="intro-banner-vdo-play-btn pinkBg"
                      target="_blank"
                    >
                      <i
                        class="glyphicon glyphicon-play whiteText"
                        aria-hidden="true"
                      ></i>
                      <PlayArrowIcon
                        className="playarrowicon"
                        style={{ color: "#000" }}
                      />
                      <i
                        className="glyphicon glyphicon-play whiteText"
                        aria-hidden="true"
                      ></i>
                      <span className="ripple pinkBg"></span>
                      <span className="ripple pinkBg"></span>
                      <span className="ripple pinkBg"></span>
                    </a>
                  </div>
                </div>
              </div>

              <Zoom>
                <Avatar
                  id="about_avatar_01"
                  sx={{
                    width: !matches ? 540 : 330,
                    height: !matches ? 550 : 340,
                  }}
                  src="./aboutbgimg.png"
                  className="img-fluid "
                />{" "}
              </Zoom>

              <Avatar
                id="about_avatar_02"
                sx={{
                  width: !matches ? 480 : 290,
                  height: !matches ? 480 : 300,
                  zIndex: 2,
                  position: "absolute",
                  marginTop: !matches ? 7 : 5,
                }}
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              ></Avatar>
            </div>

            <Zoom>
              <div className="col-lg-5 p">
                <h2 className='abouth2   data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="slide-out-right"'>
                  this is the summary of events
                </h2>
                <p className="aboutp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, itaque quasi quidem adipisci suscipit ab ex doloremque
                  tempora facere, vitae odit possimus magnam! Facilis dolorum
                  iste enim suscipit cum! Delectus?
                </p>
              </div>
            </Zoom>
          </div>

          <div id="spacer"></div>
          <div id="event">
            <div id="eventcolor">
              <Zoom>
                <div
                  className="mt-3  d-flex justify-content-center  "
                  id="events"
                >
                  <h1
                    className="d-flex justify-content-center mt-4 abouth1color  pt-3  ribinbg"
                    id="Allheading"
                  >
                    {" "}
                    &nbsp;&nbsp;&nbsp; Event's &nbsp; &nbsp;&nbsp;
                  </h1>
                </div>
              </Zoom>
              <div>
                <HomeEvents />
              </div>
            </div>
          </div>

          <div id="spacer"></div>
          <div id="sponsor" className="sponsor">
            <div className="sponsercolor">
              <Zoom>
                <div id="sponsor">
                  <h1
                    className="d-flex justify-content-center   mt-5"
                    style={{ fontSize: !matches ? "3.5rem" : "2rem" }}
                    id="sponsor_heading"
                  >
                    {" "}
                    Event Sponsors
                  </h1>
                </div>
              </Zoom>

              <div className="d-flex justify-content-evenly col-12 flex-wrap sponserlogo ">
                <Zoom>
                  {" "}
                  <div className="d-flex flex-row justify-content-around  flex-wrap  sponsorimg">
                    {fillImg()}
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
          <Zoom>
            <Footer />
          </Zoom>
        </>
      )}
    </div>
  );
}
