import React from 'react';
import './style.scss';

//Import images
import ThirtyYears from '../../assets/media/images/30years.png';
import Map from '../../assets/media/images/map_gold.png'
import Vitrin from '../../assets/media/images/materials/vetrin.JPG'

//Import Components
import Button from '../../components/Button/Index';

//import video
import HeaderVid from '../../assets/media/videos/videoplayback.mp4';
//import MainVid from '../../assets/media/videos/videoplayback_2.mp4'

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
                        <p className='content_title'>Уже 30 лет мы являемся премиальной цветочной базой в области растений и цветов.</p>

                        <span className='content_desc'>Компания «GoldenFlowers Cash&Carry»™ уже не первый год является поставщиком цветов от ведущих мировых производителей на российский рынок.
                        Главная цель компании – обеспечение только качественной и новой цветочной продукцией по низким ценам в максимально короткие сроки. Этому способствуют эффективная логистика и собственные торговые представители во всех странах поставщиках.</span>

                        <div className="content_button">
                            <Button
                                btnText={'История компании'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                            />
                        </div>
                    </div>
                    <div className="buta_right_content">
                        <img src={ThirtyYears} alt="" />
                    </div>
                </div>
            </div>

            <div className="main_video_wrapper">
                    {/* <video src={MainVid} loop autoPlay muted></video> */}
                    <img src={Vitrin} alt="vitrin" />
                    <div className="main_slogan">
                        <div className="main_slogan_text">
                            <span>Только свежие цветы и растения из плодородной земли</span>
                        </div>
                    </div>
            </div>
            <div className="home_map_wrapper">
                
                <div className="home_map_wrapper_inner">

                    <img src={Map} alt="map" />

                    <div className="map_wrapper_text">
                        <h2>Импортируем товары со всех континентов мира</h2>
                        <div className="content_button">
                            <Button
                                btnText={'Наши поставщики'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
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