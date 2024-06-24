import React from 'react'
import './style.scss';

import HeaderRepeat from '../../layout/HeaderRepeat/index'

//import images
import AboutBG from '../../assets/media/images/materials/vitrin/vitrin_isci.jpg'


function index() {
    return (
        <div className="about_page">

            <HeaderRepeat
                title={'Наша история'}
                img={AboutBG}
            />

            <div className="about_content_wrapper">

            </div>

        </div>
    )
}

export default index