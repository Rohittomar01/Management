import React, { useEffect } from "react";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { postData } from "../Services/ServerServices";

export default function MailVerification(props) {
    const ans = props.valid
    const email=props.mail
    console.log("getEmail",email)
    console.log(ans);

    const [verificationResult, setVerificationResult] = useState(null);
    const [userOtp, setUserOtp] = useState("")

    const handleVerification =async()=>{

        var body = {'emailaddress':email,'verified':'Yes'}
        var result = await postData('Registration/verify-user',body)
        console.log("verified usser",result.message)

    }

    const handleSubmit = (event) => {
        props.setVerifyUser(true)
        event.preventDefault();
        //   const hardcodedOTP = '123456';
        if (ans == userOtp) {
            setVerificationResult('success');
            handleVerification()
            props.setOpen(false)
            props.handleSubmitClick()
            // alert("success")
        } else {
            setVerificationResult('error');
            alert("error")
            console.log("user", userOtp)
            console.log("act", ans)
        }
    };



    const handleResend=()=>{

        props.handleEmail()
    }

    console.log("normal", props.valid)
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Enter OTP"
                variant="outlined"
                value={userOtp}
                onChange={(event) => setUserOtp(event.target.value)}
            />
            <Button onClick={handleResend} style={{textTransform:'capitalize',marginTop: 10, marginBottom: 30,marginLeft:'60%'}}>Resend OTP</Button>
            <Button style={{ marginTop: 10, marginBottom: 30,textTransform:'capitalize' }}
                
                type="submit"
                variant="text"
            //   endIcon={<SendIcon />}
            >
                Verify
            </Button>
            
            <div style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>
                {verificationResult === 'success' && (
                    <p>OTP verified successfully!</p>
                    
                )}
                {verificationResult === 'error' && (
                    <p>Incorrect OTP, please try again.</p>
                )}</div>
        </form>
    );

}