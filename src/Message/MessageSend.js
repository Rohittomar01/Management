import React, { useState } from 'react';
import { TextField, Button, Paper, Divider, Grid, TextareaAutosize } from '@mui/material';
import { LinearProgress } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { postData } from '../Services/ServerServices';
import Swal from 'sweetalert2';


export default  function MessageSend() {


    const [sub, setSub] = useState("")
    const [head, setHead] = useState("")
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    

   
    

    const handleFileSelect = (event) => {

        setSelectedFile({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })

    };
    const handleSendClick = async () => {

       
        var body = { 'sub': sub, 'head': head, 'message': message, 'file': selectedFile }

        var result = await postData("emailmessage/send-mail", body)
        // console.log("OTP", result.otp)
        // var takeotp = await result.otp
        if (result.status) {
            Swal.fire({
                icon: 'success',
                text: result.message,
            })

           
            // alert("send success")
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        handleClear()
       
        // setOtp(takeotp)
       
    }

    const handleClear = () => {
        setSub('')
        setHead('')
        setMessage('')

    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center" ,height:"90vh"}}>
                <Paper elevation={3} style={{ maxWidth: 800, height: 'auto' }}>


                    <Grid container spacing={2} style={{ padding: 30 }}>
                        <Grid item xs={12}>
                            <h1 style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 'bold' }}>Student Message Page</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                value={sub}
                                onChange={(e) => setSub(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Heading"
                                variant="outlined"
                                value={head}
                                onChange={(e) => setHead(e.target.value)}
                            /></Grid>
                        <Grid item xs={12}>
                            {/* <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            /> */}
                            <TextareaAutosize
                                aria-label="textarea"
                                placeholder="Type your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                // rowsMin={3}
                                maxRows={12}
                                style={{ width: '100%', height: '100px' }}
                            />

                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField fullWidth type="file" onChange={handleFileSelect} />
                        </Grid> */}
                        <Grid item xs={6}>
                            <Button fullWidth variant="contained" onClick={handleClear}>
                                reset
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant="contained" onClick={handleSendClick}>
                                send
                            </Button>

                        </Grid>

                    </Grid>


                </Paper>
            </div>
        </div>
    );
     
}

// export{MessageSend};
