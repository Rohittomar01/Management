import React, { useState } from "react";
import { Grid, TextField, Avatar, Button, IconButton, FormControl, InputLabel, Select, MenuItem, Tooltip } from "@mui/material";
import { Category} from "@mui/icons-material";
import { useStyles } from "./SponsorInterfaceCss";
import { postData } from "../../Services/ServerServices";
import { getData } from "../../Services/ServerServices";
import Swal from "sweetalert2";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from "react-router-dom";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';



export default function Sponsor() {
    var classes = useStyles()
    var navigate = useNavigate()

    const [Fname, setFName] = useState('')
    const [Lname, setLName] = useState('')
    const [EmailAddress, setEmailAddress] = useState('')
    const [MobileNumber, setMobileNumber] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [Comment, setComment] = useState('')
    const [Logo, setLogo] = useState({ fileName: "https://www.pngall.com/wp-content/uploads/8/Gold-Sponsor-PNG-Image.png", bytes: "" })
    const [Category, setCategory] = useState('')
    const [error, setError] = useState('')

    const handleCategoryChange = (event) => {

        setCategory(event.target.value)
    };


    const handleChange = (event) => {

        setLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })

    };
    // ******************************USED FOR ERROR CHECK*******************************************
    const handleError = (inputs, value) => {

        setError(pre => ({ ...pre, [inputs]: value }))
    }

    const validation = () => {

        var isValid = true;

        if (!Fname) {
            handleError("Fname", "Invalid Father Name")
            isValid = false

        }
        if (!Lname) {
            handleError("Lname", "Invalid Last Name")
            isValid = false;
        }
        if (!EmailAddress) {
            handleError("EmailAddress", "Invalid Emailaddress")
            isValid = false;
        }
        if (!MobileNumber) {
            handleError("MobileNumber", "Invalid Mobile Number")
            isValid = false;
        }
        if (!CompanyName) {
            handleError("CompanyName", "Invalid CompanyName")
            isValid = false;
        }
        if (!Comment) {
            handleError("Comment", "Invalid Comment")
            isValid = false;
        }
        if (!Category) {
            handleError("Category", "Invalid Category")
            isValid = false;
        }
        return isValid

    }
    // **********************************************************************************************************



    // ***************************USED FOR SUBMIT DATA*********************************************

    const handleSubmitClick = async () => {


        if (validation()) {

            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
            var formData = new FormData()

            formData.append('fname', Fname)
            formData.append('lname', Lname)
            formData.append('emailaddress', EmailAddress)
            formData.append('mobilenumber', MobileNumber)
            formData.append('companyname', CompanyName)
            formData.append('comment', Comment)
            formData.append('logo', Logo.bytes)
            formData.append('category', Category)
            formData.append('submitedat', dd)
            formData.append('updatedat', dd);
            formData.append('submitedby', "Admin")

            var result = await postData("index/sponsorsubmit", formData)
            handleResetClick();

            // *******For Alert***********
            // if (result.status) {
            //     Swal.fire({
            //         icon: 'success',
            //         title: result.message,
            //     })
            // }

            if (result.status) {

                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }
            else {

                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }
            // *****************************

        }

    }

    //   *********************************************************************************************


    const handleResetClick = () => {

        setFName("")
        setLName("")
        setEmailAddress("")
        setMobileNumber("")
        setCompanyName("")
        setComment("")

    }
    //   *********************************************************************************************

    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between",width:"100%"}}>
                                {/* <div><Avatar alt="Remy Sharp" src="https://www.pngall.com/wp-content/uploads/8/Gold-Sponsor.png" sx={{ width: 50, height: 50 }} /></div> */}

                                <div className={classes.headingStyle}>sponsor Interface</div>
                                <Tooltip title="show sponsor">
                                <span><FormatListBulletedIcon onClick={() =>navigate("/Dashboard/DisplayAllSponsor")} /></span>
                                </Tooltip>
                               
                            </div>

                            <div>
                                {/* <FormatListBulletedIcon onClick={() => navigate("/DisplayAllCompanies")} /> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Fname ? false : true} helperText={error.Fname} onFocus={() => handleError("Fname", null)} fullWidth value={Fname} onChange={(event) => setFName(event.target.value)} variant="outlined" label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Lname ? false : true} helperText={error.Lname} onFocus={() => handleError("Lname", null)} fullWidth value={Lname} onChange={(event) => setLName(event.target.value)} variant="outlined" label="Last Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.EmailAddress ? false : true} helperText={error.EmailAddress} onFocus={() => handleError("EmailAddress", null)} fullWidth value={EmailAddress} onChange={(event) => setEmailAddress(event.target.value)} variant="outlined" label="Email Address" type="email" />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField error={!error.MobileNumber ? false : true} helperText={error.MobileNumber} onFocus={() => handleError("MobileNumber", null)} fullWidth value={MobileNumber} onChange={(event) => setMobileNumber(event.target.value)} variant="outlined" label=" Mobile Number" type="text" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.CompanyName ? false : true} helperText={error.CompanyName} onFocus={() => handleError("ComapnyName", null)} fullWidth value={CompanyName} onChange={(event) => setCompanyName(event.target.value)} variant="outlined" label=" Company" type="email" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Comment ? false : true} helperText={error.Comment} onFocus={() => handleError("Comment", null)} fullWidth value={Comment} onChange={(event) => setComment(event.target.value)} variant="outlined" label=" Comment" type="email" />
                    </Grid>
                    <Grid item xs={6} >
                        <IconButton className={classes.flex} color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleChange} />
                            <PhotoCamera />
                            <Avatar alt="Remy Sharp" variant="rounded" src={Logo.fileName} />
                        </IconButton>

                        {/* <Grid item xs={6} >
                            <IconButton className={classes.flex} color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file"onChange={(event) => setLogo(event.target.value)}  />
                                <PhotoCamera />


                                <Avatar alt="Remy Sharp" variant="rounded" src={Logo.fileName} />
                            </IconButton>
                        </Grid> */}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth onChange={(event) => setCategory(event.target.value)} variant="outlined" label=" Category" type="email" />
                        {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Category}
                                label="Category"
                                onChange={handleCategoryChange}
                                // onChange={handleStateChange}
                              
                            >
                                <MenuItem value={"Choose Category..."}>Choose Category...</MenuItem>
                                {fillStates()}
                            </Select>
                            <div style={{ color: "red", padding: 11 }}></div>
                        </FormControl> */}
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmitClick} style={{ background: "black" }} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleResetClick} style={{ background: "black" }} fullWidth variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}