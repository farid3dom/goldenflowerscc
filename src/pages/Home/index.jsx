import React, { useEffect, useState } from 'react';
import './style.scss';



//Import images
// import Map from '../../assets/media/images/map_gold.png'
import Slide1 from '../../assets/media/images/materials/vitrin/komnata_vitrin_isci.jpg'
import Slide2 from '../../assets/media/images/materials/vitrin/komnata_vitrin_qost.jpg'
import Slide3 from '../../assets/media/images/materials/vitrin/vitrin_qost.jpg'



//Import Components
import Button from '../../components/Button/Index';
import Slider from '../../components/Slider/index';



const Index = () => {

    let sliderOptions = [
        {
            img: '../../assets/media/images/materials/gold_plants.jpg'
        },
        {
            img: '../../assets/media/images/materials/gold_plants.jpg'
        },
        {
            img: '../../assets/media/images/materials/gold_plants.jpg'
        }

    ]

    return (
        <div className="home_page_container">
            <header>

                <div className="header_slogan">
                    <p className='p1'>GOLDEN FLOWERS <br />Сash&Сarry</p>
                    <p className='p2'>ВСЕ ДЛЯ ЦВЕТОЧНОГО БИЗНЕСА</p>
                </div>


                <div className="slide_wrapper">


                    <Slider 
                        options={sliderOptions}
                    />
                </div>


            </header>

            <div className="about_wrapper">
                <div className="about_wrapper_inner">
                    <div className="left_content">
                        <p className='content_title'>Коротко о нас:</p>

                        <span className='content_desc'>Компания GoldenFlowers Cash&Carry уже не первое десятилетие является поставщиком цветов, растений и аксессуаров от ведущих мировых производителей на российский рынок и одним из самых крупный оптовых баз для цветочного бизнеса на регионе Москвы. Здесь вы найдете все для цветочного бизнеса!</span>

                        <div className="content_button">
                            <Button
                                btnText={'Подробнее'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about'}
                            />
                        </div>
                    </div>
                    <div className="right_content">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KjOUOvrEwLY?si=BFUtqLk7_QYqFIBv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <div className="main_title_wrapper">
                {/* <div className="slideshow">
                    <div className="slide_wrapper">
                        <div className={`slide slide-${carouselCounter}`}>
                            <img alt=''/>
                        </div>
                    </div>
                </div> */}
                <div className="main_slogan">
                    <div className="main_slogan_text">
                        <span>Только свежие цветы и растения из плодородной почвы</span>
                    </div>
                    <div className="content_button">
                            <Button
                                btnText={'Коллекция'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/collection'}

                            />
                        </div>
                </div>
            </div>

            <div className="home_map_wrapper">
                <div className="home_map_wrapper_inner">
                    
                    <div className="map_wrapper_text">
                        <span>Импортируем товары со всех континентов мира</span>
                        <div className="content_button">
                            <Button
                                btnText={'Наши поставщики'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/cooperation'}

                            />
                        </div>
                    </div>
                </div>
                <div className="home_map_img"></div>
            </div>
        </div>
    )
}

export default Index