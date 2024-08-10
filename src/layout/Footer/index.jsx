import React from 'react'

import './style.scss'

//Import Images
import LogoMini from '@assets/icons/logo_mini.png'
import TGimg from '@assets/icons/social/icons8-telegram.svg'
import VKimg from '@assets/icons/social/icons8-vk.svg'
import Ximg from '@assets/icons/social/icons8-x.svg'
import YTimg from '@assets/icons/social/icons8-youtube.svg'

import { Link } from 'react-router-dom';

//Import Components
import Button from '@components/Button/Index'

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
                        <Link to={'/products/flowers'}>Цветы</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/products/flowers/roses'}><li>Розы</li></Link>
                                <Link to={'/product?productType=flowers&productName=lily'}><li>Лилии</li></Link>
                                <Link to={'/product?productType=flowers&productName=peonies'}><li>Пионы</li></Link>
                                <Link to={'/product?productType=flowers&productName=tulips'}><li>Тюльпаны</li></Link>
                                <Link to={'/products/flowers/chrysanthemum'}><li>Хризантема</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_2">
                        <Link to={'/products/plants'}>Растения</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/products/plants/domestic'}><li>Комнатные</li></Link>
                                <Link to={'/products/plants/greenery'}><li>Зелень</li></Link>
                                <Link to={'/products/plants/grunt'}><li>Грунты и удобрения</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="f_cont_nav_list list_3">
                        <Link to={'/products/accessories'}>Аксессуары</Link>
                        <div className="nav_list_inner">
                            <ul className="list_text">
                                <Link to={'/product?productType=accessories&productName=dried%20flowers'}><li>Сухоцветы</li></Link>
                                <Link to={'/product?productType=accessories&productName=package'}><li>Упаковка</li></Link>
                                <Link to={'/product?productType=accessories&productName=ribbons'}><li>Ленты</li></Link>
                                <Link to={'/product?productType=accessories&productName=vases'}><li>Вазы</li></Link>
                                <Link to={'/product?productType=accessories&productName=baskets'}><li>Корзины</li></Link>
                                <Link to={'/product?productType=accessories&productName=interior%20items'}><li>Предметы интерьера</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="contact_us contact_1">
                        <div className="social_media_container">
                            <Link to={'https://www.x.com/goldenflowerscc'} target='_blank'>
                                <img src={Ximg} alt="instagram" /> </Link>
                            <Link to={'https://t.me/GoldenFlowersOpt'} target='_blank'>
                                <img src={TGimg} alt="telegram" /> </Link>
                            <Link to={'https://vk.com/goldenflowerscc'} target='_blank'>
                                <img src={VKimg} alt="facebook" /> </Link>
                            <Link to={'https://www.youtube.com/channel/UCsOclqfB25LzHOh7W9QpSqw'} target='_blank'>
                                <img src={YTimg} alt="youtube" /> </Link>
                        </div>
                        <div className="adres_container">
                            <Link to={'https://yandex.ru/maps/-/CDrK4P8v'} target='_blank' className='adres'>Адрес: Московская область, Ленинский городской округ, деревня Апаринки, владение 9, строение 1, помещение 3</Link>
                        </div>
                    </div>
                </div>

                <p className='rights_text'>© {year} Golden Flowers Cash&Carry. Все права защищены.</p>
            </div>

        </footer>
    )
}

export default Index
