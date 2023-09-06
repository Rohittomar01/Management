import { useState, useEffect } from 'react';
import MaterialTable from "@material-table/core"
import { Grid, Avatar, Button, Tooltip } from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { useNavigate } from "react-router-dom";
import { getData, postData, serverURL } from '../Services/ServerServices';
import {
    Dialog, DialogActions, DialogContent, DialogTitle,
    TextField,
    IconButton, MenuItem, FormControl, InputLabel, Select
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Swal from 'sweetalert2';



export default function DisplayTechnoparvSchedule() {

    var classes = TechnoparvCss()
    var navigate = useNavigate()
    const [Data1, setData1] = useState([])
    const [Data2, setData2] = useState([])
    const [Data3, setData3] = useState([])
    const [Data4, setData4] = useState([])


    const [EventName, setEventName] = useState('')
    const [Type, setType] = useState('')
    const [Venue, setVenue] = useState('')
    const [Dt, setDt] = useState('')
    const [StartTime, setStartTime] = useState('')
    const [EndTime, setEndTime] = useState('')
    const [Fee, setFee] = useState('')
    const [Coordinators, setCoordinators] = useState('')
    const [Logo, setLogo] = useState({ fileName: "./images/defaultschedule.jpeg", bytes: "" })
    const [error, setError] = useState('')
    const [Page, setPage] = useState('')
    const [Day, setDay] = useState('')
    const [ScheduleId, setScheduleId] = useState('')
    const [oldPicture, setOldPicture] = useState('')
    const [Table, setTable] = useState('')


    const [Open, setOpen] = useState('')




    const fetchScheduleData = async () => {

        var result1 = await getData("schedule/technoparvday01fetch")
        var result2 = await getData("schedule/technoparvday02fetch")
        var result3 = await getData("schedule/technoparvday03fetch")
        var result4 = await getData("schedule/technoparvday04fetch")

        setData1(result1.data)
        setData2(result2.data)
        setData3(result3.data)
        setData4(result4.data)
    };

    useEffect(function () {

        fetchScheduleData()




    }, []);
    // ******************************USED FOR ERROR CHECK*******************************************
    const handleError = (input, value) => {
        setError(pre => ({ ...pre, [input]: value }))
    }
    const validation = () => {

        var isValid = true;

        if (!EventName) {
            handleError("EventName", "Invalid Event Name")
            isValid = false

        }
        if (!Type) {
            handleError("Type", "Invalid Type")
            isValid = false;
        }
        if (!Venue) {
            handleError("Venue", "Invalid Venue")
            isValid = false;
        }
        if (!StartTime) {
            handleError("StartTime", "Invalid StartTime")
            isValid = false;
        }
        if (!EndTime) {
            handleError("EndTime", "Invalid EndTime")
            isValid = false;
        }
        if (!Fee) {
            handleError("Fee", "Invalid Fee")
            isValid = false;
        }
        if (!Dt) {
            handleError("Dt", "Invalid Date")
            isValid = false;
        }
        if (!Coordinators) {
            handleError("Coordinators", "Coordinators")
            isValid = false;
        }

        return isValid

    }
    // ***********************************************************************************************

    //  ******************************USED FOR HANDLE OPEN DIALOGBOX FOR EDIT SCHEDULE****************
    const handleOpenDialog = (rowData) => {

        setOpen(true)

        setEventName(rowData.eventname)
        setType(rowData.type)
        setDt(rowData.date)
        setVenue(rowData.venue)
        setStartTime(rowData.starttime)
        setEndTime(rowData.endtime)
        setFee(rowData.fee)
        setCoordinators(rowData.coordinators)
        setPage(rowData.page)
        setDay(rowData.day)
        setScheduleId(rowData.scheduleid)
        setLogo({ fileName: `${serverURL}/uploaded/${rowData.logo}`, bytes: "" })
        setOldPicture(rowData.logo)


        handleTable()

    };
    // ********************************************************************************************************


    // ****************************************USE FOR CLOSE DIALOGBOX*****************************************
    const handleClose = () => {
        setOpen(false)
    }
    // ********************************************************************************************************



    // ***************************************USED FOR INSERT DATA IN RIGHT TABLE ******************************
    const handleTable = () => {


        if (Page === "technoparv" && Day === "1") {
            setTable('technoparvday01')
        }
        else if (Page === "technoparv" && Day === "2") {
            setTable('technoparvday02')
        }
        else if (Page === "technoparv" && Day === "3") {
            setTable('technoparvday03')
        }
        else if (Page === "technoparv" && Day === "4") {
            setTable('technoparvday04')
        }

    }


    // **********************************************************************************************************



    // ************************************USED FOR EDIT DATA SUBMITION******************************************
    const handleEditSubmit = async () => {
        if (validation()) {
            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
            var body = {
                "eventname": EventName,
                "type": Type,
                "dt": Dt,
                "venue": Venue,
                "starttime": StartTime,
                "endtime": EndTime,
                "fee": Fee,
                "scheduleid": ScheduleId,
                "coordinators": Coordinators,
                "table": Table,
                "updatedat": dd
            }

            var result = await postData('schedule/technoparv_schedule_update', body)

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

            DisplayTechnoparvSchedule()

            // setBtnStatus(false)

        }


    };
    // **********************************************************************************************************************

    // ***************************************USED FOR DELETE SECHEDULED EVENT*************************************************

    const handleDelete = async (rowData) => {

        setScheduleId(rowData.scheduleid)
        setPage(rowData.page)
        setDay(rowData.day)
        handleTable()
        console.log(ScheduleId)
        console.log(ScheduleId)

        var body = {
            "table": Table,
            "scheduleid": ScheduleId
        }
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
                var result = await postData('schedule/technoparv_schedule_delete', body)
                Swal.fire(
                    'Deleted!',
                    'Event has been deleted.',
                    'success'

                )
            }
            fetchScheduleData()
        });

    }





    // ***********************************USED FOR HANDLEPAGECHAHNGE**************************************************
    const handlePageChange = (event) => {
        setPage(event.target.value);
    };
    // *******************************************************************************************************************


    // ***********************************USED FOR HANDLEPAGECHAHNGE**************************************************
    const handleDayChange = (event) => {
        setDay(event.target.value);
    };
    // ***********************************************************************************************************

    // **********************************USED FOR EDIT SCHEDULE*******************************************************
    const editSchedule = () => {
        return (
            <div>
                <Dialog
                    open={Open}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Schedule Edit Interface
                        </div>
                        <div>
                            <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
                        </div>
                    </DialogTitle>
                    <DialogContent >
                        <Grid container spacing={2} style={{ marginTop: 5 }}>
                            <Grid item xs={6}>
                                <div>  < FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-required-label">Page</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={Page}
                                        label="Page*"
                                        onChange={handlePageChange}

                                    >
                                        {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                        <MenuItem value={"vilay"}>vilay</MenuItem>
                                        <MenuItem value={"technoparv"}>technoparv</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Required</FormHelperText> */}
                                </FormControl></div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>  < FormControl fullWidth sx={{ m: 1, minWidth: 110 }}>
                                    <InputLabel id="demo-simple-select-required-label">Day</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={Day}
                                        label="Day*"
                                        onChange={handleDayChange}
                                    >
                                        {/* <MenuItem value="0">
                                    <em>None</em>
                                </MenuItem> */}
                                        <MenuItem value={"1"}>Day 01</MenuItem>
                                        <MenuItem value={"2"}>Day 02</MenuItem>
                                        <MenuItem value={"3"}>Day 03</MenuItem>
                                        <MenuItem value={"4"}>Day 04</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Required</FormHelperText> */}
                                </FormControl></div>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.EventName ? false : true} helperText={error.EventName} onFocus={() => handleError("EventName", null)} fullWidth value={EventName} onChange={(event) => setEventName(event.target.value)} variant="outlined" label="Event Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.Type ? false : true} helperText={error.Type} onFocus={() => handleError("Type", null)} fullWidth value={Type} onChange={(event) => setType(event.target.value)} variant="outlined" label="Type" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.Venue ? false : true} helperText={error.Venue} onFocus={() => handleError("Venue", null)} fullWidth value={Venue} onChange={(event) => setVenue(event.target.value)} variant="outlined" label="Venue" type="text" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField error={!error.Dt ? false : true} helperText={error.Dt} onFocus={() => handleError("Dt", null)} fullWidth value={Dt} onChange={(event) => setDt(event.target.value)} variant="outlined" label=" Date" type="Date" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.StartTime ? false : true} helperText={error.StartTime} onFocus={() => handleError("StartTime", null)} fullWidth value={StartTime} onChange={(event) => setStartTime(event.target.value)} variant="outlined" label="Start-Time" type="time" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.EndTime ? false : true} helperText={error.EndTime} onFocus={() => handleError("EndTime", null)} fullWidth value={EndTime} onChange={(event) => setEndTime(event.target.value)} variant="outlined" label="End-Time" type="time" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={!error.Coordinators ? false : true} helperText={error.Coordinators} onFocus={() => handleError("Coordinators", null)} fullWidth value={Coordinators} onChange={(event) => setCoordinators(event.target.value)} variant="outlined" label=" Coordinators" type="text" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField error={!error.Fee ? false : true} helperText={error.Fee} onFocus={() => handleError("Fee", null)} fullWidth value={Fee} onChange={(event) => setFee(event.target.value)} variant="outlined" label=" Fee" type="text" />
                            </Grid>
                            <Grid item xs={6} >
                                <IconButton className={classes.flex} color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />
                                    <Avatar alt="Remy Sharp" variant="rounded" src={Logo.fileName} />
                                </IconButton>
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
    // ********************************************************************************************

    function displaySchedule() {

        return (
            <div style={{ overflow: "scroll", height: "92vh", marginLeft: "4%" }}>
                <MaterialTable
                    title="Day 01"
                    columns={[
                        {
                            title: 'Event',
                            render: rowData => <div><b>{rowData.eventname}</b>/{rowData.type}</div>

                        },
                        {
                            title: 'Venue',
                            render: rowData => <div>{rowData.venue}</div>

                        },
                        {
                            title: 'Date/Timing',
                            render: rowData => <div>{rowData.date}<br></br>{rowData.starttime} to {rowData.endtime}</div>

                        },
                        {
                            title: 'Fee',
                            render: rowData => <div><span>&#8377;</span>&nbsp;{rowData.fee}</div>

                        },
                        {
                            title: 'Coordinators',
                            render: rowData => <div>{rowData.coordinators}</div>

                        },
                        {
                            title: 'picture',
                            render: rowData => <div><Avatar src={`${serverURL}/uploaded/${rowData.logo}`} styles={{ width: 100, height: 100, }} variant="rounded"></Avatar></div>

                        },
                    ]}
                    data={Data1}

                    actions={[

                        {
                            icon: 'add',
                            isFreeAction: true,
                            tooltip: 'Add schedule',
                            onClick: (event) => navigate('/Dashboard/ScheduleInterface')
                        },

                        {
                            icon: 'edit',
                            tooltip: 'Edit schedule ',
                            onClick: (event, rowData) => handleOpenDialog(rowData)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete schedule event',
                            onClick: (event, rowData) => handleDelete(rowData)
                        }
                    ]}

                />




                <div> <MaterialTable
                    title="Day 02"
                    columns={[
                        {
                            title: 'Event',
                            render: rowData => <div><b>{rowData.eventname}</b>/{rowData.type}</div>

                        },
                        {
                            title: 'Venue',
                            render: rowData => <div>{rowData.venue}</div>

                        },
                        {
                            title: 'Date/Timing',
                            render: rowData => <div>{rowData.date}<br></br>{rowData.starttime} to {rowData.endtime}</div>

                        },
                        {
                            title: 'Fee',
                            render: rowData => <div><span>&#8377;</span>&nbsp;{rowData.fee}</div>

                        },
                        {
                            title: 'Coordinators',
                            render: rowData => <div>{rowData.coordinators}</div>

                        },
                        {
                            title: 'picture',
                            render: rowData => <div><Avatar src={`${serverURL}/uploaded/${rowData.logo}`} styles={{ width: 100, height: 100, }} variant="rounded"></Avatar></div>

                        },
                    ]}
                    data={Data2}

                    actions={[

                        {
                            icon: 'add',
                            isFreeAction: true,
                            tooltip: 'Add schedule',
                            onClick: (event) => navigate('/Dashboard/ScheduleInterface')
                        },

                        {
                            icon: 'edit',
                            tooltip: 'Edit schedule ',
                            onClick: (event, rowData) => handleOpenDialog(rowData)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete schedule event',
                            onClick: (event, rowData) => handleDelete(rowData)
                        }
                    ]}

                />
                </div>



                <div>
                    <MaterialTable
                        title="Day 03"
                        columns={[
                            {
                                title: 'Event',
                                render: rowData => <div><b>{rowData.eventname}</b>/{rowData.type}</div>

                            },
                            {
                                title: 'Venue',
                                render: rowData => <div>{rowData.venue}</div>

                            },
                            {
                                title: 'Date/Timing',
                                render: rowData => <div>{rowData.date}<br></br>{rowData.starttime} to {rowData.endtime}</div>

                            },
                            {
                                title: 'Fee',
                                render: rowData => <div><span>&#8377;</span>&nbsp;{rowData.fee}</div>

                            },
                            {
                                title: 'Coordinators',
                                render: rowData => <div>{rowData.coordinators}</div>

                            },
                            {
                                title: 'picture',
                                render: rowData => <div><Avatar src={`${serverURL}/uploaded/${rowData.logo}`} styles={{ width: 100, height: 100, }} variant="rounded"></Avatar></div>

                            },
                        ]}
                        data={Data3}

                        actions={[

                            {
                                icon: 'add',
                                isFreeAction: true,
                                tooltip: 'Add schedule',
                                onClick: (event) => navigate('/Dashboard/ScheduleInterface')
                            },

                            {
                                icon: 'edit',
                                tooltip: 'Edit schedule ',
                                onClick: (event, rowData) => handleOpenDialog(rowData)
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete schedule event',
                                onClick: (event, rowData) => handleDelete(rowData)
                            }
                        ]}

                    />


                </div>
                <div>
                    <MaterialTable
                        title="Day 04"
                        columns={[
                            {
                                title: 'Event',
                                render: rowData => <div><b>{rowData.eventname}</b>/{rowData.type}</div>

                            },
                            {
                                title: 'Venue',
                                render: rowData => <div>{rowData.venue}</div>

                            },
                            {
                                title: 'Date/Timing',
                                render: rowData => <div>{rowData.date}<br></br>{rowData.starttime} to {rowData.endtime}</div>

                            },
                            {
                                title: 'Fee',
                                render: rowData => <div><span>&#8377;</span>&nbsp;{rowData.fee}</div>

                            },
                            {
                                title: 'Coordinators',
                                render: rowData => <div>{rowData.coordinators}</div>

                            },
                            {
                                title: 'picture',
                                render: rowData => <div><Avatar src={`${serverURL}/uploaded/${rowData.logo}`} styles={{ width: 100, height: 100, }} variant="rounded"></Avatar></div>

                            },
                        ]}
                        data={Data4}

                        actions={[

                            {
                                icon: 'add',
                                isFreeAction: true,
                                tooltip: 'Add schedule',
                                onClick: (event) => navigate('/Dashboard/ScheduleInterface')
                            },

                            {
                                icon: 'edit',
                                tooltip: 'Edit schedule ',
                                onClick: (event, rowData) => handleOpenDialog(rowData)
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete schedule event',
                                onClick: (event, rowData) => handleDelete(rowData)
                            }
                        ]}

                    />


                </div>

            </div >


        )
    }
    return (
        <div>
            {displaySchedule()}
            {editSchedule()}
        </div>
    )


}