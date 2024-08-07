import React, { useState } from 'react';

function useShowMore() {
   const maxLength = 24;
   const [visibleCardLength, setVisibleCardLength] = useState(maxLength);
   const [loading, setLoading] = useState(false);

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

   const setMaxLengthDefault = () => {
      setVisibleCardLength(maxLength);
   }

   return {
      visibleCardLength,
      showMoreFunc,
      loading,
      setMaxLengthDefault
   }
}

export default useShowMore