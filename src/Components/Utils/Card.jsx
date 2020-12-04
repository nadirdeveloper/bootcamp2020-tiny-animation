import React from 'react'
// import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Card({classes,cardImg,cardText}) {
    return (
        <div className={classes.card}>
           <div className={classes.imgContainer}>
             <img src={cardImg} alt="image1"/>
           </div>
           <div className={classes.text}>
             <Typography variant="p">
             {cardText}
             </Typography>
           </div>
         </div>
    )
}
