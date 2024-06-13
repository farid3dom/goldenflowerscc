import React from 'react';
import './style.scss';

const Index = ({ type, className, readOnly, disabled, placeholder, value, maxLength, autoComplete, handleChange, icon, submitHandler }) => {
   return (
      <div className="input__wrapper">
         <form onSubmit={submitHandler}>
            <input
               type={type}
               className={className}
               readOnly={readOnly}
               disabled={disabled}
               placeholder={placeholder}
               value={value}
               maxLength={maxLength}
               autoComplete={autoComplete}
               onInput={handleChange}
            />

            {
               icon ?
                  <button type='submit' className="input_icon_wrapper">
                     {
                        icon === 'search' ?
                           <svg className='search_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"></path></svg>
                           :
                           null
                     }
                  </button>
                  :
                  null
            }
         </form>
      </div>
   )
}

export default Index