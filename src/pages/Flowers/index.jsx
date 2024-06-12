import React from 'react'
import './style.scss';

//Import Images
import FlowerBG from '../../assets/media/images/materials/flowers_bg.jpg';

//Import Layout
import HeaderRepeat from '../../layout/HeaderRepeat/index';

const Index = () => {
    return (
        <div className="flowers_page_container">

            <HeaderRepeat
                title={'Цветы'}
                img={FlowerBG}
            />

            <div className="flowers_content_wrapper">
                <div className="content_wrapper_inner">
                    <p className='content_title'>Вы <span>никогда</span> не найдете столько растений и <span>цветов</span>!</p>
                    <div className="search_bar">
                        <input type="search" />
                    </div>
                    <div className="flowers">
                        <div className="flowers_inner">
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                            <div className="alstromeria">
                                <img src="" alt="" />
                                <h3>Альстромерия</h3>
                            </div>
                        </div>
                    </div>
                    <div className="nav_page_numbers">
                        <div className="nav_page_numbers_container">
                            <a href=""><p>1</p></a>
                        </div>
                        <div className="nav_page_numbers_container">
                            <a href=""><p>2</p></a>
                        </div>
                        <div className="nav_page_numbers_container">
                            <a href=""><p>3</p></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index