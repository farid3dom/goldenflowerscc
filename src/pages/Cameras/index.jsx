import React from 'react'
import './style.scss'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';
import HeaderRepeat from '@/layout/HeaderRepeat/index'

// IMAGES
// import Kenya from "@assets/media/images/camera/kenya.jpg"
// import Xriz from "@assets/media/images/camera/xriz.jpg"
// import Ekv from "@assets/media/images/camera/ekv.jpg"

// COMPONENTS
import Left from '@/assets/media/images/left.png'
import Right from '@/assets/media/images/right.png'



function index() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="cameras_container">

            <HeaderRepeat
                title={'Камеры'}
                img={'https://sun9-11.userapi.com/impg/SV5dio_s-WuOSeti8urkzfFtF8vPfIh9ZsH1QQ/Gz72YJKRNHk.jpg?size=2560x1707&quality=95&sign=b15efe0d2281fdc23eeca731ce6ee10c&type=album'}
            />
            <div className='cameras_container'>
                <div className="cam_container_inner">

                    <div className="carousel">

                        <button className="carousel_button carousel__button--left">
                            <img src={Left} alt="" />
                        </button>

                        <div className="carousel__track-container">
                            <ul className="carousel__track">
                                {/* <li className='carousel__slide'>
                                    <img src={Kenya} alt="" />
                                </li>
                                <li className='carousel__slide'>
                                    <img src={Xriz} alt="" />
                                </li>
                                <li className='carousel__slide'>
                                    <img src={Ekv} alt="" />
                                </li> */}
                            </ul>
                        </div>

                        <button className="carousel_button carousel__button--right">
                            <img src={Right} alt="" />
                        </button>

                        <div className="carousel__nav">
                            <button className="carousel__indicator"></button>
                            <button className="carousel__indicator"></button>
                            <button className="carousel__indicator"></button>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default index