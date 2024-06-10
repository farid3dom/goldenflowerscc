import React from 'react'
import './style.scss'

//import images
import Logo from '../../assets/icons/logo.svg'
import Logo_S from '../../assets/icons/logo_mini.png'
import ArrowDown from '../../assets/icons/arrowDown'

const Index = ({ menuIsActive, setMenuIsActive }) => {

    const menuShowHide = () => {
        menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)
    }

    return (
        <div className='Navbar'>
            <div className='inner_nav'>

                <div className="nav_logo">
                    <div className="logo">
                        <a href=''>
                            <img src={Logo} alt="Golden Flowers Logo" />
                        </a>
                    </div>
                    <div className="logo_s">
                        <a href=''>
                            <img src={Logo_S} alt="Golden Flowers Logo Mini" />
                        </a>
                    </div>
                </div>


                <div className='nav_menu'>

                    <div className='nav_menu_container'>

                        <div className="menu_text_main">
                            <a href="">
                                <div className='menu_text_main_inner'>
                                    <p>Коллекция</p>
                                    <ArrowDown />
                                </div>
                            </a>


                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <a href=""><li>Цветы
                                    </li></a>
                                    <a href=""><li>Растения
                                    </li></a>
                                    <a href=""><li>Аксессуары
                                    </li></a>
                                </ul>
                            </div>
                        </div>

                        <div className="menu_text_main">
                            <a href="">
                                <div className='menu_text_main_inner'>
                                    <p>Наша история</p>
                                    <ArrowDown />
                                </div>
                            </a>
                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <a href=""><li>Многолетний опыт
                                    </li></a>
                                    <a href=""><li>Сотрудничество
                                    </li></a>
                                </ul>
                            </div>
                        </div>

                        <div className="menu_text_main">
                            <a href="">
                                <div className='menu_text_main_inner'>
                                    <p>Контакты</p>
                                </div>
                            </a>
                        </div>


                    </div>


                </div>

                <div className="nav_right">
                    
                    <div className="phone_number">
                        <a href='tel:84957818888'>+7 (495) 781 88 88</a>
                    </div>

                    <div className="nav_hamburger">

                        <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
                        <label class="burger" for="burger-checkbox" onClick={menuShowHide}></label>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Index