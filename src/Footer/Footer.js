import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  Grid,
  ListItemIcon,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook,FaTelegram  } from "react-icons/fa";

export default function Footer() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div id="main-container-footer">
      <Grid container spacing={2}>
        <Grid item xs={matches ? 12 : 8}>
          <div id="logo">
            <img src={logo} style={{ width: 50, height: 50 }} alt="Logo" />
            <div id="logo-description">LOGO</div>
          </div>
          <div style={{flexDirection:'column',width: matches ?"auto" : "30vw",}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolores deserunt labore cupiditate voluptatibus vero eligendi velit autem, doloremque quam eos molestiae culpa nam omnis excepturi dolorem rem nemo! Ex!</div>
          <div>
            © 2024 College <a>Terms</a> <a>Privacy</a>
          </div>
        </Grid>
        <Grid item xs={matches ? 12 : 4} style={{ display: 'flex', }}>
          <div style={{ backgroundColor: '#F600D5', width: 45, height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50, cursor: 'pointer',marginLeft:20 }} >
            <FaFacebook size={24} />
          </div>
          <div style={{ backgroundColor: '#F600D5', width: 45, height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50, cursor: 'pointer',marginLeft:20 }} >
          <FaInstagram size={24} />
          </div>
          <div style={{ backgroundColor: '#F600D5', width: 45, height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50, cursor: 'pointer',marginLeft:20 }} >
            <TwitterIcon />
          </div>
          <div style={{ backgroundColor: '#F600D5', width: 45, height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50, cursor: 'pointer',marginLeft:20 }} >
          <FaTelegram size={24} />
          </div>
        </Grid>

        {/* <Grid item xs={matches ? 12 : 12}>
          <div id="contact">Contact Us</div>
          <div id="address">IPS College Of Technology & Management,</div>
          <div  id="address">Shivpuri Link Road Gwalior, Madhya Pradesh, 474001</div>
          <div id="contact-details">Phone: 9285052400, 9285032400</div>
          <div id="contact-details">E-mail: info@ipsgwalior.org</div>
        </Grid> */}

      </Grid>
    </div>
  );
}
