import React from "react";

import { makeStyles, Box,  Grid } from "@material-ui/core";

import chat1 from "../Images/chat1.png";
import chat2 from "../Images/chat2.png";
import chat3 from "../Images/chat3.png";
import chat4 from "../Images/chat4.png";
import chat5 from "../Images/chat5.png";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import Card from "./Utils/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background:
      "linear-gradient(to right, #860091, #662975);",
    height: "90.8vh",
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
    border: "1px solid black",
    textAlign: "center",
    "& img": {
      height: "130px"
    }
  },
  text: {
    textAlign: "center",
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
  { image: chat4, textData: "Technology" },
  { image: chat5, textData: "Technology" },
  ]
  return (
    <Box component="div" className={classes.root} id="chatbot">
      <Grid container>
        <div className={classes.cardContainer}>
          {datas.map((data, index) => (
            <Card classes={classes} cardImg={data.image} cardText={data.textData} />
          ))}

        </div>
      </Grid>
    </Box>
  );
};

export default Chatbot;
