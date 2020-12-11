import React from 'react'

export default function FooterCard({classes,cardImg,cardText}) {
    return (
        <div className={classes.card}>
           <div className={classes.imgContainer}>
             <img className={classes.footerCardImg} src={cardImg} alt="image1"/>
           </div>
         </div>
    )
}
