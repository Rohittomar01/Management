import React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getData } from '../../services/serverservices';
import { useStyle } from '../GalleryCss';

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
    <div style={{ background: 'black', }}>
      <div style={{ width: '100%', height: '100vh' }}>
        <ImageList sx={{ width: '100%', height: '100%' }} cols={5} gap={5} rowHeight={200} >

          {itemData.map((item) => (
            <ImageListItem key={item.picid}>
              <a data-fancybox="gallery" href={`uploaded/${item.picname}`} >
                <img
                  src={`/uploaded/${item.picname}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.picname}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%' }}
                /></a>

            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}