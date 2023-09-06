import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useLocation } from "react-router-dom";
import { ClassNames } from "@emotion/react";

export default function RazorPay() {

  const location=useLocation()

  console.log(location.state.fee)
  const [status, setStatus] = useState('')
  const fam = location.state.fee
  const options = {
    // key: 'rzp_test_1DP5mmOlF5G5ag',
    key: 'rzp_test_qPOfPOdzrtddEv',
    amount: fam * 100, //  = INR 1
    name: 'ips group of college',
    // description: 'some description',
    prefill: {
      name: "Vishal Jain",
      contact: "9174537339",
      email: "vishaljain2504@gmail.com"
    },

    image: 'http://www.ipsgwalior.org/ipsctm_journal/img/logo.png',
    handler: function (response) {
      // AddPurchaseDetails(response.razorpay_payment_id)
      // setStatus(true)
      alert(response.razorpay_payment_id)
    },
    notes: {
      address: 'some address'
    },
    theme: {
      color: '#212121',
      hide_topbar: false
    },
    //onClose:

  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    setStatus(true)

  };



  const OnlineMethod = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    setTimeout(() => {
      openPayModal()
    }, 1500)
  }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"110vh",backgroundImage:`url("https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg")`,backgroundSize:"cover",marginTop:"-3%" }}className="img-fluid">
      <div><img src="https://www.imgonline.com.ua/examples/qr-code-url.png"></img></div>
      <ContainedButton onClick={OnlineMethod}>click here for other options</ContainedButton>
    </div>
  )
}