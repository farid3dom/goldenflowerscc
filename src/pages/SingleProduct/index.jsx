import React, { useEffect, useState } from 'react';
import './style.scss';

////IMPORT COMPONENT
import Button from '@components/Button/Index';
import BackBtn from '@components/BackBtn/index';

////IMPORT DB
import FlowersData from '@db/flowers.json';
import PlantsData from '@db/plants.json';
import AccessoriesData from '@db/accessories.json';

///Import React router Dom
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const Index = () => {
   const lang = 'en';
   const location = useLocation();
   const navigate = useNavigate();
   const searchParams = new URLSearchParams(location.search);
   const [productData, setProductData] = useState(null);

   useEffect(() => {
      getProductDatas();
   }, [location]);

   const getProductDatas = async () => {
      switch (searchParams.get('productType')) {
         case 'flowers':
            if (searchParams.get('collection')) {
               let singleData = await FlowersData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await FlowersData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
         case 'plants':
            if (searchParams.get('collection')) {
               let singleData = await PlantsData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await PlantsData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
         case 'accessories':
            if (searchParams.get('collection')) {
               let singleData = await AccessoriesData.find(f => f.inner_URL === searchParams.get('collection'));
               let getDataFromCollection = await singleData.items.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(getDataFromCollection);
            } else {
               let singleData = await AccessoriesData.find(f => f.name['en'].toLowerCase() === searchParams.get('productName'));
               setProductData(singleData);
            }
            break;
      }
   }

   return (
      <div className="single-product_container">
         <div className="product_about">
            <BackBtn className={'btn btn_white hover_gold'} />

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
                  {
                     productData?.plantation &&
                     <div className="product_quantity product-elements__item">
                        <h1>Плантация</h1>
                        <span>{productData?.plantation}</span>
                     </div>
                  }
                  {
                     productData?.flag &&
                     <div className="product_color product-elements__item">
                        <h1>Страна поставщика</h1>
                        <span>{productData?.flag[lang]}</span>
                     </div>
                  }
                  {
                     productData?.quantity &&
                     <div className="product_quantity product-elements__item">
                        <h1>Количество в упаковке (шт.)</h1>
                        <span>{productData?.quantity}</span>
                     </div>
                  }
                  {
                     productData?.color &&
                     <div className="product_color product-elements__item">
                        <h1>Цвет</h1>
                        <span>{productData?.color[lang]}</span>
                     </div>
                  }
                  {
                     productData?.season &&
                     <div className="product_seasons product-elements__item">
                        <h1>Сезон</h1>
                        <span>{productData?.season[lang]}</span>
                     </div>
                  }
                  {
                     productData?.height &&
                     <div className="product_size product-elements__item">
                        <h1>Высота (см)</h1>
                        <span>{productData?.height}</span>
                     </div>
                  }
                  {
                     productData?.care &&
                     <div className="product_care product-elements__item">
                        <h1>Уход</h1>
                        <span>{productData?.care[lang]}</span>
                     </div>
                  }
                  {
                     productData?.department &&
                     <div className="product_care product-elements__item">
                        <h1>Уход</h1>
                        <span>{productData?.department}</span>
                     </div>
                  }
               </div>
               {/* <div className="product_button">
                  <Button
                     btnText={'Перейти в магазин'}
                     className={'btn btn_white hover_gold'}
                     icon={'arrow-right'}
                     href={'https://gfcc.clients.site/'}
                     target={'_blank'}
                  />
               </div> */}
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
      </div >

   )
}

export default Index