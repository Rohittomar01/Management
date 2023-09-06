import { Grid, TextField, Button } from "@mui/material"
import { HomeTitleStyles } from "./HomeTitleCss"
import { useState } from "react";
import { postData } from "../../Services/ServerServices";
import Swal from "sweetalert2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function HomeTitle() {
    var classes = HomeTitleStyles();

    const [Title, setTitle] = useState('')
    const [DD, setDD] = useState('')
    const [Page, setPage] = useState('');

    const handleSubmitData = async () => {
        const currentDate = new Date();
        const dateString = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    
        var body = {
            'titleid': "1",
            'title': Title,
            'dt': DD,
            'updatedat': dateString,
            'updatedby': 'Admin',
            'page': Page,

        }



        let endpoint = '';

        if (Page === 'vilay') {
            endpoint = 'index/update_vilay_title';
        } else if (Page === 'technoparv') {
            endpoint = 'index/update_technoparv_title';
        } else if (Page === 'home') {
            endpoint = 'index/updated_home_title';
        }

        if (endpoint) {
            try {
                console.log('Submission Result', body);
                const result = await postData(endpoint, body);

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
            } catch (error) {
                console.error('Submission Error:', error);
            }
        } else {
            console.error('Invalid Page Value:', Page);
        }
    }

    const handleResetData = () => {

        setTitle("")
        setDD("")

    }


    const handleChange = (event) => {
        setPage(event.target.value);
    };


    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.headingStyle}>Title Interface</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>  < FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Page</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={Page}
                                label="Page*"
                                onChange={handleChange}
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={"home"}>Home</MenuItem>
                                <MenuItem value={"vilay"}>Vilay</MenuItem>
                                <MenuItem value={"technoparv"}>Technoparv</MenuItem>
                            </Select>
                            {/* <FormHelperText>Required</FormHelperText> */}
                        </FormControl></div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={Title} fullWidth onChange={(event) => setTitle(event.target.value)} variant="outlined" label="Title" type="text"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={DD} fullWidth onChange={(event) => setDD(event.target.value)} variant="outlined" type="date"></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmitData} style={{ background: "black" }} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleResetData} style={{ background: "black" }} fullWidth variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}