import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import contentUXImage from "../Images/contentUX.svg";

import useWebAnimations, { shakeX } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background:
      "linear-gradient(-90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "90.8vh",
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(22),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
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
}));

const ContentUX = () => {
  const classes = useStyles();

  const { keyframes, timing } = shakeX;
  const contentUX = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Box id="service" component="div" className={classes.root}>
      <Grid container>
        <Grid item md>
          <Paper className={classes.paper}>
            <Typography variant="h2">UX Writing</Typography>
            <Typography component="p">
              I develop clear and useful text in product interfaces to help
              users reach a specific goal, whether that's completing a form or
              tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to
              push notifications and tooltips
            </Typography>
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper} style={{ marginTop: "150px" }}>
            <img src={contentUXImage} ref={contentUX.ref} alt="contentUX" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentUX;
