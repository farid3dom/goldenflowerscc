import React, { useState, useEffect } from 'react';
import './style.scss';

//Import Images
import Loading from '../../../assets/icons/loading.svg';

//Import Component
import Button from '../../../components/Button/Index';
import Input from '../../../components/Input/Index';
import GalleryCard from '../../../components/GalleryCard/Index';

//Import Utils
import FlowersJSON from '../../../utils/flowers.json';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Index = () => {
   const params = useParams();
   const location = useLocation();
   const navigate = useNavigate();
   const maxLength = 48;
   const lang = 'en';
   const searchParams = new URLSearchParams(location.search);
   const searchValue = searchParams.get('s');
   const [visibleCardLength, setVisibleCardLength] = useState(maxLength);
   const [loading, setLoading] = useState(false);
   const [galleryLoading, setGalleryLoading] = useState(false);
   const [searchInputValue, setSearchInputValue] = useState(searchValue);
   const [galleryData, setGalleryData] = useState([]);

   useEffect(() => {
      setGalleryLoading(true);
      setVisibleCardLength(maxLength);

      setTimeout(() => {
         if (searchValue) {
            let searchedValue = FlowersJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
            setGalleryData(searchedValue);
         } else {
            setGalleryData(FlowersJSON);
         }
         setGalleryLoading(false);
      }, 500)
   }, [location]);

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
      <div className="details__container">
         {/* <h2 style={{ color: 'white' }}>Flowers</h2> */}

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

         <div className="gallery_grid_wrapper">
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
                  title={f?.name[lang]}
                  href={
                     f.inner_URL ?
                     `${location.pathname}/${f.inner_URL}`
                     :
                     `/product?productType=flowers&productName=${f.name['en'].toLowerCase()}`
                  }
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
   )
}

export default Index