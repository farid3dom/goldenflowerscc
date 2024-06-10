import React, { } from 'react';
import './style.scss';

import ArrowRight from '../../assets/icons/arrowRight'
import NavMenuBG from '../../assets/media/images/container_image.jpg'

const index = ({ menuIsActive }) => {

    console.log(menuIsActive);

    return (
        <div className="Navbar-animated__menu" data-isactive={menuIsActive === true ? 'true' : menuIsActive === false ? 'false' : null }>
            <div className="hamburger_menu_list">
                <a href="">
                    <div className='menu_text_main_inner'>
                        <p>Коллекция</p>
                    </div>
                </a>
            </div>
            <div className="hamburger_menu_list">
                <a href="">
                    <div className='menu_text_main_inner'>
                        <p>Наша история</p>
                    </div>
                </a>
            </div>
            <div className="hamburger_menu_list">
                <a href="">
                    <div className='menu_text_main_inner'>
                        <p>Контакты</p>
                    </div>
                </a>
            </div>      
            <img className='nav_ham_menu_bg_image' src={NavMenuBG} alt="navbar_img" />
        </div>
    )
}

export default index