import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid } from "@mui/material";
import { DropzoneArea } from "react-mui-dropzone";
import Swal from "sweetalert2";
import { postData } from "../../../Services/ServerServices";
import axios from "axios";

export default function InsertImage() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [event, setEvent] = useState("");
  const [year, setYear] = useState("");
  const [yearOptions, setYearOptions] = useState([]);
  const [isDropzoneOpen, setIsDropzoneOpen] = useState(false);

  const events = ["Technoparv", "Vilay", "Ibtida", "Adeiu"];
  const years = {
    Technoparv: ["2018", "2019", "2020", "2021", "2022", "2023"],
    Vilay: ["2018", "2019", "2020", "2021", "2022", "2023"],
    Ibtida: ["2018", "2019", "2020", "2021", "2022", "2023"],
    Adeiu: ["2018", "2019", "2020", "2021", "2022", "2023"],
  };

  const handleEventChange = (event) => {
    setEvent(event.target.value);
    setYear("");
    setYearOptions(years[event.target.value]);
    setIsDropzoneOpen(false);
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);

    if (selectedYear === "2018" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k18");
    } else if (selectedYear === "2019" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k19");
    } else if (selectedYear === "2020" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k20");
    } else if (selectedYear === "2021" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k21");
    } else if (selectedYear === "2022" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k22");
    } else if (selectedYear === "2023" && event === "Technoparv") {
      setIsDropzoneOpen(true);
      setValue("album2k23");
    }
    if (selectedYear === "2018" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k18");
    } else if (selectedYear === "2019" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k19");
    } else if (selectedYear === "2020" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k20");
    } else if (selectedYear === "2021" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k21");
    } else if (selectedYear === "2022" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k22");
    } else if (selectedYear === "2023" && event === "Vilay") {
      setIsDropzoneOpen(true);
      setValue("valbum2k23");
    }
    if (selectedYear === "2018" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k18");
    } else if (selectedYear === "2019" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k19");
    } else if (selectedYear === "2020" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k20");
    } else if (selectedYear === "2021" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k21");
    } else if (selectedYear === "2022" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k22");
    } else if (selectedYear === "2023" && event === "Ibtida") {
      setIsDropzoneOpen(true);
      setValue("ialbum2k23");
    }

    if (selectedYear === "2018" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k18");
    } else if (selectedYear === "2019" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k19");
    } else if (selectedYear === "2020" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k20");
    } else if (selectedYear === "2021" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k21");
    } else if (selectedYear === "2022" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k22");
    } else if (selectedYear === "2023" && event === "Adeiu") {
      setIsDropzoneOpen(true);
      setValue("aalbum2k23");
    }
  };

  const handleSubmit = async () => {
    var formdata = new FormData();
    image.map((item, i) => {
      formdata.append("picture" + i, item);
    });
    formdata.append("table", value);
    alert(value);
    var result = await postData("gallery/uploadimg", formdata);
    if (result.status) {
      Swal.fire({
        icon: "success",
        title: result.message,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: result.message,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          width: "50%",
        }}
      >
        <Grid item xs={6}>
          <Box>
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
        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="year-label">Year</InputLabel>
              <Select
                labelId="year-label"
                id="year-select"
                value={year}
                label="Year"
                onChange={handleYearChange}
                disabled={!event}
              >
                {yearOptions.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {isDropzoneOpen ? (
            <DropzoneArea
              acceptedFiles={["image/*"]}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) => setImage(files)}
              filesLimit={6}
            />
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <Button
            style={{ background: "black" }}
            fullWidth
            onClick={handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
