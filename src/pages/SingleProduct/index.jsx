import React, { useEffect, useState } from 'react';
import './style.scss';

import Slider from '../../components/Slider/index';
import Button from '../../components/Button/Index';

////IMPORT UTILS
import Flowers from '../../utils/flowers.json';
import Grund from '../../utils/grunt.json';

///Import React router Dom
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const Index = () => {
   const lang = 'ru';
   const location = useLocation();
   const navigate = useNavigate();
   const { productType, productName } = useParams();
   const searchParams = new URLSearchParams(location.search);
   const searchValue = Array.from(searchParams.values());
   const [productData, setProductData] = useState(null);

   useEffect(() => {
      getProductDatas();
   }, []);

   const getProductDatas = async () => {
      if (searchParams.get('collection')) {
         let singleData = await Flowers.find(f => f.inner_URL === searchParams.get('collection'));
         let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
         console.log(getDataFromCollection);
      } else {
         let singleData = await Flowers.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
         setProductData(singleData);
      }
   }

   return (
      <div className="single-product_container">
         <div className="product_about">
            <h1 className='product_title'>{productData?.name[lang]}</h1>
            <span className='product_description' dangerouslySetInnerHTML={{ __html: productData?.desc && productData.desc[lang] }}></span>
            {/* <span className='product_description' dangerouslySetInnerHTML={{ __html: Grund[1].desc['ru'] }}></span> */}
            {/* <div className="product_flag">
               {
                  productData?.productInfo?.map((p, i) => (
                     <div className="single-flag__item" key={i}>
                        <img src={p.img} alt="" />
                        <p>{p.title}</p>
                     </div>
                  ))
               }
            </div> */}
            <div className="product_elements">
               <div className="product_elements_wrapper">
                  <div className="product_type_0">
                     <div className="product_quantity">
                        <h1>Плантация</h1>
                        <span>{productData?.plantation ? productData.plantation : '-'}</span>
                     </div>
                     <div className="product_color">
                        <h1>Страна поставщика</h1>
                        <span>{productData?.flag ? productData?.flag[lang] : '-'}</span>
                     </div>
                  </div>
                  <div className="product_type_1">
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
                     <img src={i.img} key={index} alt="" />
                  ))
               }
            </div>
         </div>

         <Outlet />
      </div>

   )
}

export default Index