import React, { useEffect, useState } from 'react';
import './style.scss';

///Import react router dom
import { Link } from 'react-router-dom';

const Index = ({ img, title, href, target }) => {

   return (
      <div className="single_gallery_card">
         <Link to={href} target={target && target}>
            <div className="image_wrapper">
               <img src={img} loading='lazy' />
            </div>

            <div className="card_title">
               <h2>{title}</h2>
            </div>
         </Link>
      </div>
   )
}

export default Index