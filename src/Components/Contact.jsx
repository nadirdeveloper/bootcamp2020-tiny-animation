import React from "react";

import { makeStyles, Box} from "@material-ui/core";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background:
      "linear-gradient(to right, #860091, #662975)",
    height: "50.8vh",
  },
  contactHeading: {
    textAlign: "center",
    color:"#fff",
    margin:"0",
    fontWeight:"200",
    fontStyle:"italic",
  },
  contactSubHeading: {
    textAlign: "center",
    color:"#fff",
    margin:"0",
    fontWeight:"100",
  },
  contactContainer:{
    width:"100%",
    flex:1,
    marginTop:"40px"
  },
  contactBold:{
    fontWeight: "300",
  },
  contactCard: {
    // border: "1px solid black",
   
  },
  contactIconCont: {
    textAlign:"center",
    marginTop: "25%",
    marginBottom:"25%",
  },
  contactEmail: {
    color:"#fff",
    fontWeight:"400",
    fontSize:"15px",
    '&:hover': {
      background: "#662975",
   },
  },
  contactCardCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

}));

const Contact = () => {
  const classes = useStyles();

  const { keyframes, timing } = heartBeat;
  const contentCopyWriting = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
console.log(contentCopyWriting)
  return (
    <Box component="div" className={classes.root}>
      <div className={classes.contactContainer}>
      <h2 className={classes.contactHeading}>Pick my brain/cortex and let's get</h2>
       <h2 className={classes.contactSubHeading}><span className={classes.contactBold}>started</span> on your project</h2>
      <div className={classes.contactCardCont}>
      <div className={classes.contactCard}>
        <div className={classes.contactIconCont}>
          <i className="fa fa-envelope" style={{fontSize:"50px",color:"#fff"}}></i>
        </div>
        <h3 className={classes.contactEmail}>nathan@cortexcopywriter.com</h3>
      </div>
      </div>
      
      </div>
      
    </Box>
  );
};

export default Contact;
