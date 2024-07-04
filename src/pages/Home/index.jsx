import React from 'react';
import './style.scss';



//Import images
// import Map from '../../assets/media/images/map_gold.png'



//Import Components
import Button from '../../components/Button/Index';
import Slider from '../../components/Slider/index';



const Index = () => {

    let sliderOptions = [
        {
            img: '/media/images/materials/gold_plants.jpg'
        },
        {
            img: '/media/images/materials/gold_vases.jpg'
        },
        {
            img: '/media/images/materials/gold_black.jpg'
        }

    ]

    let sliderMainOptions = [
        {
            img: '/media/images/materials/flowers/orchidaceae.jpg'
        },
        {
            img: '/media/images/materials/flowers/anthurium.jpg'
        },
        {
            img: '/media/images/materials/flowers/chrysanthemum.jpg'
        },
        {
            img: '/media/images/materials/flowers/fressia.jpg'
        },
        {
            img: '/media/images/materials/flowers/hydrangea.jpg'
        },
        {
            img: '/media/images/materials/flowers/roses.jpg'
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KjOUOvrEwLY?si=BFUtqLk7_QYqFIBv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vero a distinctio quis reprehenderit id provident dignissimos itaque eveniet!
                        </p>
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

            </div>

            <div className="home_map_wrapper">

                <div className="map_wrapper_text">
                    <span>Импортируем товары со всех континентов мира</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quo tenetur repellendus eligendi, natus laboriosam. Doloremque dolores maiores dicta molestiae!</p>

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