import React from "react";
import { makeStyles, Box,  Grid } from "@material-ui/core";

import chat1 from "../Images/chat1.png";
import chat2 from "../Images/chat2.png";
import chat3 from "../Images/chat3.png";
import chat4 from "../Images/chat4.png";
import chat5 from "../Images/chat5.png";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import FooterCard from "./Utils/FooterCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background:
      "linear-gradient(to right, #570091, #7522b6)",
    height: "70.8vh",
    flexDirection:"column"
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    border: "none",
    boxShadow: "none",
    color: "inherit",
    background: "inherit",
    "& h2": {
      color: "#fff",
      fontSize: "3.9rem",
      fontFamily: "Georgia,Times New Roman,Times,serif",
      marginBottom: theme.spacing(3),
    },
    "& p": {
      color: "#fff",
      fontSize: "1.1rem",
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px auto",
    flexWrap:"wrap"
  },
  card: {
    height: "190px",
    width: "170px",
    margin: "5px",
  },
  imgContainer: {
    textAlign: "center",
    "& img": {
      height: "130px"
    }
  },
  text: {
    textAlign: "center",
  },
  footerHeading:{
      textAlign: "center",
      fontSize: "20px",
      fontWeight: 200,
      marginBottom: "90px",
      marginTop:"90px",
      color:"#fff",
  },
  footerCardImg:{
      border:"1px solid white",
      borderRadius:'50%'
  },
  footerSocialContainer:{
    width:"100%",
    height:"40px",
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center"
  },
  sideBarIcon:{
    margin:"0px 5px"
  },
  sideIcon:{
    fontSize:"20px"
  },
  footerEnd:{
    paddingTop:"5px"
  },
  footerCopyright:{
    marginTop:"5px",
  },
  copyrightText:{
    textAlign: "center",
    margin:0,
    color:"#fff",
    fontWeight:"700",
  },
  footerCoder:{
    marginTop:"10px",
  },
  coderText:{
    margin:0,
    textAlign: "center",
    fontSize:"12px",
    fontWeight:"100",
    color:"#fff",
  },
}));

const Footer = () => {
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
  const datas = [{ image: chat1, textData: "Community" },
  { image: chat2, textData: "Corporate" },
  { image: chat3, textData: "Technology" },
  { image: chat4, textData: "Technology" },
  { image: chat5, textData: "Technology" },
  ]
  return (
      <>
      <Box component="div" className={classes.root} id="chatbot1">
        <h2 className={classes.footerHeading}>Based in Sydney, Australia. Available worldwide.</h2>
      <Grid container>
        <div className={classes.cardContainer}>
          {datas.map((data, index) => (
            <FooterCard key={index} classes={classes} cardImg={data.image} cardText={data.textData} />
          ))}

        </div>
      </Grid>
        <div className={classes.footerSocialContainer} >
        <div className={classes.sideBarIcon}>
          <i className="fa fa-film" style={{fontSize:"30px",color:"#fff"}}></i>
            </div>
            <div className={classes.sideBarIcon}>
          <i className="fa fa-facebook-official" style={{fontSize:"30px",color:"#fff"}}></i>
            </div>
            <div className={classes.sideBarIcon}>
          <i className="fa fa-linkedin-square" style={{fontSize:"30px",color:"#fff"}}></i>
            </div>            
        </div>
        <div className={classes.footerEnd}>
            <div className={classes.footerCopyright}>
              <p className={classes.copyrightText}>© Cortex Copywriter 2020 | ABN 341 1599 0520</p>
            </div>
            <div className={classes.footerCoder}>
              <p className={classes.coderText}>Interaction Design + Code by Nadir Ali</p>
            </div>
        </div>
    </Box>
      </>
    
  );
};

export default Footer;
