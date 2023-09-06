import React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getData, serverURL } from '../../../../Services/ServerServices';
import { useStyle } from '../GalleryCss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AppBar,Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';

export default function Gallery2018() {
  const classes = useStyle()
  const [itemData, setItemData] = useState([])
  const fillImg = async () => {
    var result = await getData('fetch/getimg2k18')
    setItemData(result.data)
    console.log(result.data)
  }
  useEffect(() => {
    fillImg()
  }, [])


  return (
    <div style={{ background: 'white', }}>
      
      {/* <AppBar position="fixed" sx={{background:"rgb(204 0 0)",height:'60px',display:'flex',justifyContent:'start'}}>
        <Toolbar variant="dense"> */}
          {/* <span><Avatar alt="Remy Sharp" src="images/logo2.png" sx={{width: 56, height: 56,background:'#FFF',}} /></span> */}
          {/* <Typography variant="h4" color="inherit" component="div" sx={{fontFamily:'sans-serif',fontWeight:'bold',marginLeft:'1%'}}>
            Evento
          </Typography>
        </Toolbar>
      </AppBar> */}
    <Paper  square   style={{width:'100%',height:'70px',display:'flex',alignItems:'center',background:'#fff',justifyContent:'center'}} >
        
    <Button style={{ color: '#000', fontWeight: 600,fontSize:'13px',marginLeft:'2%'}}>Images</Button>
    <Button style={{ color: '#000', fontWeight: 600,fontSize:'13px'}}>Videos</Button>
       
      </Paper>
      <Box>
        <ImageList sx={{ width: '100%', height: '100%' }} variant="masonry" cols={4} gap={8}  >

          {itemData.map((item) => (
            <ImageListItem key={item.picid}>
              <a data-fancybox="gallery" href={`${serverURL}/uploaded/${item.picname}`} >
                <img
                  src={`${serverURL}/uploaded/${item.picname}`}
                 
                
                  style={{ width: '100%', height: '100%' }}
                /></a>

            </ImageListItem>
          ))}
        </ImageList>
        </Box>
      
    </div>
  );
}

