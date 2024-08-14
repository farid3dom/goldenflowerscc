import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';
// import './marquee.js';

//Import Components
import Button from '@components/Button/Index';
import Slider from '@components/Slider/index';
import MapSVG from '@components/Map/map.svg';

//Import Utils
import { useTranslation } from 'react-i18next';

///Import Constants
import { pageVariants, pageTransition } from '@constants/framerSettings.js';
import ParallaxText from '@components/Parallax';

const Index = () => {
    const { t, i18n } = useTranslation();

    let sliderOptions = [
        // {
        //     img: 'https://sun9-21.userapi.com/impg/NE-kwgNCDEvTpuP6poMQYoGtO7Ua8T-4yK6KZg/O2dDUcWUBQw.jpg?size=1216x832&quality=95&sign=eb6f1a3f0ce2e0231ac102310ed9f9d5&type=album'
        // },
        // {
        //     img: 'https://sun9-47.userapi.com/impg/aWv40Qsp8VC0zhUq0ANKb_4y7jXeCqJFGi-h6A/QYUpjoTH_GI.jpg?size=1216x832&quality=95&sign=5187438ce2d23eee6b57157d028b4006&type=album'
        // },
        // {
        //     img: 'https://sun9-53.userapi.com/impg/_BCl1gT8S1drOPevOtFY6u5JRZhaoe_DFDPMjQ/Sz7iM2EZgZQ.jpg?size=1216x832&quality=95&sign=da2ca899a9d9b2fa6d3e23fec8352877&type=album'
        // },
        // {
        //     img: 'https://sun9-41.userapi.com/impg/TGyE6UbPtOQngAH5jkDf-FZ0pj-KVgBiiPnmaA/v2lsBASwo4Q.jpg?size=1216x832&quality=95&sign=36c05b0287ad903bc7e276e9e999c9bf&type=album'
        // }

        {
            img: 'https://sun9-72.userapi.com/impg/hRg9GAGmbSj24DyQ8CmSpSiRDv-p9kBC8C-kgg/haSsPngG0YI.jpg?size=2560x1707&quality=95&sign=9e1e1c8fb37cc71f1be2a3f3463def12&type=album'
        }
        // {
        //     img: 'https://sun9-76.userapi.com/impg/2kejy3hH6Yy-Y7gTL5w1f5o2DMTuWZwFlRbGXA/qb3XcRR4TCg.jpg?size=2560x1707&quality=95&sign=d0f4b5ffb13bc0b9354889ee5a54641a&type=album'
        // },
        // {
        //     img: 'https://sun9-48.userapi.com/impg/AgXdhv0n6IisiPy8R02oxhVYv3KNbadmUsTUIA/SDN-vEvGccI.jpg?size=2560x1707&quality=95&sign=2021863518e97a29440d9e0f93d34cb0&type=album'
        // }
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
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="home_page_container">

            <div className="fixed-img__wrapper"></div>

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

                    <div className="yandex_otziv">
                        <iframe src="https://yandex.ru/sprav/widget/rating-badge/57660294184?type=rating&theme=dark"></iframe>
                    </div>
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
                        <p>Кроме того, на складе всегда имеются товары для ухода за растениями: грунт и почвосмеси, минеральные и органические удобрения, подкормки по оптовым ценам. Для владельцев салонов цветов и флористов представлен большой ассортимент аксессуаров для создания букетов.
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

            <div className="scroller_container">
                <h1>Плантации</h1>
                <div className="scroller_departments">

                    <div className="scroll_flowers scroll_parts">
                        <div className="scroller_text">
                            <h1>Цветы</h1>
                        </div>

                        <ParallaxText baseVelocity={-3} size={2}>
                            <img src="https://sun9-48.userapi.com/impg/nMctEaxRZdeF4u3ad-nnx4aH06fvtGNBVzAWiw/4qNNq6-VWP4.jpg?size=1080x720&quality=95&sign=6961a86d4edb0d31f7e8b4d1295badf1&type=album" />
                            <img src="https://sun9-40.userapi.com/impg/1ENGAYDDpURdfP4tKwQJFr0Xe7iHKlM5R5ozwQ/XcJlM2tCL6U.jpg?size=1080x720&quality=95&sign=ede28e0ac82d593a3f7c4f32ec257897&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/9sKkMp-lAaxDiQUqr0hXWvi2nPOjZXUtQO7QXA/cKfXbojIP6A.jpg?size=1080x720&quality=95&sign=c5c4e2fbbcc17fda22009b9412cddf72&type=album" />
                            <img src="https://sun9-15.userapi.com/impg/xvDeQLcCHmOfwY2Xnsw5eadfdj_Uyu_7HMbFcQ/zBYQhowM-fw.jpg?size=1080x720&quality=95&sign=6e131275efe20b7edda90aa959611ff3&type=album" />
                            <img src="https://sun9-21.userapi.com/impg/arYn0Oo2rzIy09CoQ58jlmEceElVpzsXeZQihg/IcWy4X15pi4.jpg?size=1080x720&quality=95&sign=c4ab4e5f38c73529eb38cb214f516fd0&type=album" />
                        </ParallaxText>
                    </div>

                    <div className="scroll_plants scroll_parts">
                        <ParallaxText baseVelocity={3} size={2}>
                            <img src="https://sun9-34.userapi.com/impg/1R5J3N2P5dbh20e4THF4I_df9_MYlyFNaN6iZQ/-DvJaU3lgac.jpg?size=1080x720&quality=95&sign=cd52d4ac54a7096e55d3255ba9911923&type=album" />
                            <img src="https://sun9-54.userapi.com/impg/dEYVhkKVYhfv5n1GtqvnPIfC83khj3w2FZZ4Mw/eXfLzvJLtSc.jpg?size=1080x720&quality=95&sign=4aa9df82d16419e4c7c21814b276914f&type=album" />
                            <img src="https://sun9-26.userapi.com/impg/Ux1bIswMAsx5cJuDCOyhOVRh0R4iEPnmAnxaFg/c52T3tfATFY.jpg?size=1080x720&quality=95&sign=ec89164171e9f51760f45a117bdbf011&type=album" />
                            <img src="https://sun9-80.userapi.com/impg/wCpJPkYemI6V8nZl2p9NOn8Mxs7sLNPF9Ao6mg/yahR2arSSW0.jpg?size=1080x720&quality=95&sign=e88a5bf10f434e81b3ad75df0750b531&type=album" />
                            <img src="https://sun9-1.userapi.com/impg/Ekqc3MyVhPa5rJITw149XXX4gkqUNe73cTpbqA/9RgV5lC2Nfc.jpg?size=1080x720&quality=95&sign=ba625321c16f08a073d0e4c7b6eddd37&type=album" />
                        </ParallaxText>

                        <div className="scroller_text">
                            <h1>Растения</h1>
                        </div>
                    </div>

                    <div className="scroll_accessories scroll_parts">
                        <div className="scroller_text">
                            <h1>Аксессуары</h1>
                        </div>

                        <ParallaxText baseVelocity={-3} size={2}>
                            <img src="https://sun9-35.userapi.com/impg/xV-bwTCjzCyRUkAm2bawKS6VzHKJ-2OQAZHL1g/V-g7OucFuT8.jpg?size=1080x720&quality=95&sign=7893ae8957527f4c89ca97be863408ed&type=album" />
                            <img src="https://sun9-65.userapi.com/impg/PiG_CJClmW03ttlJ3nIh0ujga2lENQ1HISZsbw/2TXiywq56JE.jpg?size=1080x720&quality=95&sign=15f783bdb1e386d19d7379e5acb51c7e&type=album" />
                            <img src="https://sun9-22.userapi.com/impg/VvHm-8nVEnStN0Dp8ovhmttKRNutvp76aXj9wg/TsdL8PbslDI.jpg?size=1080x720&quality=95&sign=8e55367911e5e5fa6381a9cff3b43d29&type=album" />
                            <img src="https://sun9-79.userapi.com/impg/4EftWAYK4nnwT77RogS6G7rw0ORyudCyvidRPg/OM1gkXErFMI.jpg?size=1080x720&quality=95&sign=40be25d2701cb2b9535f04fd424d1dc8&type=album" />
                            <img src="https://sun9-42.userapi.com/impg/xaPAdb3rX0iFAZY2y23ny_LLyE33pqMOV7LyAg/VbsjP3bVF6g.jpg?size=1080x720&quality=95&sign=5b3973438055dd29264e83a515a056a6&type=album" />
                        </ParallaxText>
                    </div>
                </div>
            </div>

            <div className="home_map_wrapper">
                <div className='map'>
                    <img src="https://media.discordapp.net/attachments/974017405045076028/1273302896070623232/World_Map_1.png?ex=66be1f3b&is=66bccdbb&hm=36d8d30ab47f0c335c8fc39baf0b323a81859e0b7810779e7d0d20384671216d&=&format=webp&quality=lossless&width=1440&height=602" />
                    <div className='map_wrapper'>
                        <div className="map_wrapper_text">
                            <span>Импортируем товары со всех континентов мира</span>
                            <p>Мы поставляем цветы, растения и аксессуары из Голландии, Италии, Германии, Испании, Израиля, США, Китая, Турции, Азербайджана, Армении, Эквадора, Коста Рики, Колумбии, Эфиопии, Уганды, Кении и др.</p>
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
            </div>
        </motion.div>
    )
}

export default Index