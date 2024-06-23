import React from 'react';
import './style.scss';

//Import images
import ThirtyYears from '../../assets/media/images/30years.png';
import Map from '../../assets/media/images/map_gold.png'
import Vitrin from '../../assets/media/images/materials/hydrangea.jpg'
import Sign from '../../assets/media/images/signature.png'
// import Slide1 from '../../assets/media/images/materials/vitrin/komnata_vitrin_isci.jpg'
// import Slide2 from '../../assets/media/images/materials/vitrin/komnata_vitrin_qost.jpg'
// import Slide3 from '../../assets/media/images/materials/vitrin/vitrin_qost.jpg'
// import Slide4 from '../../assets/media/images/materials/vitrin/komnata_vitrin_isci.jpg'

//Import Components
import Button from '../../components/Button/Index';

//import video
//import HeaderVid from '../../assets/media/videos/videoplayback.mp4';
//import MainVid from '../../assets/media/videos/videoplayback_2.mp4'

const Index = () => {
    return (
        <div className="home_page_container">
            <header>
                {/* <div className="slideshow">
                    <div className="slide_wrapper">
                        <div className="slide1">
                            <img src={Slide1} alt="" />
                        </div>
                        <div className="slide2">
                            <img src={Slide2} alt="" />
                        </div>
                        <div className="slide3">
                            <img src={Slide3} alt="" />
                        </div>
                        <div className="slide4">
                            <img src={Slide4} alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="header_slogan">
                    <p>GOLDEN FLOWERS <br />cash & carry</p>
                </div>
            </header>

            <div className="about_wrapper">
                <div className="about_wrapper_inner">
                    <div className="left_content">
                        <p className='content_title'>Кто мы?</p>

                        <span className='content_desc'>Компания GoldenFlowers Cash&Carry уже не первое десятилетие является поставщиком цветов, растений и аксессуаров от ведущих мировых производителей на российский рынок и одним из самых крупный оптовых баз для цветочного бизнеса на регионе Москвы. Здесь вы найдете все для цветочного бизнеса!</span>

                        <div className="content_button">
                            <Button
                                btnText={'Подробнее'}
                                className={'btn btn_white hover_gold'}
                                icon={'arrow-right'}
                            />
                        </div>
                    </div>
                    <div className="right_content">
                        <video preload='metadata' src="https://www.youtube.com/watch?v=wHK5GgGLj_0" ></video>
                    </div>
                </div>
            </div>

            <div className="main_title_wrapper">
                <img src={Vitrin} alt="vitrin" />
                <div className="main_slogan">
                    <div className="main_slogan_text">
                        <img src={Sign} alt="" />
                        <span>Только свежие цветы и растения из плодородной земли</span>
                    </div>
                </div>
            </div>
            <div className="home_map_wrapper">

                <div className="home_map_wrapper_inner">

                    <img src={Map} alt="map" />

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