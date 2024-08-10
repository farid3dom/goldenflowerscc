import React from 'react'
import './style.scss';
import { motion } from 'framer-motion';

import HeaderRepeat from '@layout/HeaderRepeat/index'

//import images
import Num1 from '@assets/icons/logo_mini.png'
import Num2 from '@assets/icons/flowers_icons/chrysanthemum.png'
import Num3 from '@assets/icons/flowers_icons/rose.png'
import Num5 from '@assets/icons/flowers_icons/rose.png'
import Num7 from '@assets/icons/flowers_icons/rose.png'
import Num4 from '@assets/icons/flowers_icons/exotic.png'
import Num6 from '@assets/icons/flowers_icons/domestic.png'
import Num8 from '@assets/icons/flowers_icons/packaging.png'

///Import Constants
import { pageVariants, pageTransition } from '@constants/framerSettings.js';

function index() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="contact_page">

            <div className="fixed-img__wrapper"></div>

            <HeaderRepeat
                title={'Контакты'}
                img={'https://sun9-11.userapi.com/impg/SV5dio_s-WuOSeti8urkzfFtF8vPfIh9ZsH1QQ/Gz72YJKRNHk.jpg?size=2560x1707&quality=95&sign=b15efe0d2281fdc23eeca731ce6ee10c&type=album'}
            />

            <div className="contacts_content_wrapper">
                <div className="content_inner">

                    <div className="number_container">
                        <div className="number_text">
                            <p className='p1'>Позвоните для получения подробной информации.<br />Мы работаем <span>круглосуточно!</span></p>
                            <p className='p2'>Нажмите чтобы позвонить.<br />Мы работаем <span>круглосуточно!</span></p>
                        </div>
                        <div className="numbers">

                            <a href='tel:84957818888'>
                                <span><img src={Num1} width={35} /></span>
                                Главный офис
                                <p>+7 (495) 781 88 88</p>
                            </a>

                            <a href='tel:89251665204'>
                                <span><img src={Num2} width={35} /></span>
                                Хризантема и Зелень
                                <p>+7 (925) 166 52 04</p>
                            </a>

                            <a href='tel:89254533969'>
                                <span><img src={Num3} width={35} /></span>
                                Роза Кения
                                <p>+7 (925) 453 39 69</p>
                            </a>

                            <a href='tel:89645117113'>
                                <span><img src={Num4} width={35} /></span>
                                Экзотика
                                <p>+7 (964) 511 71 13</p>
                            </a>

                            <a href='tel:89672921155'>
                                <span><img src={Num5} width={35} /></span>
                                Роза Эквадор
                                <p>+7 (967) 292 11 55</p>
                            </a>

                            <a href='tel:89266355181'>
                                <span><img src={Num6} width={35} /></span>
                                Комнатные растения
                                <p>+7 (926) 635 51 81</p>
                            </a>

                            <a href='tel:89060280248'>
                                <span><img src={Num7} width={35} /></span>
                                Роза на воде
                                <p>+7 (906) 028 02 48</p>
                            </a>

                            <a href='tel:89654118885'>
                                <span><img src={Num8} width={35} /></span>
                                Упаковка
                                <p>+7 (965) 411 88 85</p>
                            </a>

                        </div>
                    </div>
                    <div className="map">
                        <div className='map_inner'>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.762914%2C55.567408&mode=poi&poi%5Bpoint%5D=37.761437%2C55.567365&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57660294184&z=18.14" width={500} height={500} frameBorder={1} allowfullscreen={true} style={{ position: 'relative' }}>
                            </iframe>
                        </div>
                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default index