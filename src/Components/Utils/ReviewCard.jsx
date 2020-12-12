import React from 'react'

export default function ReviewCard({classes,data,show,setShow}) {
    return (
        <div className={classes.card}>
            <div className={classes.cardTopCont}>
              <div className={classes.cardImgCont}>
                <img src={data.image} className={classes.cardImg} alt="cardImg"></img>
              </div>
              <div className={classes.cardInfoCont}>
                <div className={classes.cardInfoName}>
                  {data.name}
                </div>
                <div className={classes.cardInfoJobTitle}>
                  {data.jobTitle}
                </div>
                <div className={classes.cardInfoQuotes}>
                  {data.quotes.map((quote,i)=>(
                    <div key={i} className={classes.cardInfoQuoteItem}>
                      {quote}
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
            <div className={classes.cardBottomCont}>
            <div onClick={()=> setShow(!show)} className={classes.cardBtnCont}>
            {show?"Hide full testimonial":"Show full testimonial"}
</div>
{
  show && <div className={classes.cardTestimonialsCont}>
  <div className={classes.cardTestimonials}>
  <div className={classes.cardTestItem}>
    {data.testimonials.map((testimonial,i)=>(
      <p className={classes.cardTestimonial}>{testimonial}</p>
      ))}
  </div>
  </div>
  </div>
  
}

            </div>
           
         </div>
    )
}
