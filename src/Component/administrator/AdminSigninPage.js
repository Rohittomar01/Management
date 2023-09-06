import { TextField} from "@mui/material";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postData } from "../../Services/ServerServices";



export default function SigninPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    var navigate = useNavigate()

    const [EmailAddress, setEmailAddress] = useState('')
    const [Password, setPassword] = useState('')
    const [Error, setError] = useState('')
    const handleClick = async () => {
        var body = { emailaddress: EmailAddress, password: Password }
        var result = await postData('admin/chkadminlogin', body)
        if (result.data) {
            localStorage.setItem("ADMIN", JSON.stringify(result.data))
            navigate('/Dashboard')
        }
        else {
            setError("Invalid email or Password")
        }
   
    };
   








    //   const auth=getAuth()

    //     const createUser=()=>{
    //         createUserWithEmailAndPassword(auth,email,password).then((value)=>alert(value))
    //     }


    return (
        <div style={{ background: "#eee", height: !matches ? "99.5vh" : "99.2vh", marginTop: !matches ? "-3%" : "-10%" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card text-black" style={{ borderRadius: "20px", width: "90%" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                                        {/* <Avatar className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" src="https://cdn-icons-png.flaticon.com/512/219/219986.png"></Avatar> */}
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontFamily: "serif" }}>Welcome </p>


                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField fullWidth id="user_Name" onChange={(event) => setEmailAddress(event.target.value)} label="User Name" type="email" variant="standard" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField fullWidth id="Password" onChange={(event) => setPassword(event.target.value)} label="password" type="password" variant="standard" />
                                                </div>
                                            </div>
                                            <div style={{ color: 'red', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                                {Error}
                                            </div>



                                            <div className="d-flex justify-content-center mb-2 mb-lg-4">
                                                <ContainedButton color="primary" onClick={() => handleClick()}>Sign In</ContainedButton>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}