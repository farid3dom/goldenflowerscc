import React from 'react';
import './style.scss';

import ArrowRight from '../../assets/icons/arrowRight';

//Import React router dom
import { Link } from 'react-router-dom';

const Index = ({ href, className, disabled, clickHandler, btnText }) => {
  return (
    <div className="button__wrapper">
        <Link to={href}>
            <button className={className} disabled={disabled} onClick={clickHandler}>
                {btnText}

                <ArrowRight />
            </button>
        </Link>
    </div>
  )
}

export default Index