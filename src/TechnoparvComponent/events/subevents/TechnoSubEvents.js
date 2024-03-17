import { Grid, Paper, mobileStepperClasses } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

export default function TechnoSubEvents() {

  const mobile = useMediaQuery("(max-width:650px)");
  const tablet = useMediaQuery("(max-width:768px)");
  const laptop = useMediaQuery("(max-width:1500px)");
  const xlg = useMediaQuery("(min-width:1500px)");

  const eventCards = {
    fontSize: "1.3rem",
    color: "#ffff",
    fontWeight: 600,
    padding: "5%",
    borderRadius: "0 0 8% 8%",
    fontFamily: "sans-serif",
  };

  return (
    <div>
      <div style={{ width: "100vw",position:"absolute"}}>
      </div>
      <div id="chess">
        <div className="main">
          <div
          className="video"
            style={{
              height: mobile ? "40vh" : "75vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // position:"relative",
              // marginTop:mobile?"":"11%"
            }}
          >
            {/* <video
              src={""}
              autoPlay
              loop
              muted
              height={mobile ? "90%" : "164%"}
            /> */}
            <h1
              style={{
                fontSize: mobile ? "30px" : "",
                textAlign: "center",
                position: "absolute",
              }}
            >
              Welcome In Chess
            </h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Paper
            elevation={4}
            style={{
              padding: mobile ? "4%" : "10%",
              width: mobile ? "90%" : "100%",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={mobile ? 12 : 6}>
                <img
                  alt={"image"}
                  src="https://sergiocaredda.eu/wp-content/uploads/2020/01/workshop-facilitation.jpg"
                  width="100%"
                ></img>
              </Grid>
              <Grid item xs={mobile ? 12 : 6}>
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    margin: "5%",
                    color: "darkgreen",
                  }}
                >
                  Chess
                </h2>
                <div className="aboutp">
                  Truss will be kept in between two chair or stools,keeping in
                  mind that the gap between the stools will be 20cm or more than
                  that.Then load will be applid upside down with the help of the
                  iron treads which will be tied at the four side of the truss
                  by making along loop and another side there will be a flat
                  wooden board where the load will be placed. Truss which can
                  bear the more loads without failing will be declared as the
                  winner of the competition.
                </div>
              </Grid>

              <Grid item xs={mobile ? 12 : 6}>
                <Paper
                  elevation={4}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    borderRadius: "3%",
                  }}
                >
                  <div style={{ ...eventCards, backgroundColor: 'orange' }}>Detail</div>

                  <div>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "auto",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Venue:"
                          secondary=" CAD/CAM lab & CNC"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Timimg"
                          secondary="10AM to 4PM"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Date"
                          secondary="28th-29th September 2018"
                        />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={mobile ? 12 : 6}>
                <Paper
                  elevation={4}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    borderRadius: "3%",
                  }}
                >
                  <span style={{ ...eventCards, backgroundColor: 'green' }}>Sports</span>
                  <div>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Deepak Tomar"
                          secondary="+91-9755374889"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Apurv Sharma"
                          secondary="+91-9755374889"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="vikash Tomar"
                          secondary="+91-9755374889"
                        />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={mobile ? 12 : 6}>
                <Paper
                  elevation={4}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    borderRadius: "3%",
                  }}
                >
                  <span style={{ ...eventCards, backgroundColor: 'orange' }}>Cordinater</span>
                  <div>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Photos"
                          secondary="Jan 9, 2014"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Vacation"
                          secondary="July 20, 2014"
                        />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={mobile ? 12 : 6}>
                <Paper
                  elevation={4}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    borderRadius: "3%",
                  }}
                >
                  <span style={{ ...eventCards, backgroundColor: 'green' }}>Star Night</span>
                  <div>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Photos"
                          secondary="Jan 9, 2014"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Vacation"
                          secondary="July 20, 2014"
                        />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  elevation={4}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    borderRadius: "3%",
                  }}
                >
                  <span style={{ ...eventCards, backgroundColor: 'black' }}>Rules & Regulation</span>
                  <div>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText secondary="Participants must bring their College/School ID" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText secondary="All Participants should be present in all the sessions. Failing this, no certificate shall be awarded to the participant" />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}
