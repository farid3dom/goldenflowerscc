import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';

import ArrowRight from '../../assets/icons/arrowRight'
import NavMenuBG from '../../assets/media/images/container_image.jpg';

//import react router dom
import { Link } from 'react-router-dom';

const Index = ({ menuIsActive }) => {

    useEffect(() => {
        if(menuIsActive) {
            $('html, body').css('overflow-y', 'hidden');
        } else {
            $('html, body').css('overflow-y', '');
        }
    })

    return (
        <div className="Navbar-animated__menu" data-isactive={menuIsActive === true ? 'true' : menuIsActive === false ? 'false' : null}>
            <div className="hamburger_menu_list">
                <Link to={'/collection'}>
                    <div className='menu_text_main_inner'>
                        <p>Коллекция</p>
                    </div>
                </Link>
            </div>
            <div className="hamburger_menu_list">
                <Link to={'/about'}>
                    <div className='menu_text_main_inner'>
                        <p>Наша история</p>
                    </div>
                </Link>
            </div>
            <div className="hamburger_menu_list">
                <Link to={'/contact'}>
                    <div className='menu_text_main_inner'>
                        <p>Контакты</p>
                    </div>
                </Link>
            </div>
            <img className='nav_ham_menu_bg_image' src={NavMenuBG} alt="navbar_img" />

            <div className="phone_number">
                <a href='tel:84957818888'>+7 (495) 781 88 88</a>
            </div>
        </div>
    )
}

export default Index