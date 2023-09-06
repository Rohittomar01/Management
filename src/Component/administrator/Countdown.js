import React, { useState, useRef, useEffect } from 'react';
import "D:/managementApp/src/StyleSheets/CountdownCss.css";

export default function Countdown(){


  const [countdown, setCountdown] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")

  console.log("days",days)


    const countDownDate = new Date("2023-04-25").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

     

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("EXPIRED");
      }
      // return () => clearInterval(interval);
    }, 1000);

   
  


  // useEffect(function () {
  
  // },[])



  return (

    <div id="html">
      <div className="wrapper">
        <div className="container text-center">
          <div className="col-md-3 col-xs-6 mt-3" style={{backgroundImage:`url("https://www.transparentpng.com/thumb/red-circle/classNameic-border-red-circle-free-png-x2X5ZG.png")`}} id="container">
            <div className="clock">
              <div className="well bottom-section">
                <div id="text" className="text" >{days} Days</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 mt-3" id="container">
            <div className="clock">
              <div className="well bottom-section">
                <div id="text" className="text">{hours} Hours</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 mt-3" id="container">
            <div className="clock">
              <div className="well bottom-section">
                <div id="text" className="text">{minutes} Minute</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 mt-3 " id="container">
            <div className="clock">
              <div className="well bottom-section">
                <div id="text" className="text">{seconds} Second</div>
              </div>
            </div>
          </div>
          <div id="info" className="small"></div>
        </div>
      </div>
    </div>


  )
};

