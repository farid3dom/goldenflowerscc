import React, { useEffect, useState } from 'react';

//Import Layout
import HeaderRepeat from '../../layout/HeaderRepeat/index';

//Import Component
import Flowers from './Flowers/index';
import Plants from './Plants/index';
import Accessories from './Accessories/index';

//Import DB
import PagesData from '../../db/pages.json';

//Import react router dom
import { useLocation } from 'react-router-dom';

const Index = () => {
   let lang = 'en';
   const location = useLocation();
   const [pageData, setPageData] = useState({});

   useEffect(() => {
      let currentLocation = location.pathname.split('/')[2];
      let pageValues = PagesData.find((p, i) => p.page_name === currentLocation)
      setPageData({
         headerImg: pageValues.headerWrapper.img,
         headerTitle: pageValues.headerWrapper.title[lang],
         galleryTitle: pageValues.galleryTitle[lang],
         page_URL: currentLocation
      });
   }, [location]);

   return (
      <div className="products-page__container">
         <HeaderRepeat
            title={pageData?.headerTitle}
            img={pageData?.headerImg}
         />

         <div className="products_content_wrapper">
            <div className="content_wrapper_inner">
               <p className='content_title' dangerouslySetInnerHTML={{ __html: pageData?.galleryTitle }}></p>

               {
                  pageData.page_URL === 'flowers' ?
                     <Flowers />
                     : pageData.page_URL === 'plants' ?
                        <Plants />
                        : pageData.page_URL === 'accessories' ?
                           <Accessories /> : null
               }
            </div>
         </div>
      </div>
   )
}

export default Index