import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #bc4e9c, #f80759)",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100px", // Set minimum height
        marginTop: "20px", // Add top margin
      }}
    >
      <Typography variant="body1" color="white">
        ©Copyright 2008 IPS College of Technology & Management. All rights
        reserved.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Typography variant="caption" color="white">
          Shivpuri Link Road, Gwalior, Madhya Pradesh, 474001
        </Typography>
        <Typography variant="caption" color="white">
          Phone: 9285052400, 9285032400 | Email: info@ipsgwalior.org
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Link
          href="https://www.facebook.com/ipsgocgwalior"
          underline="none"
          color={"#000"}
          target="_new"
        >
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
        </Link>

        <IconButton color="inherit">
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>

        <Link
          href="https://www.instagram.com/ipscollegegwalior?igsh=MXR1YWs2d3pzaXo3Yw=="
          underline="none"
          color={"#000"}
          target="_new"
        >
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/school/ipsgwalior/"
          underline="none"
          color={"#000"}
          target="_new"
        >
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
