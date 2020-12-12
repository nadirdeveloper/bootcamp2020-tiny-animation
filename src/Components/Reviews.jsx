import React,{useState} from "react";

import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import persona1 from "../Images/reviews/persona1.svg"
import persona2 from "../Images/reviews/persona2.svg"
import persona3 from "../Images/reviews/persona3.svg"
import persona4 from "../Images/reviews/persona4.svg"
import persona5 from "../Images/reviews/persona5.svg"
import persona6 from "../Images/reviews/persona6.svg"

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import ReviewCard from "./Utils/ReviewCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(to right, #570091, #7522b6);",
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
    marginTop: "10%",
  },
  cardContainer:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap:"wrap",
  },
  card:{
    width:'550px',
    margin:"20px"
  },
  cardTopCont:{
display:"flex",
flexDirection:"row",
height:"260px"
  },
  cardBtnCont:{
    background:"rgba(0,0,0,0.8);",
    padding:"5px",
    paddingLeft:"10px",
    paddingRight:"10px",
    textAlign: "center",
    color:"#fff",
  },
  cardTestimonials:{
    padding:"30px",
    paddingTop:"15px",
    paddingBottom:"15px",
  },
  cardTestimonialsCont:{
    height:"330px",
    transition:"0.3s",
    transitionTimingFunction:"cubic-bezier(.91,.01,.2,1);",
  },
  cardImgCont:{
    width:"30%",
    backgroundColor:"rgba(255,255,255,0.4);"
  },
  cardImg:{
    height:"100%",
    width:"100%",
    // objectFit:"cover",
  },
  cardInfoCont:{
    width:"70%",
    backgroundColor:"#fff",
    padding:"20px"
  },
  cardInfoName:{
    fontWeight: "400",
    fontSize:"18px",
  },
  cardInfoJobTitle:{
    fontWeight: "400",
    fontSize:"13px",
    fontStyle:"italic",
    height:"30px"
  },
  cardInfoQuotes:{
marginTop: "1em"
  },
  cardInfoQuoteItem:{
    fontWeight:"300",
    fontSize:"30px",
    fontStyle:"italic",
    marginTop: "5px",
    marginBottom:"5px",
    letterSpacing:"-1px"
  },
  cardBottomCont:{
backgroundColor:"rgba(255,255,255,0.9);",
padding:"0px",
lineHeight:"22px",
fontSize:"18px",
fontWeight:"300",
  }

}));

const Reviews = () => {
  const classes = useStyles();
const [show, setShow] = useState(false)
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
const datas = [
  { 
    image: persona1,
    name:"Karl Van Lieshout",
    jobTitle:"Owner & Operator – Ausbeds",
    quotes:[`"..innovative"`,`"..seamless UX"`,`"..more online sales"`],
    testimonials:[`"I contacted Nathan because the innovative conversational interface and seamless user experience of his website inspired me. His perspective on my website rewrite was a huge help – Nathan gave me some great ideas that got me out of a creative slump.`,`He nailed all my briefs and produced excellent content – web copy, USP, SEO, UX, CX writing, scripted chatbot, and email marketing. Thanks to Nathan, customers compliment my new website and we’re getting more online sales."`],
  },
  { 
    image: persona2,
    name:"Rosawin Siri",
    jobTitle:"Digital Marketing Manager – 4mation Technologies",
    quotes:[`"..flexible"`,`"..nailed voice & tone"`,`"..keep on retainer"`],
    testimonials:[`"Nathan is very easy going and flexible – we meet virtually or on-site at my office. He worked hard to understand our brand voice and write content with the correct tone, personality, and word choices.`,`Nathan nailed brand voice & tone after a couple of attempts and now I keep him on retainer to write a wide range of content from web copy, blogs, and social media. His writing is so effective, it evokes almost instant action from our target audience and consistently achieves business goals."`],
  },
  { 
    image: persona3,
    name:"Craig Erskine-Smith",
    jobTitle:"CEO – Erskine Oral Care",
    quotes:[`"..wonderful ideas"`,`"..perfect tagline"`,`"..excellent wireframes"`],
    testimonials:[`"Nathan was very helpful, he produced wonderful ideas and wrote great web copy for me. He was friendly, flexible, and participated in a design sprint with my product team.`,`Nathan came up with the perfect tagline and unique value proposition for my product and we sketched out excellent wireframes that clarified my website content and functionality."`],
  },
  { 
    image: persona4,
    name:"Liam Key",
    jobTitle:"Creative Director – Imagination Pioneers Studios",
    quotes:[`"..love his passion"`,`"..heaps of depth"`,`"..speaks to my brand"`],
    testimonials:[`"I always enjoy working with Nathan, I love his passion to think and dream of big things. His writing craft is brilliant and has heaps of depth behind it. Nathan works closely with my design studio to deliver copy across a range of mediums – web development, motion graphics, 3D animation, and more.`,`The voice and tone Nathan writes with really speaks to my brand and reinforces the value of what I do. I look forward to seeing all of the interesting ideas we have discussed come to life."`],
  },
  { 
    image: persona5,
    name:"Eoin Mullins",
    jobTitle:"Director – Corbel Technologies",
    quotes:[`"..beautiful copy"`,`"..psychology edge"`,`"..emotional currents"`],
    testimonials:[`"I received consistently beautiful web copy from Nathan. His background in psychology and neuroscience gives his writing an edge.`,`Nathan can tune into the emotional currents of desire, need, and pleasure that pull customers to our products and services."`],
  },
  { 
    image: persona6,
    name:"Adrian Rodriguez Soto",
    jobTitle:"eCommerce Manager – EUX Agency",
    quotes:[`"..superior intellect"`,`"..deep psychology"`,`"..doubled conversions"`],
    testimonials:[`"Within 2 minutes of talking with Nathan, I realized I was dealing with a superior intellect. He doesn’t miss much! I was shocked by the speed, power, and precision of Nathan’s copywriting and UX writing. Nathan instinctively knows what works and what doesn’t because he has deep knowledge of consumer and behavioral psychology.`,`Nathan’s fine-tuned copy nearly doubled our website’s overall conversion rate. I can’t wait to see what he does next for our business!"`],
  },
]
  return (
    <>
    <Box component="div" className={classes.root}>
    <Typography variant="h3" className={classes.btnHeading}>Reviews</Typography>
     <Box component="div" className={classes.mainContainer}>
     <Grid container>
        <div className={classes.cardContainer}>
          {datas.map((data, index) => (
            <ReviewCard key={index} data={data} classes={classes} setShow={setShow} show={show} />
          ))}

        </div>
      </Grid>
     </Box>
    </Box>
    </>
  );
};

export default Reviews;
