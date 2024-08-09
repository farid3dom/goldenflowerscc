import React from 'react';
import './style.scss';
import "@google/model-viewer";

//Import Components
import Button from '@components/Button/Index';
import Slider from '@components/Slider/index';

//Import Utils
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t, i18n } = useTranslation();

    let sliderOptions = [
        {
            img: 'https://sun9-21.userapi.com/impg/NE-kwgNCDEvTpuP6poMQYoGtO7Ua8T-4yK6KZg/O2dDUcWUBQw.jpg?size=1216x832&quality=95&sign=eb6f1a3f0ce2e0231ac102310ed9f9d5&type=album'
        },
        {
            img: 'https://sun9-47.userapi.com/impg/aWv40Qsp8VC0zhUq0ANKb_4y7jXeCqJFGi-h6A/QYUpjoTH_GI.jpg?size=1216x832&quality=95&sign=5187438ce2d23eee6b57157d028b4006&type=album'
        },
        {
            img: 'https://sun9-53.userapi.com/impg/_BCl1gT8S1drOPevOtFY6u5JRZhaoe_DFDPMjQ/Sz7iM2EZgZQ.jpg?size=1216x832&quality=95&sign=da2ca899a9d9b2fa6d3e23fec8352877&type=album'
        },
        {
            img: 'https://sun9-41.userapi.com/impg/TGyE6UbPtOQngAH5jkDf-FZ0pj-KVgBiiPnmaA/v2lsBASwo4Q.jpg?size=1216x832&quality=95&sign=36c05b0287ad903bc7e276e9e999c9bf&type=album'
        }

    ]

    let sliderMainOptions = [
        {
            img: 'https://sun9-51.userapi.com/impg/PxZkPrrOjVZzit2tlatNh64gPFZ4QFcFBUde4A/_GaNmEAc2YI.jpg?size=1280x853&quality=95&sign=0fb842027c86b8a967d963500b4e8c96&type=album'
        },
        {
            img: 'https://sun9-52.userapi.com/impg/0NzSz2zT8HymeJpIW9MIuKqe0DBaYk4-lyGuWA/BqLfctZ4fSg.jpg?size=1280x853&quality=95&sign=dede5b363a7217c0cc9a1fa8c9320e5f&type=album'
        },
        {
            img: 'https://sun9-24.userapi.com/impg/tF3TEh2LLcPSiMWxEuSWKphQyWscnyXjlO-OQQ/lD7NM1PxWLM.jpg?size=1080x720&quality=95&sign=213cc431d5836b35402ef0392d8be844&type=album'
        },
        {
            img: 'https://sun9-29.userapi.com/impg/if-3JNyfbIVZ3rWDy5jfqckIwwrNq6q4eA8tQQ/Bx-5mfiFXOk.jpg?size=1080x720&quality=95&sign=f3138b6260d632ab4cb231ca7894d0a0&type=album'
        },
        {
            img: 'https://sun9-40.userapi.com/impg/akYge6qrzYj03BwbGHgjgerHROKE4UM_r8b11g/07z2pBdjBhY.jpg?size=1080x720&quality=95&sign=ce6c4286caca4b4ae1d7bff842fc9aef&type=album'
        },
        {
            img: 'https://sun9-19.userapi.com/impg/AM_HAknMYE7Pjbo0dNGj4nOCqXRxSPMckK52Dw/-aw_sXoTmmU.jpg?size=1080x720&quality=95&sign=dbb654a650778a6a7d8e0b4e12cd8cb2&type=album'
        }

    ]

    return (
        <div className="home_page_container">


            {/* <model-viewer
                src={ThreeDItem && ThreeDItem}
                className="model-viewer"
                // shadow-intensity="2"
                camera-controls
                // disable-zoom
                ar
                autoplay
                style={{
                    width: '100%',
                    height: '600px',
                }}
            >
            </model-viewer> */}

            <header>

                <div className="header_slogan">
                    <p className='p1'>GOLDEN FLOWERS <br />Сash&Сarry</p>
                    <p className='p2'>ВСЕ ДЛЯ ЦВЕТОЧНОГО БИЗНЕСА</p>
                </div>


                <div className="slide_wrapper">
                    
                    <Slider
                        loop={true}
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fDuztNgtajw?si=8FXgbBLZj8AI0wdv" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <div className="main_title_wrapper">

                <div className="slide_wrapper">
                    <Slider
                        loop={true}
                        options={sliderMainOptions}
                    />
                </div>

                <div className="main_slogan">

                    <div className="main_slogan_text">
                        <h1>Только свежие цветы и растения из плодородной почвы</h1>
                        <p>Кроме того, на складе всегда имеются товары для ухода за растениями: грунт и почвосмеси, минеральные и органические удобрения, подкормки по оптовым ценам. Для владельцев салонов цветов и флористов представлен большой ассортимент аксессуаров для создания букетов
                        </p>
                        <div className="content_button">
                            <Button
                                btnText={'Коллекция'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                                href={'/about/#collection'}
                            />
                        </div>
                    </div>

                </div>

            </div>

            <div className="home_map_wrapper">

                <div className="map_wrapper_text">
                    <span>Импортируем товары со всех континентов мира</span>
                    <p>Мы поставляем цветы, растения и аксессуары из Голландии, Италии, Испании, Израиль, США, Турция, Эквадор, Коста Рика, Колумбия, Эфиопия, Уганда, Кения и др.</p>

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
        </div>
    )
}

export default Index