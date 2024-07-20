import React, { useEffect, useState } from 'react'
import './style.scss';

//Import Images
import Loading from '../../assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '../../layout/HeaderRepeat/index';

//Import Component
import Button from '../../components/Button/Index';
import Input from '../../components/Input/Index';
import GalleryCard from '../../components/GalleryCard/Index';

//Import Utils
import PagesUtils from '../../utils/pages.json';
import FlowersJSON from '../../utils/flowers.json';
import PlantsJSON from '../../utils/plants.json';
import AccessoriesJSON from '../../utils/accessories.json';
import CooperationsJSON from '../../utils/cooperation.json';

//Import react router dom
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
   const maxLength = 48;
   let lang = 'en';
   const [visibleCardLength, setVisibleCardLength] = useState(maxLength);
   const [loading, setLoading] = useState(false);
   const [galleryLoading, setGalleryLoading] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const searchParams = new URLSearchParams(location.search);
   const searchValue = searchParams.get('s');
   const [pageData, setPageData] = useState({});
   const [galleryData, setGalleryData] = useState([]);
   const [searchInputValue, setSearchInputValue] = useState(searchValue);

   useEffect(() => {
      let currentLocation = location.pathname.split('/')[2];
      let pageValues = PagesUtils.find((p, i) => p.page_name === currentLocation)
      setPageData({
         headerImg: pageValues.headerWrapper.img,
         headerTitle: pageValues.headerWrapper.title[lang],
         galleryTitle: pageValues.galleyTitle[lang],
         page_URL: currentLocation
      });
   }, [location]);

   function getGalleryData() {
      switch (pageData.page_URL) {
         case 'flowers':
            setGalleryLoading(true);

            setTimeout(() => {
               if (searchValue) {
                  let searchedValue = FlowersJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                  setGalleryData(searchedValue);
               } else {
                  setGalleryData(FlowersJSON);
               }
               setGalleryLoading(false);
            }, 500)

            break;
         case 'plants':
            setGalleryLoading(true);

            setTimeout(() => {
               if (searchValue) {
                  let searchedValue = PlantsJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                  setGalleryData(searchedValue);
               } else {
                  setGalleryData(PlantsJSON);
               }
               setGalleryLoading(false);
            }, 500);

            break;
         case 'accessories':
            setGalleryLoading(true);

            setTimeout(() => {
               if (searchValue) {
                  let searchedValue = AccessoriesJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                  setGalleryData(searchedValue);
               } else {
                  setGalleryData(AccessoriesJSON);
               }
               setGalleryLoading(false);
            }, 500);

            break;
         case 'cooperations':
            setGalleryLoading(true);

            setTimeout(() => {
               if (searchValue) {
                  let searchedValue = CooperationsJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                  setGalleryData(searchedValue);
               } else {
                  setGalleryData(CooperationsJSON);
               }
               setGalleryLoading(false);
            }, 500);

            break;
      }
   }

   useEffect(() => {
      setGalleryLoading(true);
      setVisibleCardLength(maxLength);

      getGalleryData();

   }, [pageData]);

   console.log(visibleCardLength)

   const showMoreFunc = (e) => {
      e.preventDefault();

      if (!loading) {
         setLoading(true);
         setTimeout(() => {
            setVisibleCardLength(prev => prev + maxLength);
            return setLoading(false);
         }, 500)
      }
   }

   //Search On Submit
   const searchSubmit = (e) => {
      e.preventDefault();

      if (searchValue !== searchInputValue) {
         navigate(`${location.pathname}?s=${searchInputValue}`)
      }

      // setSearchInputValue('');
   }

   return (
      <div className="products-page__container">
         <HeaderRepeat
            title={pageData?.headerTitle}
            img={pageData?.headerImg}
         />

         <div className="products_content_wrapper">
            <div className="content_wrapper_inner">
               <p className='content_title' dangerouslySetInnerHTML={{ __html: pageData?.galleryTitle }}></p>
               <div className="search_bar">
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
               </div>
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

                  {!galleryLoading && galleryData?.slice(0, visibleCardLength).map((f, i) => (
                     <GalleryCard
                        key={i}
                        img={f.images && f.images[0].img}
                        title={f.name[lang]}
                        href={`${location.pathname}${f.name['en']}`}
                     />
                  ))
                  }

               </div>

               {
                  loading ?
                     <div className="load_more_wrapper">
                        <img src={Loading} className='loading_icon' alt="" />
                     </div>
                     :
                     !galleryLoading && visibleCardLength < galleryData?.length ?
                        <div className="load_more_wrapper">
                           <Button
                              className={'btn btn_white hover_gold'}
                              btnText={'Загрузить еще...'}
                              disabled={loading ? true : false}
                              clickHandler={showMoreFunc}
                           />
                        </div>
                        :
                        null
               }

            </div>
         </div>
      </div>
   )
}

export default Index