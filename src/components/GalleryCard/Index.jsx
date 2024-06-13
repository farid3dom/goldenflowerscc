import React from 'react';
import './style.scss';

///Import react router dom
import { Link } from 'react-router-dom';

const Index = ({ img, title, href }) => {
   return (
      <div className="single_gallery_card">
         <Link to={href}>
            <div className="image_wrapper">
               <img src={img} alt="" />
            </div>

            <div className="card_title">
               <h2>{title}</h2>
            </div>
         </Link>
      </div>
   )
}

export default Index