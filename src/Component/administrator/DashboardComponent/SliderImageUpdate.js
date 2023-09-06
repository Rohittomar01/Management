import React from "react"
import MaterialTable from "@material-table/core"
import { useState, useEffect } from "react"
import { getData, postData, serverURL } from "../../../services/serverservices"
import { Avatar } from "@mui/material"
import './imageCss.css'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"



export default function SliderImageUpdate() {
  const [image, setImage] = useState([])

  const fetchImg = async () => {
    var result = await getData('events/displayallimage')
    setImage(result.data)
  }
  useEffect(() => {
    fetchImg()
  }, [])

  const handleDeleteImg = async (rowData) => {
    
    Swal.fire({
      title: 'Do you want to Delete the Image?',
      showCancelButton: true,
      confirmButtonText: 'Delete',

    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var result = await postData('events/deletebyid', { imgid: rowData.pic_id })

        Swal.fire('Deleted!', '', 'success')

      }
      else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
      fetchImg()
    })
  
  }

  const navigate = useNavigate()

  return (
    <div className='maincontainer'>
      <div className='boxes'>
    <MaterialTable
      title={<div style={{fontSize:'18px',fontWeight:'bold',fontFamily:'sans-serif',letterSpacing:1}}>Slider Images</div>}
      columns={[
        { render: rowData => <div style={{display:'flex',justifyContent:'end'}}><Avatar src={`${serverURL}/uploaded/${rowData.picture}`} sx={{ width: 200, height: 100 }} variant="rounded" /></div> },
      ]}
      data={image}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add new Slider',
          isFreeAction: true,
          onClick: (event, rowData) => navigate('/slider')
        },
        {
          icon: 'delete',
          tooltip: 'Delete slider image',
          onClick: (event, rowData) => handleDeleteImg(rowData)
        }
      ]}
    />
     </div>
  </div>
  )
 
  
}