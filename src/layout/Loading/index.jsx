import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';

///LOADING ANIM IMPORT
import LoadingAnim from '@assets/media/images/animated_logo/animation_logo.gif';

///DOT LOTTIE IMPORT
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Index = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1500)

      // if (document.readyState === 'complete') {
      //    setLoading(false);
      // }
   });

   return (
      <div className={loading ? `loading__wrapper loading__enabled` : `loading__wrapper loading__disabled`}>
         <div className="anim__wrapper">
            {/* // <DotLottieReact
               //    src={LoadingAnim}
               //    loop
               //    autoplay
               // /> */}

            <img src={LoadingAnim} alt="" />
         </div>
      </div>
   )
}

export default Index