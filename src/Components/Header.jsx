import React from "react";

import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";

import sharpImg from "../Images/Intro_Featured_Image_Empty.svg";
import brainImg from "../Images/Brain.svg";

import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    height: "90.8vh",
    marginTop: "60px",
  },
  sharp: {
    marginTop: "-28rem",
  },
  leftSide: {
    margin: "120px",
    width: "60%",
    height: "350px",
    color: "#fff",
    padding: "40px",
    "& h4": {
      fontSize: "3.125rem",
    },
    "& p": {
      fontSize: "1.1rem",
      padding: "0px",
      marginBottom: "12px",
    },
    "& button": {
      cursor: "pointer",
      background:
        "linear-gradient(to bottom, #23ffdb, #1b5dbf);",
      fontSize: "14px",
      marginLeft: "0px",
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "25px",
      padding: "15px 41px",
      border:"none",

    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(40px)",
    },
    timing: {
      duration: 2000, 
      iterations: Infinity, 
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <Box component="section" className={classes.root}>
      
      <Box component="div" className={classes.leftSide}>
        <Typography variant="h1">CORTEX</Typography>
        <Typography variant="h4">COPYWRITTER</Typography>
        <p>Enhance your communications with psychology-based copywriting and UX writing</p>
        <button>Send a message</button>
      </Box>
      <Box component="div">
        <img src={brainImg} ref={header.ref} alt="brain" height="500px" />
        <img
          src={sharpImg}
          alt="sharp"
          height="500px"
          className={classes.sharp}
        />
      </Box>
    </Box>
  );
};

export default withStyles(useStyles)(Header);
