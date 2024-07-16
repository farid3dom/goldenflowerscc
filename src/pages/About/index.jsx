import React, { useRef, useEffect } from 'react'
import './style.scss';

import { useLocation } from 'react-router-dom';

import CountUp from 'react-countup';

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
            img: 'https://sun9-3.userapi.com/impg/c2-OXz5M5WF2-YCAJ3AeDXHhJ2fsf4xQp3drGA/3SaU5cxIB2k.jpg?size=1280x853&quality=95&sign=707dd3fd3615a3ebeffa7a0675ac2aec&type=album'
        },
        {
            img: 'https://sun9-17.userapi.com/impg/OTMeHO6_w77SJh8pkVBBO8R32GpJgEfsyf6WUw/g_8QCx6lPws.jpg?size=1280x853&quality=95&sign=c33878e1f3f71cff8618fbbb82646c27&type=album'
        },
        {
            img: 'https://sun9-22.userapi.com/impg/-8UFvYg0nkGAdFPZ-qqxNQtJ2neMzxTae3t-Ow/0OoWPDTx6io.jpg?size=1280x853&quality=95&sign=bbc3f1accca5ac25f28f371624a2162b&type=album'
        }

    ]

    let sliderPlants = [
        {
            img: 'https://sun9-58.userapi.com/impg/iTy1PhBbrdyETmmwNgR_GFQAaUmzI51EKGOBzA/FIbv_CIROi0.jpg?size=1280x853&quality=95&sign=86bec54dfb86b9b999bb3c04308fef92&type=album'
        },
        {
            img: 'https://sun9-8.userapi.com/impg/vEiuWPBouRDDuzFtW3xruOH0Olg4RF_uNDBvNQ/gG1rpa1skJY.jpg?size=1280x852&quality=95&sign=cf090540afc3930949603d2980b5ef0f&type=album'
        },
        {
            img: 'https://sun9-10.userapi.com/impg/WMxh6QQEBLAE3mT5MYg-M00Jz0wDLIC4cNmGkw/y49aae7hQG8.jpg?size=1280x853&quality=95&sign=084963b3cdeb9b2cd8f0f18100c30f16&type=album'
        }

    ]

    let sliderAccessories = [
        {
            img: 'https://sun9-43.userapi.com/impg/ftLTaPKsEa5DTQGFTve8J57c1GwkcXYhBjzlhg/3tutFvEh7EY.jpg?size=1080x720&quality=95&sign=30a0f4b3f9de9695b1ab450ec6099145&type=album'
        },
        {
            img: 'https://sun9-19.userapi.com/impg/J4OKLEcTzvUeduVwKw90eqSldDkQmpGimROL-w/BoF69awLVu0.jpg?size=1080x720&quality=95&sign=a498faf687ff20c7eb25fdb72822c28b&type=album'
        },
        {
            img: 'https://sun9-57.userapi.com/impg/ms8bwccVh1djh6bQ_3WDSuPQnhv8zg6Ua0fPRQ/WvHgd9rIgps.jpg?size=1080x720&quality=95&sign=5ad31c30a44210496cbbcb1e01194913&type=album'
        },
        {
            img: 'https://sun9-80.userapi.com/impg/9HIxo772QkQeGkK6P_9BzNEc4wVEhYQTuBwq9w/xk4mr88pa_E.jpg?size=1080x720&quality=95&sign=3c7d08307946ae8528930c9d9716e0d3&type=album'
        },
        {
            img: 'https://sun9-33.userapi.com/impg/aYFNjBZG_28vdHCn2lMkiW2maOn8Z5AQGjEE-A/5atvVZbduzE.jpg?size=1080x720&quality=95&sign=7f5306773cadfcf218fea132a58ac6b2&type=album'
        },
        {
            img: 'https://sun9-80.userapi.com/impg/KNaO7_yhul1-dqWFjaoil_-vHq40VvVLNMEQwQ/o_tMgcIBd2U.jpg?size=1080x720&quality=95&sign=22f32d542935dda4e5b7b9905fa10eac&type=album'
        },
        {
            img: 'https://sun9-17.userapi.com/impg/cXtHr6XmLXD2pBo6eC5EF1JKoaBDCDtdG0usGQ/rS0YlZp4cyI.jpg?size=1080x720&quality=95&sign=f7b13559ef6029d4d6a1ae299a25bb32&type=album'
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
                                <h1>
                                    <CountUp end={26} duration={2} />+
                                </h1>
                            </div>
                            <div className="year_text num_text">
                                <span>ЛЕТ ОПЫТА В СФЕРЕ ЦВЕТОЧНОГО БИЗНЕСА</span>
                            </div>
                        </div>

                        <div className="plantation_section num_section">
                            <div className="plantation_count count">
                                <h1><CountUp end={100} duration={2} />+</h1>
                            </div>
                            <div className="plantation_text num_text">
                                <span>ЛУЧШИХ ПЛАНТАЦИЙ СОТРУДНИЧАЮТ С НАМИ</span>
                            </div>
                        </div>

                        <div className="products_section num_section">
                            <div className="products_count count">
                                <h1><CountUp end={25} duration={2} />+</h1>
                            </div>
                            <div className="products_text num_text">
                                <span>МЛН ТОВАРОВ ПРОДАЕТСЯ В ГОД</span>
                            </div>
                        </div>

                        <div className="starts_section num_section">
                            <div className="starts_count count">
                                <h1><CountUp end={5} duration={2} />+</h1>
                            </div>
                            <div className="starts_text num_text">
                                <span>ОЦЕНКА КЛИЕНТОВ НА ЯНДЕКС КАРТАХ</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about_slider_container" id={'collection'}>

                    <h1 ref={collectionRef} className='container_title'>Наши отделы</h1>

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
                                    <li><a href="">Упаковка</a></li>
                                    <li><a href="">Корзины</a></li>
                                    <li><a href="">Ленты</a></li>
                                    <li><a href="">Мягкая игрушка</a></li>
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