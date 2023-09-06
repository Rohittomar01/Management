import { makeStyles } from "@mui/styles";

export const TechnoparvCss = makeStyles({

  schedulePaper: {
    fontSize: "1.2rem",
    fontWeight: 700,
    // color:"#ffff",
    fontFamily: "sans-serif",
    textTransform:'capitalize',
   
  },
  eventCard: {
    fontSize: "1.3rem",
    color: "#ffff",
    fontWeight: 600,
    padding: "5%",
    borderRadius: "0 0 8% 8%",
    fontFamily: "sans-serif",
    width: "100%",
    '&:hover': {
      background: 'rgba(1,1,1,0.3)',
      width: '100%',
      borderRadius: 10
      

    }

  },

  headeritem: {

    fontSize: "1.2rem",
    fontFamily: "serif",
    textDecoration: "None",
    cursor: "pointer",
    color: "#ffff",



  },
  schedulelistbutton: {

    fontSize: "1rem",
    fontWeight: 700,
    // color:"#ffff",
    fontFamily: "sans-serif"

  },
  // schedulelistbuttonstyle: {
  //   marginTop:"50%",
  //   width: 130,
  //   height: 40, margin: 20,
  //   alignItems: "center",
  //   display: "flex",
  //   justifyItems: "center",
  //   justifyContent: "center",
  //   cursor: "pointer"
  // },


  ribinbg: {
    backgroundImage: 'https://www.svgheart.com/wp-content/uploads/2021/11/text-divider-decorative-frame-decoration-free-svg-file-SvgHeart.Com.png',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "6rem",
    marginTop: "4%",
    display: "flex",
    justifyContent: "center"


  }





})