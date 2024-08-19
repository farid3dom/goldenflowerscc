import React from 'react';
import './style.scss';
import { Skeleton } from '@mui/material';

const index = ({ title, img }) => {
   
   return (
      <div className="page_header_repeated" style={{ background: img === undefined ? '#151515' : 'none' }}>
         <div className="header_img" style={{ background: `url('${img}')` }}></div>
         <div className="page_header_inner">
            <h2>{title}</h2>
         </div>
      </div>
   )
}

export default index