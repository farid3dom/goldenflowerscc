import React, { useState } from 'react';

const Index = () => {
   const [scrollTopIsActive, setScrollTopIsActive] = useState(false);

   document.addEventListener('scroll', (e) => {
      let y = window.scrollY;

      if(y > 10) {
         setScrollTopIsActive(true);
      } else {
         setScrollTopIsActive(false);
      }
   })

   return (
      <div className={scrollTopIsActive ? `scroll-to__top show` : `scroll-to__top hide`} onClick={() => window.scrollTo(0, 0)}>
         <svg ariaHidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#ffffff" d="M180.573 448C169.211 448 160 438.789 160 427.428V255.991H43.021c-7.125 0-10.695-8.612-5.66-13.653L209.444 70.035c8.036-8.046 21.076-8.047 29.112 0L410.64 242.338c5.035 5.041 1.464 13.653-5.66 13.653H288v171.437C288 438.79 278.789 448 267.427 448h-86.854m0 32h86.855C296.416 480 320 456.416 320 427.428V287.991h84.979c35.507 0 53.497-43.04 28.302-68.266L261.198 47.422c-20.55-20.576-53.842-20.58-74.396 0L14.719 219.724c-25.091 25.122-7.351 68.266 28.302 68.266H128v139.437C128 456.416 151.584 480 180.573 480z"></path>
         </svg>
      </div>
   )
}

export default Index