import { useState, useEffect } from 'react';
import MaterialTable from "@material-table/core"
import { Tooltip } from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useNavigate } from "react-router-dom";
import { getData,serverURL,postData } from '../../Services/ServerServices';


export default function TechnoparvDay04() {

   
    var Navigate = useNavigate()
    const [Data, setData] = useState([])



    const fetchScheduleData = async () => {

        var result = await getData("schedule/technoparvday04fetch")
        console.log(result.data)
        setData(result.data)
    };

    useEffect(function () {

        fetchScheduleData()

    }, []);

         return (
            <div style={{margin:"1%"}}>
                <div >

                    <MaterialTable
                         title="Day-04"
                        columns={[

                            {
                                title: "action",
                                render: (rowData) =>
                                    rowData && (
                                        <ContainedButton variant='outlined'style={{width:"10vw",height:40}}>join</ContainedButton>
                                      
                                    )
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
                                render: rowData => <div><img alt={"image"}src={`${serverURL}/uploaded/${rowData.logo}`} width={120} variant="rounded"></img></div>
    
                            },

                        ]}
                        data=
                        {Data}

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