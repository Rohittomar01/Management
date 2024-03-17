import React from "react";
import { useState, useEffect } from "react";
import { getData, serverURL } from "../../../Services/ServerServices";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Paper, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../StyleSheets/GalleryCss.css"
import { useStyles } from "../HomePageCss";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';



export default function Gallery() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  var classes = useStyles()
  const [slider, setSlider] = useState([])
  const [fill, setFill] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false);


  const fetchImg = async () => {
    var result = await getData('gallery/gallery')
    console.log(result.data)
    setSlider(result.data)

  }

  useEffect(() => {
    fetchImg();
  }, [])

  const fillImg = () => {
    return slider.map((i) => {
      return (<Carousel.Item interval={1500}><img src={`${serverURL}/uploaded/${i.picture}`} alt='Event Images' style={{ width: '100%', height: !matches ? "92vh" : "55vh" }} /></Carousel.Item>)
    })
  }



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay:true,
  //   autoplaySpeed:2000,
  //   arrow:true
  // };

  return (
    <div>


      <Box sx={{ flexGrow: 1, }}>
        <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Eventos
            </Typography>
            <Grid xs={6} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "55%" }}>

              {!matches ? <><div style={{ margin: "auto", width: 450, display: "flex", justifyContent: "space-evenly" }}>
                <a style={{ textDecoration: "none" }} href="homepage"><span className={classes.headeritem}>Home</span></a>
                <a style={{ textDecoration: "none" }} href="#technoparv"><span className={classes.headeritem}>Technoparv</span></a>
                <a style={{ textDecoration: "none" }} href="#vilay"><span className={classes.headeritem}>Vilay</span></a>
                <a style={{ textDecoration: "none" }} href="ibtida"><span className={classes.headeritem}>Ibtida</span></a>
                <a style={{ textDecoration: "none" }} href="#adeiu"><span className={classes.headeritem}> Adeiu</span></a>
              </div></> : <>  <a href="homepage" ><HomeIcon style={{ color: "#fff" }} /></a></>}


            </Grid>
          </Toolbar>

        </AppBar>
      </Box>
      <div style={{ marginTop: '3.9%' }}>


        {/*   
         <Slider {...settings}>
     
          {fillImg()}
     
      
          </Slider> */}


        <Carousel indicators={false}>

          {/* <img
          className="d-block "
          src="/images/4.jpg"
          style={{height:'500px',width:'100%'}}
          alt="First slide"
        /> */}
          {fillImg()}

        </Carousel>
      </div>
      {/* <!-----------------------------------Slider End------------------------------>
<!----------------Heading section--------------------> */}
      <div id='technoparv'></div>
      <div className="col-12  mt-5  d-flex justify-content-center  " >
        <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >Technoparv</h1>
      </div>
      {/* <!-----------------------------------Gallery Start------------------------------> */}
      <div className="container12">
        {/* <!-- <div className="box">
    <a href="/events/getimg2k17"><img src="/images/3.jpg"></a>
    <span>2017</span>
  </div> --> */}
        <div className="boxs" >
          <a href="/Gallery2018"> <img src="/images/3.jpg" /></a>
          <span>2018</span>
        </div>
        <div className="boxs">
          <a href="/Gallery2019">  <img src="/images/5.jpg" /></a>
          <span>2019</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getimg2k20">  <img src="/images/6.jpg" /></a>
          <span>2020</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getimg2k21">  <img src="/images/7.jpg" /></a>
          <span>2021</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getimg2k22">  <img src="/images/8.jpg" /></a>
          <span>2022</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getimg2k23"><img src="/images/2.jpg" /></a>
          <span>2023</span>

        </div>
        {/* <!-- <div className="box">
    <a href="#"><img src="/images/2.jpg"/></a>
    <span>2024</span>
    
  </div> --> */}
      </div>







      {/* <!----------------Second Heading section--------------------> */}
      <div id='vilay'></div>
      <div className="col-12   d-flex justify-content-center  " >
        <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >&nbsp;&nbsp;Vilay&nbsp;&nbsp;</h1>
      </div>
      {/* <!-----------------------------------Gallery Start------------------------------> */}
      <div className="container12">

        {/* <!-- <div className="box">
    <a href="#"><img src="/images/10.jpg"></a>
    <span>2017</span>
  </div> --> */}
        <div className="boxs">
          <a href="/fetch/getvimg2k18"> <img src="/images/11.jpg" /></a>
          <span>2018</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getvimg2k19">  <img src="/images/12.jpg" /></a>
          <span>2019</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getvimg2k20">  <img src="/images/13.jpg" /></a>
          <span>2020</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getvimg2k21">  <img src="/images/14.jpg" /></a>
          <span>2021</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getvimg2k22">  <img src="/images/16.jpg" /></a>
          <span>2022</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getvimg2k23"><img src="/images/9.jpg" /></a>
          <span>2023</span>
        </div>

      </div>


      {/* <!----------------Third Heading section--------------------> */}
      <div id='ibtida'></div>
      <div className="col-12    d-flex justify-content-center  " >
        <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >&nbsp;&nbsp;Ibtida&nbsp;&nbsp;</h1>
      </div>
      {/* <!-----------------------------------Gallery Start------------------------------> */}
      <div className="container12">

        {/* <!-- <div className="box">
    <a href="#"><img src="/images/18.jpg"></a>
    <span>2017</span>
  </div> --> */}
        <div className="boxs">
          <a href="/fetch/getiimg2k18"> <img src="/images/19.jpg" /></a>
          <span>2018</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getiimg2k19">  <img src="/images/20.jpg" /></a>
          <span>2019</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getiimg2k20">  <img src="/images/21.jpg" /></a>
          <span>2020</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getiimg2k21">  <img src="/images/25.jpg" /></a>
          <span>2021</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getiimg2k22">  <img src="/images/30.jpg" /></a>
          <span>2022</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getiimg2k23"><img src="/images/17.jpg" /></a>
          <span>2023</span>
        </div>

      </div>


      {/* <!----------------Fourth Heading section--------------------> */}
      <div id="adeiu"> </div>
      <div className="col-12    d-flex justify-content-center  " >
        <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >&nbsp;&nbsp;Adeiu&nbsp;&nbsp;</h1>
      </div>
      {/* <!-----------------------------------Gallery Start------------------------------> */}


      <div className="container12">

        {/* <!-- <div className="box">
    <a href="#"><img src="/images/5.jpg"></a>
    <span>2017</span>
  </div> --> */}
        <div className="boxs">
          <a href="/fetch/getaimg2k18"> <img src="/images/27.jpg" /></a>
          <span>2018</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getaimg2k19">  <img src="/images/24.jpg" /></a>
          <span>2019</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getaimg2k20">  <img src="/images/29.jpg" /></a>
          <span>2020</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getaimg2k21">  <img src="/images/6.jpg" /></a>
          <span>2021</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getaimg2k22">  <img src="/images/8.jpg" /></a>
          <span>2022</span>
        </div>
        <div className="boxs">
          <a href="/fetch/getaimg2k23"><img src="/images/4.jpg" /></a>
          <span>2023</span>
        </div>

      </div>


      {/* <!---------------------FOOTER SECTION --------------------> */}
      <div id="footer">
        <div className="container">
          <div className="row ">
            &copy; 2014 www.IpsGwalior.Org | All Right Reserved

          </div>

        </div>

      </div>
    </div>
  )
}