import React from 'react'

import './style.scss'

//Import Images
import LogoMini from '../../assets/icons/logo_mini.png'
import TGimg from '../../assets/icons/social/icons8-телеграмма-app.svg'
import FBimg from '../../assets/icons/social/icons8-facebook.svg'
import IGimg from '../../assets/icons/social/icons8-instagram.svg'
import YTimg from '../../assets/icons/social/icons8-youtube.svg'

//Import Components
import Button from '../../components/Button/Index'

const Index = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="footer_container">

                <div className="f_cont_logo logo_1">
                    <img src={LogoMini} alt="logo mini" />
                </div>

                <div className="footer_container_inner">
                    <div className="f_cont_nav_list list_1">
                        <a href="#">Цветы</a>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <a href="#"><li>Розы</li></a>
                                <a href="#"><li>Лилии</li></a>
                                <a href="#"><li>Пионы</li></a>
                                <a href="#"><li>Тюльпаны</li></a>
                                <a href="#"><li>Хризантема</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_2">
                        <a href="#">Растения</a>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <a href="#"><li>Комнатные</li></a>
                                <a href="#"><li>Зелень</li></a>
                                <a href="#"><li>Грунты и удобрения</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_3">
                        <a href="#">Аксессуары</a>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <a href="#"><li>Сухоцветы</li></a>
                                <a href="#"><li>Упаковка</li></a>
                                <a href="#"><li>Ленты</li></a>
                                <a href="#"><li>Декор</li></a>
                                <a href="#"><li>Корзины</li></a>
                                <a href="#"><li>Вазы и керамика</li></a>
                                <a href="#"><li>Инструменты</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="contact_us contact_1">
                        <div className="social_media_container">
                            <a href='https://www.instagram.com' target='_blank'>
                                <img src={IGimg} alt="instagram" /> </a>
                            <a href={'https://www.telegram.org'} target='_blank'>
                                <img src={TGimg} alt="telegram" /> </a>
                            <a href={'https://www.facebook.com'} target='_blank'>
                                <img src={FBimg} alt="facebook" /> </a>
                            <a href={'https://www.youtube.com'} target='_blank'>
                                <img src={YTimg} alt="youtube" /> </a>
                        </div>
                        <div className="adres_container">
                            <a href='https://yandex.ru/maps/-/CDrK4P8v' className='adres'>Адрес: Московская область, Ленинский городской округ, деревня Апаринки, вл9</a>
                        </div>
                    </div>
                </div>

                <p className='rights_text'>© {year} Golden Flowers Cash&Carry. Все права защищены.</p>
            </div>

        </footer>
    )
}

export default Index
