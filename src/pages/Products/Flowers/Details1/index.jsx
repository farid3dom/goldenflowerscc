import React, { useEffect, useState } from 'react';
import './style.scss';

//Import Images
import Loading from '../../../../assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '../../../../layout/HeaderRepeat/index';

//Import Component
import Button from '../../../../components/Button/Index';
import Input from '../../../../components/Input/Index';
import Flowers from '../index';
import GalleryCard from '../../../../components/GalleryCard/Index';

//Import Utils
import PagesUtils from '../../../../utils/pages.json';
import FlowersUtils from '../../../../utils/flowers.json';

//Import react router dom
import { Outlet, useLocation } from 'react-router-dom'

const Index = () => {
   const maxLength = 48;
   let lang = 'en';
   const location = useLocation();
   const [visibleCardLength, setVisibleCardLength] = useState(maxLength);
   const [galleryLoading, setGalleryLoading] = useState(true);
   const [pageData, setPageData] = useState({});
   const [galleryData, setGalleryData] = useState([]);

   useEffect(() => {
      let currentLocation = location.pathname.split('/')[2];
      let flowerName = location.pathname.split('/')[3];
      let pageValues = PagesUtils.find((p, i) => p.page_name === currentLocation)
      setPageData({
         headerImg: pageValues.headerWrapper.img,
         headerTitle: pageValues.headerWrapper.title[lang],
         galleryTitle: pageValues.galleyTitle[lang],
         page_URL: currentLocation,
         flowerName: flowerName
      });
   }, [location]);

   useEffect(() => {
      let selectedFlowerData = FlowersUtils.find((f, i) => f.inner_URL === pageData.flowerName);
      setGalleryData(selectedFlowerData);

      setTimeout(() => {
         setGalleryLoading(false);
      }, 500)
   }, [pageData]);

   return (
      <div className="products-page__container">
         <HeaderRepeat
            title={pageData?.headerTitle}
            img={pageData?.headerImg}
         />

         <div className="products_content_wrapper">
            <div className="content_wrapper_inner">
               <p className='content_title' dangerouslySetInnerHTML={{ __html: pageData?.galleryTitle }}></p>

               <div className="details__container">

                  {/* <div className="search_bar">
                     <Input
                        value={searchInputValue}
                        type={'text'}
                        className={'input_white'}
                        placeholder={'Искать...'}
                        icon={'search'}
                        handleChange={(e) => setSearchInputValue(e.target.value)}
                        handleBlur={searchSubmit}
                        submitHandler={searchSubmit}
                     />
                  </div> */}

                  {galleryLoading &&
                     <div className="loading_wrapper">
                        <img className='loading_icon' src={Loading} alt='' />
                     </div>
                  }
                  <div className="flowers_gallery gallery_grid_wrapper">


                     {!galleryLoading && galleryData?.length === 0 ?
                        <div className="no_result_wrapper">
                           <h2>Товар не найден...</h2>
                        </div>
                        :
                        null
                     }

                     {!galleryLoading && galleryData?.items?.map((f, i) => (
                        <GalleryCard
                           key={i}
                           img={f.images && f.images[0].img}
                           title={f?.name[lang]}
                           href={
                              `/product?productType=flowers&productName=${f.name['en'].toLowerCase()}&collection=${galleryData.inner_URL}`
                           }
                        />
                     ))
                     }

                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Index