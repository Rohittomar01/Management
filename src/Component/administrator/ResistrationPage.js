import { TextField, Grid } from "@mui/material";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { postData } from "../../Services/ServerServices";
import { Link } from "react-browser-router";
import { data } from "jquery";
import MailVerification from "../../Message/mailVerification";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';




export default function RegistrationPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    var navigate = useNavigate()

    const [Sname, setSname] = useState('');
    const [Fname, setFname] = useState('');
    const [Semailaddress, setSemailaddress] = useState('');
    const [Snumber, setSnumber] = useState('');
    const [Sgender, setSgender] = useState('');
    const [Scollege, setScollege] = useState('');
    const [Senrollment, setSenrollment] = useState('');
    const [Scourse, setScourse] = useState('');
    const [Ssemester, setSsemester] = useState('');
    const [Spassword, setSpassword] = useState('');
    const [Sconfirmpassword, setSconfirmpassword] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState("");
    const [open, setOpen] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState("")
    const [verifyUser,setVerifyUser]=useState(false)

    console.log("verify user",verifyUser)

    // ***************************************USED FOR CHECKS********************************************
    const handleError = (inputs, value) => {

        setError(pre => ({ ...pre, [inputs]: value }))
    }

    const Validation = () => {

        var isValid = true;
        if (!Sname) {
            handleError("Sname", "Fill Student Name")
            isValid = false

        }
        if (!Fname) {
            handleError("Fname", "Fill Father Name")
            isValid = false;
        }
        if (!Semailaddress) {
            handleError("Semailaddress", "Invalid Email Address")
            isValid = false;
        }
        if (!Snumber) {
            handleError("Snumber", "Invalid Mobile Number")
            isValid = false;
        }
        if (!Sgender) {
            handleError("Sgender", "Select Gender")
            isValid = false;
        }
        if (!Scollege) {
            handleError("Scollege", "Fill College Name")
            isValid = false;
        }
        if (!Senrollment) {
            handleError("Senrollment", "Fill Enrollment Number")
            isValid = false;
        }
        if (!Scourse) {
            handleError("Scourse", "Fill Course")
            isValid = false;
        }
        if (!Ssemester) {
            handleError("Ssemester", "select Semester")
            isValid = false;
        }
        if (!Spassword) {
            handleError("Spassword", "Fill Password")
            isValid = false;
        }
        if (!Spassword) {
            handleError("Spassword", "Fill Confirm Password")
            isValid = false;
        }
        if (Spassword !== Sconfirmpassword) {
            handleError("Sconfirmpassword", "Mismatch Confirm Password")
            isValid = false;
        }



        return isValid

    }
    // *******************************************************************************************

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(()=>{
    //     if(verifyUser== true )
    //     {
    //         handleSubmitClick()
    //     }
        
    // },[])
  
        
      
       


    // ***************************USED FOR SUBMIT DATA*********************************************
    const handleSubmitClick = async () => {
           
         if(Validation()) {

            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()


            
            var body = {
                'studentname': Sname,
                'fathername': Fname,
                'emailaddress': Semailaddress,
                'mobilenumber': Snumber,
                'college': Scollege,
                'semester': Ssemester,
                'gender': Sgender,
                'enrollment': Senrollment,
                'course': Scourse,
                'password': Spassword,
                'submitedat': dd,
                'updatedat': dd,
                'submitedby': "Admin",
                'isVerified': 'No'

            }


            console.log("fromdataaqqq", body)
            const result = await postData("registration/registration", body)
            // ******************************************************************************************************************

            alert("OTP", result.otp)
            // *******For Alert***********
            if (result.status) {
                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
          
            }

            else {
                Swal.fire({
                    icon: 'success',
                    title: "Server Error",
                })
            }
            // *****************************
        }
            // navigate("/StudentSigninPage")
        
            handleResetClick();
    }

    //   *****************************************************************************************


    // ***************************USE FOR RESET FORM*************************************************
    const handleResetClick = () => {

        setSname("")
        setFname("")
        setSemailaddress("")
        setSnumber("")
        setScollege("")
        setScourse("")
        setSenrollment("")
        setSgender("")
        setSsemester("")
        setSpassword("")
        setSconfirmpassword("")

    }
    // *************************************************************************************************

    // ***********************************USED FOR HANDLE SEMESTER CHAHNGE**************************************************
    const handleSemesterChange = (event) => {
        setSsemester(event.target.value);
    };
    // *******************************************************************************************************************
    // ***********************************USED FOR HANDLE SEMESTER CHAHNGE**************************************************
    const handleGenderChange = (event) => {
        setSgender(event.target.value);
    };
    // *******************************************************************************************************************

    const handleEmail = async() => {

    //   if(Validation())
    //   {
 
        setOpen(true)
    //   }
       
        var result = await postData('registration/getOTP',{"emailaddress":Semailaddress})
        if (result.status) {


            console.log("OTP", result.otp)
            // Wait for result.otp to be available before setting the OTP value
            const takeotp = result.otp;
            setOtp(takeotp);
            const takeEmail = result.email;
            setVerifyEmail(takeEmail)
            console.log("E-mail", takeEmail)

        }

        else {
            Swal.fire({
                icon: 'success',
                title: "Server Error",
            })
        }
        // *****************************
     
        // navigate("/StudentSigninPage")
    }

    function showRegistrationPage() {


        return (
            <div style={{ backgroundImage: `url(${"https://cdn.pixabay.com/photo/2021/11/14/07/28/background-6793549__480.jpg"})`, backgroundSize: "cover", height: !matches ? "auto" : "auto", marginTop: !matches ? "-3.4%" : "-10%" }}>

                <div className="container h-auto" >
                    <div className="row d-flex justify-content-center align-items-center h-auto ">
                        <div className="col-lg-12 col-xl-11" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="card text-black  " style={{ borderRadius: "20px", width: !matches ? "80%" : "100%", height: !matches ? "auto" : "auto", marginTop: !matches ? "5%" : "6vh", marginBottom: !matches ? "0" : "17%", zIndex: !matches ? "2" : "", position: !matches ? "absolute" : "relative", padding: !matches ? "2%" : "0", overflow: "hidden" }}>
                                <div className="card-body p-md-2 px-4 row justify-content-center" >
                                    <div className="row justify-content-center mx-4">
                                        <Grid className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1" style={{ fontFamily: "serif" }}>Registration</p>

                                            <form >
                                                <Grid container >

                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField error={!error.Sname ? false : true} helperText={error.Sname} onFocus={() => handleError("Sname", null)} fullWidth onChange={(event) => setSname(event.target.value)} value={Sname} id="student_Name" label="Student Name" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Fname ? false : true} helperText={error.Fname} onFocus={() => handleError("Fname", null)} onChange={(event) => setFname(event.target.value)} value={Fname} id="father_name" label="Father Name" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Semailaddress ? false : true} helperText={error.Semailaddress} onFocus={() => handleError("Semailaddress", null)} onChange={(event)=>setSemailaddress(event.target.value)} value={Semailaddress} id="email_address" label="Email" type="mail" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Snumber ? false : true} helperText={error.Snumber} onFocus={() => handleError("Snumber", null)} onChange={(event) => setSnumber(event.target.value)} value={Snumber} id="mobile_number" label="Mobile Number" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <div className="d-flex flex-row align-items-center mt-3">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <FormControl>

                                                                    <RadioGroup
                                                                        row
                                                                        value={Sgender}
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                        onChange={handleGenderChange}
                                                                        onClick={() => handleError("Semailaddress", null)} error={!error.Snumber ? false : true}
                                                                    >
                                                                        <div className="mt-2 "><FormLabel id="demo-column-radio-buttons-group-label ">Gender:</FormLabel></div>
                                                                        <div className="mx-3">
                                                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                        </div>
                                                                    </RadioGroup>
                                                                </FormControl>
                                                                <div style={{ color: " #C70039", fontSize: "0.8rem", marginTop: "1%" }}>{error.Sgender}</div>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Scollege ? false : true} helperText={error.Scollege} onFocus={() => handleError("Scollege", null)} onChange={(event) => setScollege(event.target.value)} value={Scollege} id="college" label="college" type="text" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1  ">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Senrollment ? false : true} helperText={error.Senrollment} onFocus={() => handleError("Senrollment", null)} onChange={(event) => setSenrollment(event.target.value)} value={Senrollment} id="enrollment" label="Enrollment" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Scourse ? false : true} helperText={error.Scourse} onFocus={() => handleError("Scourse", null)} onChange={(event) => setScourse(event.target.value)} value={Scourse} id="Course" label="Course" type="text" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                    <InputLabel id="demo-simple-select-standard-label">Semester</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-standard-label"
                                                                        id="demo-simple-select-standard"
                                                                        value={Ssemester}
                                                                        onChange={handleSemesterChange}
                                                                        label="Year"
                                                                        onFocus={() => handleError("Ssemester", null)} error={!error.Ssemester ? false : true}
                                                                    >
                                                                        {/* <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem> */}
                                                                        <MenuItem value={"1st"}>1st</MenuItem>
                                                                        <MenuItem value={"1year"}>1 year</MenuItem>
                                                                        <MenuItem value={"2nd"}>2nd</MenuItem>
                                                                        <MenuItem value={"2yearr"}>2 year</MenuItem>
                                                                        <MenuItem value={"3rd"}>3rd</MenuItem>
                                                                        <MenuItem value={"3year"}>3 year</MenuItem>
                                                                        <MenuItem value={"4th"}>4th</MenuItem>
                                                                        <MenuItem value={"5th"}>5th</MenuItem>
                                                                        <MenuItem value={"6th"}>6th</MenuItem>
                                                                        <MenuItem value={"7th"}>7th</MenuItem>
                                                                        <MenuItem value={"8th "}>8th</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                                <div style={{ color: " #C70039", fontSize: "0.8rem", marginTop: "1%" }}>{error.Ssemester}</div>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1  ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Spassword ? false : true} helperText={error.Spassword} onFocus={() => handleError("Spassword", null)} onChange={(event) => setSpassword(event.target.value)} value={Spassword} id="password" label="Password" type="password" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div className="d-flex flex-row align-items-center mb-1 ">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <TextField fullWidth error={!error.Sconfirmpassword ? false : true} helperText={error.Sconfirmpassword} onFocus={() => handleError("Sconfirmpassword", null)} onChange={(event) => setSconfirmpassword(event.target.value)} value={Sconfirmpassword} id="confirm_password" label="Confirm Password" type="password" variant="standard" />
                                                            </div>
                                                        </div>
                                                    </Grid>



                                                    <div style={{ display: "flex", flexDirection: "row", width: "100%" }} >
                                                        <div className=" d-flex justify-content-center mb-4 mt-4" style={{ marginLeft: !matches ? "0" : "-4%" }} >
                                                            <ContainedButton color="primary" onClick={handleEmail}>SignUp</ContainedButton>
                                                        </div>
                                                        <div className=" d-flex  justify-content-center mb-4 mt-4">
                                                            <ContainedButton color="primary" onClick={handleResetClick} >Reset</ContainedButton>
                                                        </div>
                                                    </div>
                                                    <div>have already have account? <Link to="/StudentSigninPage">LOGIN HERE</Link></div>
                                                </Grid>

                                            </form>


                                        </Grid>

                                        <Grid className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2" >
                                            {!matches ? <><img src="./images/regitration_point_man.webp"
                                                className="img-fluid" alt="Sample image" /></> : <><img src="./images/man-looking-down.png"
                                                    className="img-fluid" alt="Sample image" /></>}
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!matches ? <>
                    <div style={{ height: "auto", overflow: "hidden" }}>

                        <video autoPlay muted width="100%" loop >
                            <source src="./videos/resistrationbackground.mp4" type="video/webm" />
                        </video>
                        {/* https://player.vimeo.com/external/574743672.sd.mp4?s=9998061c7601ae8e8dd7b736ea11f733299b7d13&profile_id=164 */}
                    </div>
                </> : <></>}
            </div>



        )
    }

    function showDialog() {
        return (
            <div>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
               Open form dialog
             </Button> */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>OTP Verification</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div style={{ color: 'green' }}>  OTP has been send to your registered email Please Check <br></br> Enter the OTP below to verify  your email... </div>
                        </DialogContentText>
                        {/* <TextField
                   autoFocus
                   margin="dense"
                   id="name"
                   label="Email Address"
                   type="email"
                   fullWidth
                   variant="standard"
                 /> */}
                        <div style={{ marginTop: 30, width: "auto" }}>< MailVerification handleSubmitClick={handleSubmitClick}  handleEmail={handleEmail}valid={otp} mail={verifyEmail} setOtp={setOtp}  setVerifyUser={setVerifyUser} setOpen={setOpen}/></div>
                    </DialogContent>
                    <DialogActions>
                        
                        {/* <Button onClick={handleEmail}  style={{textTransform:'capitalize'}}>Resend OTP</Button>
                        <Button onClick={handleClose}>Verify</Button> */}
                        {/* <Button onClick={handleClose}>Subscribe</Button> */}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }



    return (
        <div>

            {showRegistrationPage()}
            {showDialog()}

        </div>
    )





}