import React from 'react';
import './style.scss';

const index = ({ title, img }) => {
  return (
      <div className="page_header_repeated">
         <div className="header_img" style={{ background: `url('${img}')` }}></div>
         <div className="page_header_inner">
            <h2>{title}</h2>
         </div>
      </div>
  )
}

export default index