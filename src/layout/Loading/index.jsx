import React, { useEffect, useState } from 'react';
import './style.scss';

///LOADING ANIM IMPORT
import LoadingAnim from '../../assets/media/images/anim/logo_anim.lottie';

///DOT LOTTIE IMPORT
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Index = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // setTimeout(() => {
      //    setLoading(false);
      // }, 3000)
      window.onload = () => {
         setLoading(false);
      }
   }, [])

   return (
      <div className={loading ? `loading__wrapper loading__enabled` : `loading__wrapper loading__disabled`}>
         <div className="anim__wrapper">
            {
               loading &&
               <DotLottieReact
                  src={LoadingAnim}
                  loop
                  autoplay
               />
            }

         </div>
      </div>
   )
}

export default Index