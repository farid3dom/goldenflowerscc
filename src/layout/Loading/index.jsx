import React, { useEffect, useState } from 'react';
import './style.scss';

///Import Assets
import LoadingVid from '@/assets/media/video/loading.mp4';

const Loading = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => { setLoading(false) }, 3000);
   }, [])

   return (
      <div className={`loading__wrapper ${!loading && 'loading__disabled'}`}>
         <video autoPlay muted loop>
            <source src={LoadingVid} type="video/mp4" />
         </video>
      </div>
   )
}

export default Loading