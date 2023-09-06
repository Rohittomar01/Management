import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Grid } from '@mui/material';
import { DropzoneArea } from 'react-mui-dropzone';
import Swal from 'sweetalert2';
import { postData } from '../../Services/ServerServices';

export default function InsertSliderImage() {
    const [value, setValue] = useState('')
    const [image, setImage]=useState('')
    const [event, setEvent] = useState('');
    const [isDropzoneOpen, setIsDropzoneOpen] = useState(false);

    const events = ['Technoparv', 'Vilay', 'Ibtida', 'Adeiu','Gallery'];

   

    const handleEventChange = (event) => {
        const setEventsValue = event.target.value
        setEvent(setEventsValue)
        setIsDropzoneOpen(true);
        if(setEventsValue === "Technoparv")
        {
            setValue('technoparvcarousel')
        }
        else  if(setEventsValue === "Vilay")
        {
            setValue('vilayCarousel')
        }
        else  if(setEventsValue === "Ibtida")
        {
            setValue('ibtidaslider')
        }
        else  if(setEventsValue === "Adeiu")
        {
            setValue('adeiuslider')
        }
        else  if(setEventsValue === "Gallery")
        {
            setValue('gallerycasrousel')
        }
        
    };

      

   
      
    const handleSubmit = async () => {

        var cd = new Date();
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
        var formData = new FormData()
       
        image.map((item, i) => {
            
            formData.append('picture' + i, item)
        })
        
        formData.append('table',value)
        formData.append('submitedat',dd)
        formData.append('updatedat',dd)
        formData.append('submitedby',"admin")
        var result = await postData('events/slider_submit', formData)
        if (result.status) {
            Swal.fire({
              icon: 'success',
              title: result.message
            })
      
          }
          else {
            Swal.fire({
              icon: 'error',
              title: result.message
            })
          }
        
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container spacing={2} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)', width: "50%" }}>
                <Grid item xs={12}>
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="event-label">Event</InputLabel>
                            <Select
                                labelId="event-label"
                                id="event-select"
                                value={event}
                                label="Event"
                                onChange={handleEventChange}
                            >
                                {events.map((event) => (
                                    <MenuItem key={event} value={event}>
                                        {event}
                                    </MenuItem>
                                ))}
                                </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                              <Grid item xs={12}>

                              {isDropzoneOpen?
                                <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    onChange={(files) => setImage(files)}
                                    filesLimit={6}
                                    
                                />:null
                              }
                            </Grid>
                            
                        
                        <Grid item xs={12}>
                            <Button style={{background:"#000"}} fullWidth onClick={handleSubmit} variant='contained'>Submit</Button>
                        </Grid>
                </Grid>

        </div>
    );
}