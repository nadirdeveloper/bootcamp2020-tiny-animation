import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import avatar from "../Images/avatar.png";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background: "linear-gradient(to right, #570091, #7522b6);",
    height: "90.8vh",
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),

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
  paper2: {
    textAlign: "left",
    padding: theme.spacing(2),
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
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
      fontSize: "20px",
      margin: "35px",
    },
  },
  btnHeading: {
    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17);",
    fontSize: "28px",
    display: "inline-block",
    marginLeft: "30px",
    padding: "5px 40px",
    fontWeight: 400,
    color: "white",
    backgroundColor:"rgba(0,0,0,0.1)",
  }
}));

const About = () => {
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
    <Box component="div" className={classes.root} id="about">
      <Grid container>
        <Grid item md>
          <Paper className={classes.paper} style={{ marginTop: "160px" }}>
            <img
              src={avatar}
              alt="contentUX"
            />
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper2}>
            <Typography variant="h3" className={classes.btnHeading}>About</Typography>
            <Typography component="p">
              My copywriting and UX writing draws on abilities developed in the psychological sciences.
            </Typography>
            <Typography component="p">
              Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
