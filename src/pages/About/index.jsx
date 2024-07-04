import React, { useRef, useEffect } from 'react'
import './style.scss';

import { useLocation } from 'react-router-dom';

import Slider from '../../components/Slider/index'
import Button from '../../components/Button/Index'

//import images



const Index = () => {
    const collectionRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        console.log(location)
        setTimeout(() => {
            if (location.hash === '#collection') {
                collectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100)
    }, [location]);

    let sliderFlowers = [
        {
            img: '/media/images/materials/vitrin/vitrin_isci_2.jpg'
        },
        {
            img: '/media/images/materials/vitrin/vitrin_isci.jpg'
        },
        {
            img: '/media/images/materials/vitrin/vitrin_qost.jpg'
        }

    ]

    let sliderPlants = [
        {
            img: '/media/images/materials/vitrin/komnata_vitrin_isci.jpg'
        },
        {
            img: '/media/images/materials/vitrin/komnata_vitrin_qost.jpg'
        },
        {
            img: '/media/images/materials/vitrin/komnata_sklad.jpg'
        }

    ]

    let sliderAccessories = [
        {
            img: '/media/images/materials/accessories/korziny.jpg'

        },
        {
            img: '/media/images/materials/accessories/lenta.jpg'
        },
        {
            img: '/media/images/materials/accessories/vaza.jpg'
        },
        {
            img: '/media/images/materials/accessories/svechi.jpg'
        },
        {
            img: '/media/images/materials/accessories/yashiki_2.jpg'
        }

    ]

    return (
        <div className="about_page">

            <div className="about_content_wrapper">

                {/* <div className="timeline">

                    <div className="container left_container">

                        <img src={IconRA} width={40} />

                        <div className="text_box ">
                            <h2>Радужное</h2>
                            <p>1999-2005</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloribus totam voluptates officiis autem rem molestias asperiores mollitia qui quisquam?</span>
                            <span className="left_container_arrow"></span>
                        </div>

                    </div>

                    <div className="container right_container">
                        <img src={IconRA} width={40} />
                        <div className="text_box">
                            <h2>Радостное</h2>
                            <p>2005-2011</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloribus totam voluptates officiis autem rem molestias asperiores mollitia qui quisquam?</span>
                            <span className="right_container_arrow"></span>
                        </div>
                    </div>

                    <div className="container left_container">
                        <img src={IconGF} width={40} />
                        <div className="text_box">
                            <h2>Golden Flowers</h2>
                            <p>с 2011</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloribus totam voluptates officiis autem rem molestias asperiores mollitia qui quisquam?</span>
                            <span className="left_container_arrow"></span>
                        </div>
                    </div>

                    <div className="container right_container">
                        <img src={IconOA} width={40} />
                        <div className="text_box">
                            <h2>Oasis Cash&Carry</h2>
                            <p>с 2016</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloribus totam voluptates officiis autem rem molestias asperiores mollitia qui quisquam?</span>
                            <span className="right_container_arrow"></span>
                        </div>
                    </div>

                </div> */}

                <div className="animated_numbers_wrapper">

                    <h1 className='container_title_num'>Мы - крупнейшая цветочная база региона.</h1>

                    <div className="animated_num_wrap_inner">

                        <div className="year_section num_section">
                            <div className="year_count count">
                                <h1>26+</h1>
                            </div>
                            <div className="year_text num_text">
                                <span>ЛЕТ ОПЫТА В СФЕРЕ ЦВЕТОЧНОГО БИЗНЕСА</span>
                            </div>
                        </div>

                        <div className="plantation_section num_section">
                            <div className="plantation_count count">
                                <h1>100+</h1>
                            </div>
                            <div className="plantation_text num_text">
                                <span>ЛУЧШИХ ПЛАНТАЦИЙ СОТРУДНИЧАЮТ С НАМИ</span>
                            </div>
                        </div>

                        <div className="products_section num_section">
                            <div className="products_count count">
                                <h1>25+</h1>
                            </div>
                            <div className="products_text num_text">
                                <span>МЛН ТОВАРОВ ПРОДАЕТСЯ В ГОД</span>
                            </div>
                        </div>

                        <div className="starts_section num_section">
                            <div className="starts_count count">
                                <h1>5+</h1>
                            </div>
                            <div className="starts_text num_text">
                                <span>ОЦЕНКА КЛИЕНТОВ НА ЯНДЕКС КАРТАХ</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div ref={collectionRef} className="about_slider_container" id={'collection'}>

                    <h1 className='container_title'>Наши отделы</h1>

                    <div className="about_slider_container_inner">

                        <div className="flowers_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderFlowers}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>Отдел цветков</h1>
                                <ul className='product_list'>
                                    <li><a href="">Розы</a></li>
                                    <li><a href="">Хризантема</a></li>
                                    <li><a href="">Лилии</a></li>
                                    <li><a href="">Тюльпаны</a></li>
                                    <li><a href="">Гвоздики</a></li>
                                    <li><a href="">Пионы</a></li>
                                    <li><a href="">Экзотика</a></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={'Перейти'}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/flowers'}
                                    />
                                </div>
                            </div>

                        </div>


                        <div className="plants_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderPlants}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>Отдел растений</h1>
                                <ul className='product_list'>
                                    <li><a href="">Комнатные растения</a></li>
                                    <li><a href="">Зелень</a></li>
                                    <li><a href="">Грунт и удобрения</a></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={'Перейти'}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/plants'}
                                    />
                                </div>
                            </div>

                        </div>


                        <div className="accessories_slider">

                            <div className="slide_wrapper">
                                <Slider
                                    loop={true}
                                    options={sliderAccessories}
                                />
                            </div>

                            <div className="main_slogan_text">
                                <h1>Отдел аксессуаров</h1>
                                <ul className='product_list'>
                                    <li><a href="">Для флористики</a></li>
                                    <li><a href="">Вазы и керамика</a></li>
                                    <li><a href="">Упаковка</a></li>
                                    <li><a href="">Корзины</a></li>
                                    <li><a href="">Ленты</a></li>
                                    <li><a href="">Мягкая игрушка</a></li>
                                    <li><a href="">Предметы интерьера и др</a></li>
                                </ul>
                                <div className="content_button">
                                    <Button
                                        btnText={'Перейти'}
                                        className={'btn btn_white hover_gold'}
                                        icon={'arrow-right'}
                                        href={'/accessories'}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>




            </div>

        </div>
    )
}

export default Index