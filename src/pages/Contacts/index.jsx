import React from 'react'
import './style.scss';

import HeaderRepeat from '../../layout/HeaderRepeat/index'

//import images
import ContacBG from '../../assets/media/images/materials/vitrin/vitrin_qost.jpg'


function index() {
    return (
        <div className="contact_page">

            <HeaderRepeat
                title={'Контакты'}
                img={ContacBG}
            />

            <div className="contacts_content_wrapper">

            </div>

        </div>
    )
}

export default index