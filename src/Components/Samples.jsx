import React from "react";

import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import digital1 from "../Images/samples/digital1.jpg"
import digital2 from "../Images/samples/digital2.jpg"
import digital3 from "../Images/samples/digital3.jpg"
import digital4 from "../Images/samples/digital4.jpg"
import digital5 from "../Images/samples/digital5.jpg"
import useful1 from "../Images/samples/useful1.jpg"
import useful2 from "../Images/samples/useful2.jpg"
import useful3 from "../Images/samples/useful3.jpg"


import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import SampleCard from "./Utils/SampleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(-90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    minHeight: "90.8vh",
    flexDirection: "column",
    alignItems: "center"
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
    marginTop: "5%",
  },
  btnSubHeading: {
    fontSize: "24px !important",
    display: "inline-block",
    marginLeft: "30px",
    padding: "5px 40px",
    fontWeight: 400,
    color: "white",
    marginTop: "4%",
    marginBottom: "4%",

  },
  cardContainer:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap:"wrap",
  },
 card:{
   width:"300px",
   height:"440px",
   backgroundColor:"#fff",
   margin:'10px'
 },
 topCardCont: {
   width:"100%",
   height:'170px',
 },
 topCardImg: {
  width:'100%',
  height:'100%',
 },
 bottomCardCont:{
 },
 bottomTextCont:{
  height:"200px",
  width:"100%",
 },
 bottomCardTitle:{
height:"50px",
width:'100%',
display:"flex",
alignItems:"flex-end",
paddingLeft:"20px",
fontWeight:"700",
fontSize:"14px"
 },
 bottomCardInfo:{
width:"100%",
height:"150px",
fontSize:"12px",
padding:'20px',
 },
 footerCardCont:{
width:'100%',
height:"80px",
padding:'15px',
display: "flex",
 },
 footerCardLink:{
fontSize:"14px",
fontWeight:"500",
color:"rgb(46, 102, 168)",
padding:"10px",

 },
}));

const Samples = () => {
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
const datas = {
  usefulUx:[
  {
    name:"Scripted Chatbot",
    details:"Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range.",
    linkText:"Case Study" ,
    image: useful1,
  },
  {
    name:"User Onboarding",
    details:"Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguity.",
    linkText:"See More",
    image: useful2,
  },
  {
    name:"Product Development",
    details:"As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more.",
    linkText:"Case study coming in 2020",
    image: useful3,
  },

  ],
  digitalCopy:[
    {
    name:"Rebranding Campaign",
    details:"I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.",
    linkText:"Case Study",
    image: digital1,
  },
  {
    name:"Facebook Ads",
    details:"I’ve lost count of how many Facebook ads I’ve written. My general strategy for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and shows empathy. Check out some of my recent ads.",
    linkText:"See more",
    image: digital2,
  },
  {
    name:"Explainer Video",
    details:"Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%.",
    linkText:"See more",
    image: digital3,
  },
  {
    name:"YouTube Ad",
    details:"Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I wrote, storyboarded, and directed. The ad ran for 30 days and yielded 19 conversions, with a 67% view rate.",
    linkText:"See more",
    image: digital4,
  },
  {
    name:"Pilot Screenplay",
    details:"Screenwriting is one of my specialties. My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia.",
    linkText:"Award here",
    image: digital5,
  },
],
}
  return (
    <>
    <Box component="div" id="samples" className={classes.root}>
    <Typography variant="h3" className={classes.btnHeading}>Samples</Typography>
    <Typography variant="h3" className={classes.btnSubHeading}>Useful UX</Typography>
     <Box component="div" className={classes.mainContainer}>
     <Grid container>
        <div className={classes.cardContainer}>
{datas.usefulUx.map((data,i)=>(
  <SampleCard classes={classes} data={data} />
))}
        </div>
      </Grid>
     </Box>
     <Typography variant="h3" className={classes.btnSubHeading}>Digital Copy</Typography>
     <Box component="div" className={classes.mainContainer}>
     <Grid container>
        <div className={classes.cardContainer}>
        {datas.digitalCopy.map((data,i)=>(
  <SampleCard classes={classes} data={data} />
))}

        </div>
      </Grid>
     </Box>
    </Box>
    </>
  );
};

export default Samples;
