import React from 'react';
import './style.scss';

//Import images
import LogoMini from '../../assets/icons/logo_mini.png';
import Map from '../../assets/media/images/map_purple.png'

//Import Components
import Button from '../../components/Button/Index';

//import video
import HeaderVid from '../../assets/media/videos/videoplayback.mp4';
import MainVid from '../../assets/media/videos/videoplayback_2.mp4'

const Index = () => {
    return (
        <div className="home_page_container">
            <header>
                <div className="header-video__wrapper">
                    <video src={HeaderVid} loop autoPlay muted></video>
                    <div className="header_slogan">
                        <p>GOLDEN FLOWERS <br />cash & carry</p>
                    </div>
                </div>
            </header>

            <div className="home_buta_wrapper">
                <div className="home_buta_wrapper_inner">
                    <div className="buta_left_content">
                        <h2 className='content_title'>Уже 30 лет мы являемся премиальной цветочной базой в области растений и цветов.</h2>

                        <span className='content_desc'>Компания «GoldenFlowers Cash&Carry»™ уже не первый год является поставщиком цветов от ведущих мировых производителей на российский рынок.
                        Главная цель компании – обеспечение только качественной и новой цветочной продукцией по низким ценам в максимально короткие сроки. Этому способствуют эффективная логистика и собственные торговые представители во всех странах поставщиках.</span>

                        <div className="content_button">
                            <Button
                                btnText={'История компании Golden Flowers'}
                                className={'btn btn_white hover_gold'}
                            />
                        </div>
                    </div>
                    <div className="buta_right_content">
                        <img src={LogoMini} alt="" />
                    </div>
                </div>
            </div>

            <div className="main_video_wrapper">
                    <video src={MainVid} loop autoPlay muted></video>
                    <div className="main_slogan">
                        <div className="main_slogan_text">
                            <span>ТОЛЬКО СВЕЖИЕ ЦВЕТЫ И РАСТЕНИЯ
                                <br/> из плодородной земли</span>
                        </div>
                    </div>
            </div>

            <div className="home_map_wrapper">

                

                <div className="home_map_wrapper_inner">

                    <img src={Map} alt="map" />

                    <div className="map_wrapper_text">
                        <h2>
                            ИМПОРТИРУЕМ ТОВАРЫ СО ВСЕХ КОНТИНЕНТОВ МИРА
                        </h2>
                        <div className="content_button">
                            <Button
                                btnText={'НАШИ ПОСТАВЩИКИ'}
                                className={'btn btn_white hover_purple'}
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