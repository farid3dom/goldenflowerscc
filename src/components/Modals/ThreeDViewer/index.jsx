import React, { useRef } from 'react';
import '../style.scss';

///Import Images
import Close from '@/assets/icons/close.svg';

const ThreeDViewer = ({ modalIsActive, setModalIsActive, glbPath }) => {
   const modalRef = useRef();

   return (
      <div className={`modal__wrapper ${modalIsActive ? 'modal__show' : 'modal__hide'}`}>
         <img src={Close} className='close__icon' onClick={() => setModalIsActive(false)} alt="" />

         <div className="inner__wrapper">
            <model-viewer
               src={`/threeD/${glbPath}`}
               className={'viewer__container'}
               shadow-intensity="2"
               camera-controls
               ar
               autoplay
               style={{ width: '100%', height: '100%' }}
               ref={(ref) => {
                  modalRef.current = ref
               }}
            >
            </model-viewer>
         </div>
      </div>
   )
}

export default ThreeDViewer