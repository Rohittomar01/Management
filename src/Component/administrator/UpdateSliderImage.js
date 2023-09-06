import React from "react"
import MaterialTable from "@material-table/core"
import { useState, useEffect } from "react"
import { getData, postData, serverURL } from "../../Services/ServerServices"
import { Avatar } from "@mui/material"
// import './imageCss.css'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"



export default function UpdateSliderImage() {
  const [image, setImage] = useState([])

  const fetchImg = async () => {
    var result = await getData('gallery/display_technoparv_carousel_img')
    console.log(result.data)
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
        var result = await postData('gallery/delete_technoparv_img', { slideid: rowData.slideid })

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
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"65%",marginTop:"4%"}}>
        <MaterialTable
          title={<div style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: 1 }}>Slider Images</div>}
          columns={[
            { render: rowData => <div style={{ display: 'flex' }}><Avatar src={`${serverURL}/uploaded/${rowData.slidepicl}`} sx={{ width: 350, height: 200 ,marginLeft:"20%"}} variant="rounded" /></div> },
          ]}
          data={image}
          actions={[
            {
              icon: 'add',
              tooltip: 'Add new Slider',
              isFreeAction: true,
              onClick: (event, rowData) => navigate('/Dashboard/InsertImage')
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