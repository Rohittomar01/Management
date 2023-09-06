import { useState, useEffect } from 'react';
import MaterialTable from "@material-table/core"
import { Tooltip,Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { postData ,getData,serverURL} from "../Services/ServerServices";

export default function TechnoparvDay01() {

  
    var navigate = useNavigate()
    const [Data, setData] = useState([])



    //  *****************************************USED FOR FETCH SCHEDULE DATA***************************************
    const fetchScheduleData = async () => {

        var result = await getData("schedule/technoparvday01fetch")
        console.log(result.data)
        setData(result.data)
    };

    // ******************************************************************************************************

    // ******************************USED FOR ERROR CHECK*******************************************
  


    useEffect(function () {

        fetchScheduleData()

    }, []);


    return (
        <div style={{ margin: "1%" }}>

            <div >

                <MaterialTable
                    title="Day-01"
                    columns={[

                        {
                            title: "action",
                            render: (rowData) =>

                                <Button variant='contained' size='small'>join</Button>

                        },

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
                            render: rowData => <div> &#8377; {rowData.fee}</div>

                        },
                        {
                            title: 'Coordinators',
                            render: rowData => <div>{rowData.coordinators}</div>

                        },
                        {
                            title: 'picture',
                             render: rowData => <div><img src={`${serverURL}/uploaded/${rowData.logo}`} width={120} variant="rounded"></img></div>

                        },

                    ]}
                    data={Data}
                    detailPanel={rowData => {
                        return (
                           
                            <iframe
                            title='video'
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/C0DPdy98e4c"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen

                            />
                        )
                    }}

                />
            </div>

        </div >


    )
}



