import React from 'react'
import './style.scss'

//import images
import Logo from '@assets/icons/logo.svg'
import Logo_S from '@assets/icons/logo_sm.svg'
import ArrowDown from '@assets/icons/arrowDown';
import ShopSVG from '@assets/icons/shop.svg'
import DownloadSVG from '@assets/icons/download.svg'
import VideoCam from '@assets/icons/videocam.png'

///Import react router dom
import { Link } from 'react-router-dom';

///Import Utils
import { useTranslation } from 'react-i18next';

const Index = ({ menuIsActive, setMenuIsActive }) => {
    const { t, i18n } = useTranslation();

    const menuShowHide = () => {
        menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)
    }

    console.log(i18n.language)

    const changeLanguage = async lang => {
        await i18n.changeLanguage(lang);
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
                    <div className="logo_s" onClick={() => menuIsActive && setMenuIsActive(false)}>
                        <Link to={'/'}>
                            <img src={Logo_S} alt="Golden Flowers Logo Mini" />
                        </Link>
                    </div>
                </div>


                <div className='nav_menu'>

                    <div className='nav_menu_container'>

                        <div className="menu_text_main">
                            <Link to={'/products/flowers'}>
                                <div className='menu_text_main_inner'>
                                    <p>Коллекция</p>
                                    <ArrowDown />
                                </div>
                            </Link>

                            <div className='nav_menu_arrow_list'>
                                <ul>
                                    <Link to={'/products/flowers'}><li>Цветы
                                    </li></Link>
                                    <Link to={'/products/plants'}><li>Растения
                                    </li></Link>
                                    <Link to={'/products/accessories'}><li>Аксессуары
                                    </li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_text_main">
                            <Link to={'/about'}>
                                <div className='menu_text_main_inner'>
                                    <p>О нас</p>
                                    <ArrowDown />
                                </div>
                            </Link>
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

                        {/* <div className="menu_text_main camera">

                            <Link to={'/cameras'}>
                                <div className='menu_text_main_inner camera_inner'>
                                    <img src={VideoCam} width={24} />
                                    <p>Камеры</p>
                                </div>
                            </Link>

                        </div> */}
                    </div>
                </div>

                <div className="nav_right">

                    <div className="shop_button">
                        {/* <a href={"https://gfcc.clients.site/"} target={'_blank'}>
                            <button>
                                <img src={ShopSVG}/>
                                <span>Магазин</span>
                            </button>
                        </a> */}
                        <a href={window.innerWidth <= 767 ? "https://docs.google.com/spreadsheets/d/13crEl9oqD4mMIwqzXJKNrh8zemP5Tf0pw53jblwvByA/edit?gid=652358148#gid=652358148" : "https://docs.google.com/spreadsheets/d/13crEl9oqD4mMIwqzXJKNrh8zemP5Tf0pw53jblwvByA/edit?gid=1708159673#gid=1708159673"} target={'_blank'}>
                            <button>
                                <img src={DownloadSVG} />
                                <span>Прайс-лист</span>
                            </button>
                        </a>
                    </div>

                    {/* <div className="localization__wrapper">
                        <span
                            onClick={() => changeLanguage('ru')}
                            style={{ color: i18n.language === 'ru' && 'var(--gold)' }}
                        >RU</span>
                        <span>|</span>
                        <span
                            onClick={() => changeLanguage('en')}
                            style={{ color: i18n.language === 'en' && 'var(--gold)' }}
                        >EN</span>
                    </div> */}

                    <div className="nav_hamburger" data-isactive={menuIsActive ? 'true' : 'false'}>

                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox" onClick={menuShowHide}></label>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Index