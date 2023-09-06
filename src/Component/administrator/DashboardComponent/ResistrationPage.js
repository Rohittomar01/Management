import { TextField, Grid } from "@mui/material";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Swal from "sweetalert2";
import { postData } from "../../Services/ServerServices";



export default function RegistrationPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

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



    // ***************************USED FOR SUBMIT DATA*********************************************
    const handleSubmitClick = async () => {



        if (Validation()) {

            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
            var formData = new FormData()

            formData.append('studentname', Sname)
            formData.append('fathername', Fname)
            formData.append('emailaddress', Semailaddress)
            formData.append('mobilenumber', Snumber)
            formData.append('college', Scollege)
            formData.append('semester', Ssemester)
            formData.append('gender', Sgender)
            formData.append('enrollment', Senrollment)
            formData.append('course', Scourse)
            formData.append('password', Spassword)
            formData.append('submitedat', dd);
            formData.append('updatedat', dd);
            formData.append('submitedby', "Admin")



            var result = await postData("registration/registration", formData)
            // ******************************************************************************************************************


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
            handleResetClick();
        }

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

    return (
        <div style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1371547852/photo/hello-and-welcome-written-white-lightbox-sitting-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=pyL6_mX-HMcMLQqfERrR8CDKHrnZWJItPc1QA8SRQgU="})`, height: !matches ? "auto" : "100vh", marginTop: !matches ? "-3%" : "-10%" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-70">
                    <div className="col-lg-12 col-xl-11" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card text-black " style={{ borderRadius: "20px", width: "100%", height: "auto", margin: "2%", marginTop: !matches ? "0" : "15%" }}>
                            <div className="card-body p-md-5 row justify-content-center" >
                                <div className="row justify-content-center">
                                    <Grid className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-1" style={{ fontFamily: "serif" }}>Resistration</p>

                                        <form >
                                            <Grid container >

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField error={!error.Sname ? false : true} helperText={error.Sname} onFocus={() => handleError("Sname", null)} fullWidth onChange={(event) => setSname(event.target.value)} value={Sname} id="student_Name" label="Student Name" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Fname ? false : true} helperText={error.Fname} onFocus={() => handleError("Fname", null)} onChange={(event) => setFname(event.target.value)} value={Fname} id="father_name" label="Father Name" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Semailaddress ? false : true} helperText={error.Semailaddress} onFocus={() => handleError("Semailaddress", null)} onChange={(event) => setSemailaddress(event.target.value)} value={Semailaddress} id="email_address" label="Email" type="mail" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Snumber ? false : true} helperText={error.Snumber} onFocus={() => handleError("Snumber", null)} onChange={(event) => setSnumber(event.target.value)} value={Snumber} id="mobile_number" label="Mobile Number" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    onChange={handleGenderChange}
                                                                    onClick={() => handleError("Semailaddress", null)} error={!error.Snumber ? false : true}
                                                                >
                                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <div style={{ color: " #C70039", fontSize: "0.8rem", marginTop: "1%" }}>{error.Sgender}</div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Scollege ? false : true} helperText={error.Scollege} onFocus={() => handleError("Scollege", null)} onChange={(event) => setScollege(event.target.value)} value={Scollege} id="college" label="college" type="text" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Senrollment ? false : true} helperText={error.Senrollment} onFocus={() => handleError("Senrollment", null)} onChange={(event) => setSenrollment(event.target.value)} value={Senrollment} id="enrollment" label="Enrollment" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Scourse ? false : true} helperText={error.Scourse} onFocus={() => handleError("Scourse", null)} onChange={(event) => setScourse(event.target.value)} value={Scourse} id="Course" label="Course" type="text" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                <InputLabel id="demo-simple-select-standard-label">Semester</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-standard-label"
                                                                    id="demo-simple-select-standard"
                                                                    // value={age}
                                                                    onChange={handleSemesterChange}
                                                                    label="Year"
                                                                    onFocus={() => handleError("Ssemester", null)} error={!error.Ssemester ? false : true}
                                                                >
                                                                    {/* <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem> */}
                                                                    <MenuItem value={"1"}>1st</MenuItem>
                                                                    <MenuItem value={"2"}>2nd</MenuItem>
                                                                    <MenuItem value={"3"}>3rd</MenuItem>
                                                                    <MenuItem value={"4"}>4th</MenuItem>
                                                                    <MenuItem value={"5"}>5th</MenuItem>
                                                                    <MenuItem value={"6"}>6th</MenuItem>
                                                                    <MenuItem value={"7"}>7th</MenuItem>
                                                                    <MenuItem value={"8"}>8th</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                            <div style={{ color: " #C70039", fontSize: "0.8rem", marginTop: "1%" }}>{error.Ssemester}</div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Spassword ? false : true} helperText={error.Spassword} onFocus={() => handleError("Spassword", null)} onChange={(event) => setSpassword(event.target.value)} value={Spassword} id="password" label="Password" type="password" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField fullWidth error={!error.Sconfirmpassword ? false : true} helperText={error.Sconfirmpassword} onFocus={() => handleError("Sconfirmpassword", null)} onChange={(event) => setSconfirmpassword(event.target.value)} value={Sconfirmpassword} id="confirm_password" label="Confirm Password" type="password" variant="standard" />
                                                        </div>
                                                    </div>
                                                </Grid>



                                                <div style={{ display: "flex", flexDirection: "row", width: "100%" }} >
                                                    <div className=" d-flex justify-content-center  mb-lg-2 mt-4" >
                                                        <ContainedButton color="primary" onClick={handleSubmitClick}>SignUp</ContainedButton>
                                                    </div>
                                                    <div className=" d-flex justify-content-center  mb-lg-2 mt-4">
                                                        <ContainedButton color="primary" onClick={handleResetClick} >Reset</ContainedButton>
                                                    </div>
                                                </div>

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
        </div>



    )
}