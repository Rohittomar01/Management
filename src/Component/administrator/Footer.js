import { AppBar, Button, Grid, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../StyleSheets/Footer.css';

export default function Footer() {



  return (
    <div >

      <footer style={{background:"#ff5e57"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 style={{color:"#fff",fontFamily:"serif"}}>About</h4>
              <p style={{ textAlign: 'justify',color:"#fff",fontFamily:"serif" }}>Youngsters eagerly look forward for college life as it is full of fun and frolic. Live experiences of these fun activities and events are unforgettable their entire life. Life @ IPS gives them heartfelt,touching moments to share with friends and relatives. We organise various activities for our students throughout the year which not only improve their personality but also give freedom from monotonous routine of studies.</p>
            </div>
            <div className="col-md-4">
              <h4 style={{color:"#fff",fontFamily:"sans-serif"}}>Quick Links</h4>
              <ul>
                <li><a href="#" style={{color:"#fff",fontFamily:"serif"}}>Home</a></li>
                <li><a href="#" style={{color:"#fff",fontFamily:"serif"}}>Events</a></li>
                <li><a href="#" style={{color:"#fff",fontFamily:"serif"}}>About Us</a></li>
                <li><a href="#" style={{color:"#fff",fontFamily:"serif"}}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 style={{color:"#fff",fontFamily:"serif"}}>Contact Us</h4>
              <p  style={{color:"#fff",fontFamily:"serif"}}>IPS College of Technology & Management,<br /> Shivpuri Link Road Gwalior, Madhya Pradesh, 474001</p>
              <p style={{color:"#fff",fontFamily:"serif"}}>Phone: 9285052400, 9285032400</p>
              <p style={{color:"#fff",fontFamily:"serif"}}>Email: info@ipsgwalior.org</p>
            </div>

          </div>
        </div>
      </footer>
    </div>



  )

}