import MaterialTable from "@material-table/core"
import { getData } from "../../../Services/ServerServices";
import { useEffect, useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function CandidateListList() {

  const [candidate, setCandidate] = useState([])


  const fetchAllCandidates = async () => {

    var result = await getData("registration/candidatelist")
    setCandidate(result.data)
    console.log("candidate1111", candidate)
  };

  useEffect(function () {
    fetchAllCandidates();
  }, [])


  return (
    <div style={{ justifyContent: "center", alignItems: "center", margin: "5%" }}>
      <MaterialTable
        title="Candidates List"
        columns={[
          {
            title: "Enrollment",
            render: rowData => <div>{rowData.student_enrollment}</div>
          },
          {
            title: "Name/Gender",
            render: rowData => <div>{rowData.student_name}<br></br>{rowData.gender}</div>
          },
          {
            title: " Father Name",
            render: rowData => <div>{rowData.student_father}</div>
          },


          {
            title: "Contact",
            render: rowData => <div>{rowData.student_mobile}<br></br>{rowData.email}</div>
          },
          {
            title: "College/Cource",
            render: rowData => <div>{rowData.student_college}<br></br>{rowData.course}{rowData.student_sem}</div>
          },
          {
            title: "Verify",
            render: rowData => <div>
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />}/>
              </FormGroup></div>
          }

        ]}
        data={candidate}

        options={{
          exportButton: true
        }}
      />
    </div>
  )

};
