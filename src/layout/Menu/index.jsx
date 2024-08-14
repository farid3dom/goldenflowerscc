import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';

import NavMenuBG from '@assets/media/images/container_image.jpg';

//import react router dom
import { Link } from 'react-router-dom';

///Import Utils
import { useTranslation } from 'react-i18next';

const Index = ({ menuIsActive, setMenuIsActive }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (menuIsActive) {
            $('html, body').css('overflow-y', 'hidden');
        } else {
            $('html, body').css('overflow-y', '');
        }
    })

    function menuHide() {
        setMenuIsActive(false)
    }

    const changeLanguage = async lang => {
        window.location.reload();
        await i18n.changeLanguage(lang);
    }

    return (
        <div className="Navbar-animated__menu" data-isactive={menuIsActive === true ? 'true' : menuIsActive === false ? 'false' : null}>
            <div className="hamburger_menu_list">
                <Link to={'/products/flowers'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>ЦВЕТЫ</p>
                    </div>
                </Link>
                <Link to={'/products/plants'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>РАСТЕНИЯ</p>
                    </div>
                </Link>
                <Link to={'/products/accessories'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>АКСЕССУАРЫ</p>
                    </div>
                </Link>
                <Link to={'/about'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>НАША ИСТОРИЯ</p>
                    </div>
                </Link>
                <Link to={'/cooperation'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>СОТРУДНИЧЕСТВО</p>
                    </div>
                </Link>
                <Link to={'/contacts'} onClick={menuHide}>
                    <div className='menu_text_main_inner'>
                        <p>КОНТАКТЫ</p>
                    </div>
                </Link>
                <div className='localization__wrapper'>
                    <span
                        onClick={() => changeLanguage('ru')}
                        style={{ color: i18n.language === 'ru' && 'var(--gold)' }}
                    >RU</span>
                    <span>|</span>
                    <span
                        onClick={() => changeLanguage('en')}
                        style={{ color: i18n.language === 'en' && 'var(--gold)' }}
                    >EN</span>
                </div>
            </div>
            <img className='nav_ham_menu_bg_image' src={NavMenuBG} alt="navbar_img" />

            <div className="phone_number">
                <a href='tel:84957818888'>+7 (495) 781 88 88</a>
            </div>
        </div>
    )
}

export default Index