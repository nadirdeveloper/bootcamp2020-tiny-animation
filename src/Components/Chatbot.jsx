import React from "react";

import { makeStyles, Box,  Grid, Typography } from "@material-ui/core";

import chat1 from "../Images/chat1.png";
import chat2 from "../Images/chat2.png";
import chat3 from "../Images/chat3.png";
import chat4 from "../Images/chat4.png";
import chat5 from "../Images/chat5.png";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import Card from "./Utils/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContext: "center",
    background:
      "linear-gradient(to right, #860091, #662975);",
    height: "90.8vh",
    display:"flex",
    alignItems: "center",
    flexDirection:"column"
  },
  mainContainer: {
    display: "flex",
    justifyContext: "center",
    alignItems: "center",
    height: "60.8vh",

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
    margin: "0px auto"
  },
  card: {
    border: "1px solid white",
    height: "190px",
    width: "170px",
    backgroundColor: "rgba(141, 155, 255, 0.29)",
    margin: "5px",
  },
  imgContainer: {
    textAlign: "center",
    marginTop:"10px",
    "& img": {
      height: "130px"
    }
  },
  text: {
    textAlign: "center",
    fontSize:"14px",
    color:"#fff",
  },
  btnHeading: {
    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17);",
    fontSize: "24px !important",
    display: "inline-block",
    marginLeft: "30px",
    padding: "5px 40px",
    fontWeight: 400,
    color: "white",
    backgroundColor:"rgba(0,0,0,0.1)",
    marginTop: "10%"
  }
}));

const Chatbot = () => {
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
  { image: chat4, textData: "Luxury" },
  { image: chat5, textData: "Entertainment" },
  ]
  return (
    <>
    <Box component="div" className={classes.root} id="chatbot">
    {/* <Typography variant="h3" className={classes.btnHeading}>Select avatars to switch chatbot voice & tone</Typography> */}
    <Typography variant="h3" className={classes.btnHeading}>Chatbot Voice & Tone</Typography>
    <Box component="div" className={classes.mainContainer} id="chatbot">
      <Grid container>
        <div className={classes.cardContainer}>
          {datas.map((data, index) => (
            <Card classes={classes} key={index} cardImg={data.image} cardText={data.textData} />
          ))}

        </div>
      </Grid>
    </Box>
    </Box>
      
    </>
  );
};

export default Chatbot;
