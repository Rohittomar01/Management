import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import '../../../StyleSheets/AddEventCardCss.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { postData } from '../../../Services/ServerServices'
import { Event } from '@material-ui/icons'
function AddEventCard() {
    const[EventName,setEventName]=useState('')
    const[EventDescription,setEventDescription]=useState('')
    const[EventDate,setEventDate]=useState('')
    const[EventTime,setEventTime]=useState('')
    const[EventLocation,setEventLocation]=useState('')
    const[EventAmount,setEventAmount]=useState('')
    const[EventImage,setEventImage]=useState('')

    const handleImage=(event)=>{
        setEventImage({
            fileName: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
          })
    }
    console.log("eventimg",EventImage)

    const clearValue=()=>
    {
    setEventName('')
    setEventDescription('')
    setEventDate('')
    setEventTime('')
    setEventLocation('')
    setEventAmount('')
    setEventImage('')
  
    }


    const handleSubmit=async()=>{
        var formData=new FormData()
   formData.append('eventname',EventName)
   formData.append('eventdescription',EventDescription)
   formData.append('eventdate',EventDate)
   formData.append('eventtime',EventTime)
   formData.append('eventlocation',EventLocation)
   formData.append('eventamount',EventAmount)
   formData.append('eventpic',EventImage.bytes)

   console.log("eventpic",EventImage.bytes)
   var result=await postData('eventcard/post_event_details',Object.fromEntries(formData))
   
   if(result.status)
   {
    Swal.fire({
      icon: 'success',
      title: result.message,
     })
   }
   else
   {
    Swal.fire({
      icon: 'error',
      title: result.message,
     })
    
   } 
   clearValue()
  }
    










    return (
        <div>
            <div className='Event-card-main'>
                <div className='Event-card-box'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}> <h1 className='Event-card-heading'>Event Details</h1></Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventName(e.target.value)} variant="outlined" required label="Event Name" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventDescription(e.target.value)} variant='outlined' required label="Event Description" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventDate(e.target.value)} variant="outlined" required label="Enter like April 5, 2023" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventTime(e.target.value)} variant='outlined' required label="Enter like 2:00pm - 3:00pm" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventLocation(e.target.value)} variant='outlined' required label="Enter Location " />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField fullWidth onChange={(e)=>setEventAmount(e.target.value)} variant="outlined" required label="Enter Amount" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField fullWidth onChange={handleImage} type='file' variant='outlined' required />
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" onClick={clearValue} color="primary" fullWidth>Reset</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" onClick={handleSubmit} color="primary" fullWidth>submit</Button>
                    </Grid>
                    
                    
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default AddEventCard
