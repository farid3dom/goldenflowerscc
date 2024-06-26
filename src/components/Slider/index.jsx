import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";



function Index({ options }) {
    return (
        <Swiper className="mySwiper">

            {options?.map((o, i) => (
                <SwiperSlide>
                    
                    <div className="slider_item">
                        <img src={require(`${o?.img}`)}/>
                        <h3>{o.title && o.title}</h3>
                    </div>

                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default Index