import React from 'react'

import './style.scss'

//Import Cmages
import LogoMini from '../../assets/icons/logo_mini.png'

//Import Components
import Button from '../../components/Button/Index'

const Index = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div class="footer_container">
                <div className="footer_container_inner">

                    <div className="f_cont_logo logo_1">
                        <img src={LogoMini} alt="logo mini" />
                    </div>
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
                            <div className="rounded-social-buttons">
                                <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a className="social-button telegram" href="https://t.me/GoldenFlowersOpt" target="_blank"><i className="fab fa-telegram"></i></a>
                            </div>
                            <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
                        </div>
                        <div className="adres_container">
                            <a href='https://yandex.ru/maps/-/CDrK4P8v' className='adres'>Адрес: Московская область, Ленинский городской округ, деревня Апаринки, вл9</a>
                        </div>
                    </div>
                </div>

                <p className='rights_text'>© {year} Golden Flowers. Все права защищены.</p>
            </div>
        </footer>
    )
}

export default Index
