import React from 'react'
import './style.scss'

//Import Images
import FlowerBG from '../../assets/media/images/materials/flowers_bg.jpg'

const Index = () => {
    return (
        <div className="flowers_page_container">
            <img src={FlowerBG} alt="flower_bg" />
            <div className="flowers_container_inner">
                <header>
                    <h2>Цветы</h2>
                </header>

                <div className="main_container">
                    <div className="main_container_inner">
                        <h2>Вы никогда не найдете столько растений и цветов!</h2>
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
        </div>
    )
}

export default Index