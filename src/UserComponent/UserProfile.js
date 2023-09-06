
// import "../../src/StyleSheets/UserProfileCss.css"

import { Paper } from "@mui/material";
import { useState } from "react";

// ******************ICONS*************************
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WcIcon from '@mui/icons-material/Wc';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import CelebrationIcon from '@mui/icons-material/Celebration';

// *******************************************************


export default function UserProfile() {


    const getUserData = (USER, defaultValue) => {
        const getData = localStorage.getItem('USER');
        const userData = JSON.parse(getData);
        return userData || defaultValue;
    }

    const [items, setItems] = useState(getUserData())

    console.log(items[0].student_name);

    return (
        <div>

            <section style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2017/03/25/03/18/white-2172682_1280.jpg")`}} >
                <div className="container py-5">
                    {/* <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">User</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-4">
                            <Paper className="card mb-4">
                                <div className="card-body text-center">
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                            className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                        <h5 className="my-3" style={{ fontFamily: "serif", fontWeight: 600, fontSize: "1.5rem" }}>{items[0].student_name}</h5>
                                    </div>



                                </div>
                            </Paper>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <div className="col-sm-12">
                                        <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700, margin: "4%", fontSize: "1.3rem" }}><CelebrationIcon /> events</p>
                                    </div>
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">https://mdbootstrap.com</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                                            <p className="mb-0">@mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="col-sm-12">
                                        <p className="mb-4" style={{ fontFamily: "serif", fontWeight: 700, fontSize: "1.3rem" }}><CelebrationIcon /> Personal Details</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><ContactEmergencyIcon /> enrollment:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_enrollment}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><BadgeIcon /> Full Name:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0" >{items[0].student_name}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><CoPresentIcon /> Father Name:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_father}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><MailIcon /> Email:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_email}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0 " style={{ fontFamily: "serif", fontWeight: 700 }}><PhoneIcon /> Phone:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_mobile}</p>
                                        </div>
                                    </div>

                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><WcIcon /> Gender:</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_gender}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><WorkspacePremiumIcon /> Course/Semester</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_course}/{items[0].student_sem}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0" style={{ fontFamily: "serif", fontWeight: 700 }}><SchoolIcon /> College</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{items[0].student_college}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}