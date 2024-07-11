import React from 'react';
import './style.scss';

import Slider from '../../components/Slider/index'
import Button from '../../components/Button/Index'

const index = () => {

   let sliderProduct = [
      {
         img: 'https://sun9-80.userapi.com/impg/mkmdt_td8uxMAvHH9cMjLtHuU4wYfCFwyLpPBQ/TQ-heG4KO6k.jpg?size=1080x720&quality=95&sign=e8f462f313c903e5c305bbf23d235236&type=album'
      },
      {
         img: 'https://www.alseedservice.ru/image/cache/173566_7141a04431121ragapantusiskusstvennyjzontichnyjh75smsinij_3_sl003998_3-1000x1000.jpg'
      },
      {
         img: 'https://gardendecor.ru/userfiles/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8%202023/%D0%90%D0%B3%D0%B0%D0%BF%D0%B0%D0%BD%D1%82%D1%83%D1%81%D1%8B5.jpeg'
      },
      {
         img: 'https://www.alseedservice.ru/image/cache/173567_7141a04431123ragapantusiskusstvennyjzontichnyjh75smbelyj_1_sl012952_1-1000x1000.jpg'
      }

   ]

   return (
      <div className="main">
         <div className="product_container">
            <div className="product_container_inner">
               <div className="product_about">
                  <h1>Агапантус</h1>
                  <span>Агапантус - это растение, которое поражает своей изысканной красотой и изящностью. Его густые соцветия из множества небольших колокольчиков создают впечатление неповторимой элегантности. Цветки агапантуса могут быть различных оттенков синего, фиолетового или белого цвета, что придает этому растению особую привлекательность. Аромат агапантуса нежный и деликатный, напоминающий летний бриз с морским оттенком. Это растение часто используется для украшения садов и парков, добавляя им нотку изысканности и шарма.</span>

                  <div className="product_flag">
                     <img src="https://sun9-16.userapi.com/impg/LFc9BwebfRvsK4iQVgFGMCEK4Ovrcp730itC0g/w0YuihbPqug.jpg?size=1080x720&quality=95&sign=e2e6dd8abb74ae0f9df8b679df220d0d&type=album" alt="" className='img_first' />
                     <p className='plantat'>Плантация</p>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/383px-Flag_of_the_Netherlands.svg.png" alt="" />
                     <p className='country'>Страна<br />поставщика</p>
                  </div>
               </div>
               <div className="product_info">
                  <div className="slide_wrapper">
                     <Slider
                        loop={true}
                        options={sliderProduct}
                     />
                  </div>
                  <div className="product_elements">
                     <div className="product_elements_wrapper">
                        <div className="product_type">
                           <div className="product_quantity">
                              <h1>Количество в упаковке (шт.)</h1>
                              <span>10</span>
                           </div>
                           <div className="product_color">
                              <h1>Цвет</h1>
                              <span>Синий Белый</span>
                           </div>
                        </div>
                        <div className="product_type_2">
                           <div className="product_seasons">
                              <h1>Сезон</h1>
                              <span>Зима Лето Весна</span>
                           </div>
                           <div className="product_size">
                              <h1>Высота (см)</h1>
                              <span>70</span>
                           </div>
                        </div>
                        <div className="product_care">
                           <h1>Уход</h1>
                           <span>В тёплое время года Агапантус лучше держать на открытом воздухе (в том числе на балконе), зимой же ему будет лучше в прохладном и освещённом помещении (не более 12 °C). Полив: В весенне-летний период поливать довольно часто и обильно.</span>
                        </div>
                     </div>
                     <div className="product_button">
                        <Button
                           btnText={'Перейти в магазин'}
                           className={'btn btn_white hover_blue'}
                           icon={'arrow-right'}
                           href={'https://gfcc.clients.site/'}
                           target={'_blank'}
                        />
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

   )
}

export default index