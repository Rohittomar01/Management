import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid, Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import Zoom from 'react-reveal/Zoom';
import "./TechnoScheduleCss.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";


function VilaySchedule() {

  const navigate=useNavigate();
  const mobile = useMediaQuery("(max-width:650px)");
  const xlg = useMediaQuery("(min-width:1500px)");

  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState([]);

  // const fetchEvents = async () => {
  //   var result = await getData("eventcard/get_event_details")
  //   if (result.status) {
  //     // console.log("dataa", result.data)
  //     const data = await result.data
  //     setEvents(data)
  //   }
  //   else {
  //     console.log("error")
  //   }
  // }
  // const fetchTotal = async () => {
  //   var result = await getData("eventcard/get_event_total")
  //   if (result.status) {
  //     console.log("dataa", result.data)
  //      const std = await result.data
  //      setTotal(std)

  //   }
  //   else {
  //     console.log("error")
  //   }
  // }

  useEffect(() => {
    setEvents([...eventCards.slice(-4)]);
  }, []);

  var eventCards = [
    {
      id: 1,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "100",
    },
    {
      id: 2,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "200",
    },
    {
      id: 3,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "300",
    },
    {
      id: 4,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "400",
    },
    {
      id: 5,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "500",
    },
    {
      id: 6,
      event_name: "Events Name",
      event_description: "Description",
      event_date: "01-02-2024",
      event_time: "10:20AM",
      event_location: "Venue",
      event_price: "600",
    },
  ];

  const fillEvents = () => {
    return events.map((item) => (
      <div class="grid-item" id={item.id}>
        {/* <Zoom> */}
        <Paper elevation={3} className="paper">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className="eventImage">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790__340.jpg"
                  alt="Example Event"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                <div>{item.event_name}</div>
              </Typography>
              <Typography variant="body1" component="p">
                <div>{item.event_description.substring(0, 58) + "..."}</div>
              </Typography>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.event_date}</li>
                <li className="list-group-item">{item.event_time}</li>
                <li className="list-group-item">{item.event_location}</li>
                <li className="list-group-item">₹{item.event_price}</li>
                <li className="list-group-item">123 has Joined</li>
              </ul>
              {!mobile ? (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    id="Event-card-detailbtn"
                    variant="contained"
                    color="primary"
                  >
                    Details
                  </Button>
                  <Button
                    id="Event-card-joinbtn"
                    variant="contained"
                    color="primary"
                    className="Event-card-joinbtn"
                  >
                    Join Now
                  </Button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: "0px 0px 10px 0px" }}
                  >
                    Join Now
                  </Button>
                  <div>{"  "}</div>
                  <Button fullWidth variant="contained" color="primary">
                    Details
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </Paper>
        {/* </Zoom> */}
      </div>
    ));
  };

  // console.log("events", events[0]);

  return (
    <div className="root">
      <div>
        {/* <h1
          style={{
            color: "rgb(4, 184, 4)",
            textAlign: "center",
            fontWeight: 400,
            fontFamily: "serif",
            fontSize: xlg ? "3.5rem" : "",
          }}
        >
          Schedule
        </h1> */}
      </div>
      <div class="grid-container">{fillEvents()}</div>
      <div>
        <Button
        onClick={()=>navigate("/ViewAll_TechnoSchedule")}
        fullWidth
          variant="outlined"
          style={{
            marginTop:"2%",
            color: "rgb(4, 184, 4)",
            textAlign: "center",
            fontWeight: 400,
            fontFamily: "serif",
            fontSize: xlg ? "1.5rem" : "",
          }}
        >
          See More
        </Button>
      </div>
    </div>
  );
}

export default VilaySchedule;
