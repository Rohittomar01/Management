import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import { postData } from "../../../../Services/ServerServices";


const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
}));

const SubEvent = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([
    {
      eventName: "",
      description: "",
      venue: "",
      time: "",
      date: "",
      rules: "",
      coordinatorName: "",
      coordinatorNumber: "",
      eventFee: "",
      avatar: null,
    },
  ]);
  const [errors, setErrors] = useState({});
  const [maineventName, setMainEventName] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newEvents = [...events];
    newEvents[index][name] = value;
    setEvents(newEvents);
  };

  const handleEventNameChange = (event) => {
    setMainEventName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const newEvents = [...events];
    newEvents[index].avatar = file;
    setEvents(newEvents);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let newErrors = {};
  //   const allErrors = [];
  //   const formData = new FormData();

  //   console.log("Events:", events);
  //   console.log("Image:", image);

  //   events.forEach((event, index) => {
  //     const errors = {};
  //     if (!event.eventName) {
  //       errors.eventName = "Event Name is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.description) {
  //       errors.description = "Description is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.venue) {
  //       errors.venue = "Venue is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.time) {
  //       errors.time = "Time is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.date) {
  //       errors.date = "Date is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.coordinatorName) {
  //       errors.coordinatorName = "Coordinator Name is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.coordinatorNumber) {
  //       errors.coordinatorNumber = "Coordinator Number is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.eventFee) {
  //       errors.eventFee = "Event Fee is required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.rules) {
  //       errors.rules = "Rules are required";
  //       allErrors.push({ ...errors });
  //     }
  //     if (!event.avatar) {
  //       errors.avatar = "Image is required";
  //       allErrors.push({ ...errors });
  //     }

  //     // Append event data to FormData
  //     formData.append("maineventname", maineventName);
  //     formData.append(`events[${index}][eventName]`, event.eventName);
  //     formData.append(`events[${index}][description]`, event.description);
  //     formData.append(`events[${index}][venue]`, event.venue);
  //     formData.append(`events[${index}][time]`, event.time);
  //     formData.append(`events[${index}][date]`, event.date);
  //     formData.append(
  //       `events[${index}][coordinatorName]`,
  //       event.coordinatorName
  //     );
  //     formData.append(
  //       `events[${index}][coordinatorNumber]`,
  //       event.coordinatorNumber
  //     );
  //     formData.append(`events[${index}][eventFee]`, event.eventFee);
  //     formData.append(`events[${index}][rules]`, event.rules);
  //     formData.append(`events[${index}][avatar]`, event.avatar);

  //     newErrors[index] = errors;
  //   });

  //   // Append image to FormData
  //   if (image) {
  //     formData.append("image", image);
  //   }
  //   console.log("FormData:", formData);

  //   if (allErrors.length === 0) {
  //     var result = await postData("registration/mainevent", formData);
  //     // ******************************************************************************************************************

  //     // *******For Alert***********
  //     if (result.status) {
  //       Swal.fire({
  //         icon: "success",
  //         title: result.message,
  //       });
  //     } else {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Server Error",
  //       });
  //     }
  //     // *****************************
  //     // handleResetClick();
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    const allErrors = [];
    const formData = new FormData();
    const requestBody = {
      events: [],
    };

    console.log("Events:", events);
    console.log("Image:", image);

    events.forEach((event, index) => {
      const errors = {};
      if (!event.eventName) {
        errors.eventName = "Event Name is required";
        allErrors.push({ ...errors });
      }
      if (!event.description) {
        errors.description = "Description is required";
        allErrors.push({ ...errors });
      }
      if (!event.venue) {
        errors.venue = "Venue is required";
        allErrors.push({ ...errors });
      }
      if (!event.time) {
        errors.time = "Time is required";
        allErrors.push({ ...errors });
      }
      if (!event.date) {
        errors.date = "Date is required";
        allErrors.push({ ...errors });
      }
      if (!event.coordinatorName) {
        errors.coordinatorName = "Coordinator Name is required";
        allErrors.push({ ...errors });
      }
      if (!event.coordinatorNumber) {
        errors.coordinatorNumber = "Coordinator Number is required";
        allErrors.push({ ...errors });
      }
      if (!event.eventFee) {
        errors.eventFee = "Event Fee is required";
        allErrors.push({ ...errors });
      }
      if (!event.rules) {
        errors.rules = "Rules are required";
        allErrors.push({ ...errors });
      }
      if (!event.avatar) {
        errors.avatar = "Image is required";
        allErrors.push({ ...errors });
      }

      // Append event data to FormData
      requestBody.events.push({
        eventName: event.eventName,
        description: event.description,
        venue: event.venue,
        time: event.time,
        date: event.date,
        coordinatorName: event.coordinatorName,
        coordinatorNumber: event.coordinatorNumber,
        eventFee: event.eventFee,
        rules: event.rules,
        avatar: event.avatar,
      });
      newErrors[index] = errors;
    });

    // Append image to FormData
    if (image) {
      requestBody.image = image;
    }
    console.log("RequestBody:", requestBody);

    if (allErrors.length === 0) {
      try {
        const result = await postData("registration/mainevent", requestBody);
        // const result = await response.json();

        // Handle response
        if (result) {
          Swal.fire({
            icon: "success",
            title: result.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Server Error",
            text: result.error,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "An error occurred while processing your request.",
        });
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        eventName: "",
        description: "",
        venue: "",
        time: "",
        date: "",
        rules: "",
        coordinatorName: "",
        coordinatorNumber: "",
        eventFee: "",
        avatar: null,
      },
    ]);
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={5}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60vw",
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
            marginTop: "6%",
          }}
        >
          <Typography
            variant="h5"
            style={{ marginBottom: 20, fontFamily: "serif" }}
          >
            Main Event Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Main Event Name"
                value={maineventName}
                onChange={handleEventNameChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="image-upload">
                <Button
                  fullWidth
                  style={{ marginBottom: 20 }}
                  variant="outlined"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={6}>
              {image && (
                <Box>
                  <strong style={{ color: "red" }}>Selected Image:</strong>{" "}
                  {image.name}
                </Box>
              )}
            </Grid>
          </Grid>

          <Typography
            variant="h5"
            style={{ marginBottom: 20, fontFamily: "serif" }}
          >
            Sub Event Details
          </Typography>

          {events.map((event, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr style={{ margin: "50px 0" }} />}
              <Grid key={index} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Event Name"
                    name="eventName"
                    value={event.eventName}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.eventName}
                    helperText={errors[index]?.eventName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={event.description}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.description}
                    helperText={errors[index]?.description}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Venue"
                    name="venue"
                    value={event.venue}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.venue}
                    helperText={errors[index]?.venue}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Time"
                    name="time"
                    type="time"
                    value={event.time}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.time}
                    helperText={errors[index]?.time}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={event.date}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.date}
                    helperText={errors[index]?.date}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Coordinator Name"
                    name="coordinatorName"
                    value={event.coordinatorName}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.coordinatorName}
                    helperText={errors[index]?.coordinatorName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Coordinator Number"
                    name="coordinatorNumber"
                    value={event.coordinatorNumber}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.coordinatorNumber}
                    helperText={errors[index]?.coordinatorNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Event Fee"
                    name="eventFee"
                    type="number"
                    value={event.eventFee}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.eventFee}
                    helperText={errors[index]?.eventFee}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Rules"
                    name="rules"
                    multiline
                    rows={4}
                    value={event.rules}
                    onChange={(e) => handleChange(e, index)}
                    error={!!errors[index]?.rules}
                    helperText={errors[index]?.rules}
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    accept="image/*"
                    id={`image-upload-${index}`}
                    type="file"
                    onChange={(e) => handleImageUpload(e, index)}
                    style={{ display: "none" }}
                  />
                  <label htmlFor={`image-upload-${index}`}>
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Image
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  {event.avatar && (
                    <Box>
                      <strong style={{ color: "red" }}>Selected Image:</strong>{" "}
                      {event.avatar.name}
                    </Box>
                  )}
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleAddEvent}
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Add More
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default SubEvent;
