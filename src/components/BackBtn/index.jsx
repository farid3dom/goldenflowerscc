import React from 'react';
import '../Button/style.scss';

import ArrowRight from '../../assets/icons/arrowRight';

//Import React router dom
import { Link, useNavigate } from 'react-router-dom';

const Index = ({ href, className, handleClick }) => {
   const navigate = useNavigate();
   const lang = 'en';


   return (
      <div className="back-btn__wrapper button__wrapper">
         <button className={className} onClick={() => navigate(-1)}>

            <ArrowRight />

            {
               lang == 'en' ? 'Back' : 'Назад'
            }
         </button>
      </div>
   )
}

export default Index