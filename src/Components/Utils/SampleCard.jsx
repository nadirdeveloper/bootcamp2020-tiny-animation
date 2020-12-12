import React from 'react'

export default function SampleCard({classes,data,}) {
    return (
        <div className={classes.card}>
           <div className={classes.topCardCont}>
             <img src={data.image} className={classes.topCardImg} alt="sampleImgs"/>
           </div>
           <div className={classes.bottomCardCont}>
             <div className={classes.bottomTextCont}>
                 <div className={classes.bottomCardTitle}>{data.name}</div>
                 <div className={classes.bottomCardInfo}>
                   {data.details}
                 </div>
             </div>
              <div className={classes.footerCardCont}>
                <span className={classes.footerCardLink} >{data.linkText}</span>
              </div>
           </div>
         </div>
    )
}
