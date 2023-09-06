// import MaterialTable from "@material-table/core";
import MaterialTable from "@material-table/core";
import {
    Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle,

    TextField,
    Grid,
    IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { serverURL, getData } from "../../Services/ServerServices";
import { useStylesTable } from "./DisplayAllSponsorCss";
import SponsorForm from "./SponsorIterface";
import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Swal from "sweetalert2";
import { postData } from "../../Services/ServerServices";
import { Category } from "@mui/icons-material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';



export default function DisplayAllSponsor() {
    var navigate = useNavigate()
    const [sponsor, setSponsor] = useState([])
    const [Fname, setFName] = useState('')
    const [Lname, setLName] = useState('')
    const [EmailAddress, setEmailAddress] = useState('')
    const [MobileNumber, setMobileNumber] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [Sponsor, setSponsorId] = useState('');
    const [oldPicture, setOldPicture] = useState('');
    const [Comment, setComment] = useState('')
    const [Category, setCategory] = useState('')
    const [btnStatus, setBtnStatus] = useState(false);
    const [message, setMessage] = useState('')
    const [Logo, setLogo] = useState({ fileName: "https://www.pngall.com/wp-content/uploads/8/Gold-Sponsor-PNG-Image.png", bytes: "" })

    // **********************For show edit dialogbox*************************
    const [open, setOpen] = useState(false);
    // **************************************************************************


    // ********************USED FOR fetchAllSponsor *****************************
    const fetchAllSponsor = async () => {

        var result = await getData("index/showsponsor")
        console.log(result.data)
        setSponsor(result.data)
    };
    // *****************************************************************************




    const handleClose = () => {
        setOpen(false)
    }

    useEffect(function () {

        fetchAllSponsor()

    }, []);


    var classes = useStylesTable();




    const handleOpenDialog = (rowData) => {

        setOpen(true)

        setFName(rowData.firstname)
        setLName(rowData.lastname)
        setEmailAddress(rowData.emailaddress)
        setMobileNumber(rowData.mobilenumber)
        setCompanyName(rowData.company)
        setComment(rowData.comment)
        setCategory(rowData.category)
        setSponsorId(rowData.sponsorid)
        setLogo({ fileName: `${serverURL}/uploaded/${rowData.companylogo}`, bytes: "" })
        setOldPicture(rowData.companylogo)

    };

    const handleEditSubmit = async () => {
        var cd = new Date();
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
        var body = {
            "fname": Fname,
            "lname": Lname,
            "emailaddress": EmailAddress,
            "mobilenumber": MobileNumber,
            "companyname": CompanyName,
            "comment": Comment,
            "category": Category,
            "submitedat": dd,
            "updatedat": dd,
            "submitedby": "ADMIN",
            "sponsorid": Sponsor
        }

        var result = await postData('index/sponsorupdate', body)

        if (result.status) {
            setOpen(false)
            Swal.fire({
                icon: 'success',
                title: result.message,
            })
        }
        else {
            setOpen(false)
            Swal.fire({
                icon: 'success',
                title: result.message,
            })
        }

        DisplayAllSponsor()
        setBtnStatus(false)


    };

    const handleImageChange = (event) => {

        setLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
        PictureBtn()
        setBtnStatus(true)
    }

    const handlePicCancle = () => {

        setLogo({ fileName: `${serverURL}/uploaded/${oldPicture}`, bytes: "" })
        setOldPicture("")
        setBtnStatus(false)
        setMessage("")
    };

    const PictureBtn = () => {
        return (
            <div>
                {btnStatus ? <div style={{ display: "flex" }}>
                    <Button onClick={handlePicSave}>save</Button>
                    <Button onClick={handlePicCancle}>cancle</Button>
                </div> : <><img src={`${message}`}></img></>}
            </div>
        );
    }
    const handlePicSave = async () => {

        var formData = new FormData()

        formData.append("sponsorid", Sponsor)
        formData.append("logo", Logo.bytes)

        var result = await postData("index/sponsorimgupdate", formData)
      
        if (result.status) {

            setMessage('assets/tick.gif')

        }
        else {
            setMessage('')

        }

        DisplayAllSponsor()

        setBtnStatus(false)

    };

    const handleDelete = async (rowData) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var result = await postData('index/delete_sponsor_detail', { sponsorid: rowData.sponsorid })
                Swal.fire(
                    'Deleted!',
                    'Sponsor has been deleted.',
                    'success'
                )
            }
            fetchAllSponsor()
        })

    }


    const showSponsorDetails = () => {
        return (
            <div>
                <Dialog

                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/assets/logo.png" width="40" />
                            Sponsors List
                           

                        </div>
                        <div>
                            <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
                        </div>
                    </DialogTitle>
                    <DialogContent >
                        <Grid container spacing={2} style={{ marginTop: 5 }}>
                            <Grid item xs={6}>
                                <TextField value={Fname} onChange={(event) => setFName(event.target.value)} fullWidth label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={Lname} onChange={(event) => setLName(event.target.value)} fullWidth label="Last Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={EmailAddress} fullWidth onChange={(event) => setEmailAddress(event.target.value)} label="Email Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={MobileNumber} onChange={(event) => setMobileNumber(event.target.value)} fullWidth label="Mobile Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={CompanyName} onChange={(event) => setCompanyName(event.target.value)} fullWidth label="Company Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={Comment} onChange={(event) => setComment(event.target.value)} fullWidth label="Comment" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={Category} onChange={(event) => setCategory(event.target.value)} fullWidth label="Comment" variant="outlined" />
                            </Grid>

                            <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
                                <IconButton
                                    fullWidth
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                    <PhotoCamera />
                                </IconButton>

                                <Avatar
                                    alt="Remy Sharp"
                                    variant="rounded"
                                    src={Logo.fileName}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <PictureBtn />

                            </Grid>
                        </Grid>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditSubmit} >Edit</Button>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    function showAllSponsor() {
        return (
            <MaterialTable
                title="Sponsor List"
                columns={[
                    {
                        title: 'Name',
                        render: rowData => <div>{rowData.firstname}&nbsp;{rowData.lastname}</div>

                    },

                    {
                        title: 'Contact Details',

                        render: rowData => <div>{rowData.emailaddress}<br />{rowData.mobilenumber}</div>
                    },
                    { title: 'Category', field: 'category', },
                    {
                        title: 'last Updation',

                        render: rowData => <div>{rowData.submitedat}<br />{rowData.updatedate}<br />{rowData.updatedby}</div>
                    },
                    {
                        title: 'Logo',

                        render: rowData => <div> <Avatar src={`${serverURL}/uploaded/${rowData.companylogo}`} styles={{ width: 70, height: 70, }} variant="rounded"></Avatar><b>{rowData.company}</b><br /></div>
                    }

                ]}
                data={sponsor}

                actions={[

                    {
                        icon: 'add',
                        isFreeAction: true,
                        tooltip: 'Add sponsor',
                        onClick: (event) => navigate('/Dashboard/sponsor')
                    },

                    {
                        icon: 'edit',
                        tooltip: 'Edit Sponsor ',
                        onClick: (event, rowData) => handleOpenDialog(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Sponsor',
                        onClick: (event, rowData) => handleDelete(rowData)
                    }
                ]}

            />



        )
    }
    // **************it return use for return viewfunction(HOC)********************
    return (

        <div className={classes.mainContainer}>
            <div className={classes.boxtable}>
                {showAllSponsor()}
                {showSponsorDetails()}
            </div>
        </div>
    )





}