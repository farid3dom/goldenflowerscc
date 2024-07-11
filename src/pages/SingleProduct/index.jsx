import React, { useEffect, useState } from 'react';
import './style.scss';

import Slider from '../../components/Slider/index';
import Button from '../../components/Button/Index';

////IMPORT UTILS
import Flowers from '../../utils/flowers.json';

///Import React router Dom
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {

   const lang = 'ru';
   const location = useLocation();
   const navigate = useNavigate();
   const searchParams = new URLSearchParams(location.search);
   const searchValue = Array.from(searchParams.values());
   const [productData, setProductData] = useState(null);

   console.log(productData);

   useEffect(() => {
      getProductDatas();
      console.log('test')
   }, []);

   const getProductDatas = () => {
      switch (searchValue[0]) {
         case 'Flowers':
            setProductData(Flowers[searchValue[1]])
            break;
         default:
            setProductData(null);
            navigate('/');
            console.log('asjdh')
      }
   }

   return (
      <div className="single-product_container">
         <div className="product_about">
            <h1 className='product_title'>{productData?.name[lang]}</h1>
            <span className='product_description'>{productData?.desc && productData.desc[lang]}</span>

            <div className="product_flag">
               {
                  productData?.productInfo?.map((p, i) => (
                     <div className="single-flag__item" key={i}>
                        <img src={p.img} alt="" />
                        <p>{p.title}</p>
                     </div>
                  ))
               }
            </div>

            <div className="product_elements">
               <div className="product_elements_wrapper">
                  <div className="product_type">
                     <div className="product_quantity">
                        <h1>Количество в упаковке (шт.)</h1>
                        <span>{productData?.quantity ? productData.quantity : '-'}</span>
                     </div>
                     <div className="product_color">
                        <h1>Цвет</h1>
                        <span>{productData?.color ? productData?.color[lang] : '-'}</span>
                     </div>
                  </div>
                  <div className="product_type_2">
                     <div className="product_seasons">
                        <h1>Сезон</h1>
                        <span>{productData?.season ? productData?.season[lang] : '-'}</span>
                     </div>
                     <div className="product_size">
                        <h1>Высота (см)</h1>
                        <span>{productData?.height ? productData.height : '-'}</span>
                     </div>
                  </div>
                  <div className="product_care">
                     <h1>Уход</h1>
                     <span>{productData?.care ? productData?.care[lang] : '-'}</span>
                  </div>
               </div>
               <div className="product_button">
                  <Button
                     btnText={'Перейти в магазин'}
                     className={'btn btn_white hover_gold'}
                     icon={'arrow-right'}
                     href={'https://gfcc.clients.site/'}
                     target={'_blank'}
                  />
               </div>
            </div>
         </div>
         <div className="product_info">

            <div className="images__wrapper">
               {
                  productData?.images?.map((i, index) => (
                     <img src={i.img} alt="" />
                  ))
               }
            </div>
         </div>
      </div>

   )
}

export default Index