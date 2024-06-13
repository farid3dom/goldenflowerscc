import React from 'react';
import './style.scss';

import ArrowRight from '../../assets/icons/arrowRight';

//Import React router dom
import { Link } from 'react-router-dom';

const Index = ({ href, className, disabled, clickHandler, btnText, icon }) => {
  return (
    <div className="button__wrapper">
      <Link to={href}>
        <button className={className} disabled={disabled} onClick={clickHandler}>
          {btnText}

          {
            icon === 'arrow-right' ?
              <ArrowRight />
              :
              null
          }
        </button>
      </Link>
    </div>
  )
}

export default Index