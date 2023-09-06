import { useState, useEffect } from 'react';
import MaterialTable from "@material-table/core"
import { Tooltip } from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useNavigate } from "react-router-dom";
import { getData, serverURL } from '../Services/ServerServices';


export default function TechnoparvDay04() {

   
    var Navigate = useNavigate()
    const [Data, setData] = useState([])



    const fetchScheduleData = async () => {

        var result = await getData("schedule/technoparvday04fetch")
        console.log(result.data)
        setData(result.data)
    };

    const getStorageData = (ADMIN, defaultValue) => {

        const savedItem = localStorage.getItem("USER");
        const parsedItem = JSON.parse(savedItem);

        return parsedItem || defaultValue


    }

    const [items, setItems] = useState(getStorageData());

    const handleClick = (rowData) => {
        if (items) {
            const feeValue=rowData.fee
           
            Navigate("/RazorPay", { state: { fee:feeValue} })
           
            
        }
        else {
            Navigate("/RegistrationPage")
        }
    }

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
                                // title: 'picture',
                                 render: rowData => <div><img src={`${serverURL}/uploaded/${rowData.logo}`} width={200} variant="rounded"></img></div>
    
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
                                // title: "action",
                                render: (rowData) =>
                                    rowData && (
                                        <ContainedButton variant='outlined'style={{width:"10vw",height:40}}>join</ContainedButton>
                                      
                                    )
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