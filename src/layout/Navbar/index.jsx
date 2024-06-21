import React from 'react'
import './style.scss'

//import images
import Logo from '../../assets/icons/logo.svg'
import Logo_S from '../../assets/icons/logo_mini.png'
import ArrowDown from '../../assets/icons/arrowDown';

///Import react router dom
import { Link } from 'react-router-dom';

const Index = ({ menuIsActive, setMenuIsActive }) => {

    const menuShowHide = () => {
        menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)
    }

    return (
        <div className='Navbar'>
            <div className='inner_nav'>

                <div className="nav_logo">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src={Logo} alt="Golden Flowers Logo" />
                        </Link>
                    </div>
                    <div className="logo_s">
                        <Link to={'/'}>
                            <img src={Logo_S} alt="Golden Flowers Logo Mini" />
                        </Link>
                    </div>
                </div>


                <div className='nav_menu'>

                    <div className='nav_menu_container'>

                        <div className="menu_text_main">
                            <Link to={'/collection'}>
                                <div className='menu_text_main_inner'>
                                    <p>Коллекция</p>
                                    <ArrowDown />
                                </div>
                            </Link>


                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <Link to={'/flowers'}><li>Цветы
                                    </li></Link>
                                    <Link to={'/plants'}><li>Растения
                                    </li></Link>
                                    <Link to={'/accessories'}><li>Аксессуары
                                    </li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_text_main">
                            <a href="">
                                <div className='menu_text_main_inner'>
                                    <p>О нас</p>
                                    <ArrowDown />
                                </div>
                            </a>
                            <div className='nav_menu_arrow_list'>
                                <ul>
                                <Link to={'/about'}><li>Наша история
                                </li></Link>
                                <Link to={'/cooperation'}><li>Сотрудничество
                                </li></Link>
                                </ul>
                            </div>
                        </div>

                        <div className="menu_text_main">
                            
                            <Link to={'/contacts'}>
                                <div className='menu_text_main_inner'>
                                    <p>Контакты</p>
                                </div>
                            </Link>
                            
                        </div>             
                    </div>
                </div>

                <div className="nav_right">
                    
                    <div className="phone_number">
                        <a href='tel:84957818888'>+7 (495) 781 88 88</a>
                    </div>

                    <div className="nav_hamburger">

                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox" onClick={menuShowHide}></label>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Index