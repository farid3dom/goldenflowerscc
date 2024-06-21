import React from 'react'
import './style.scss';

import HeaderRepeat from '../../layout/HeaderRepeat/index'

//import images
import ContacBG from '../../assets/media/images/materials/vitrin/vitrin_qost.jpg'
import MapPNG from '../../assets/media/images/map.png'


function index() {
    return (
        <div className="contact_page">

            <HeaderRepeat
                title={'Контакты'}
                img={ContacBG}
            />

            <div className="contacts_content_wrapper">
                <div className="content_inner">

                    <div className="nomera">
                        <h2>Позвоните нам для получения подробной информации. Мы работаем <span>круглосуточно!</span></h2>
                        <h3>Главный офис:</h3>
                        <a href='tel:84957818888'>+7 (495) 781 88 88</a>
                        <h3>Розы Эквадор:</h3>
                        <a href='tel:89672921155'>+7 (967) 292 11 55</a>
                        <a href='tel:89096988188'>+7 (909) 698 81 88</a>
                        <h3>Розы Кения:</h3>
                        <a href='tel:89254533969'>+7 (925) 453 39 69</a>
                        <a href='tel:9652398588'>+7 (965) 239 85 88</a>
                        <h3>Розы на воде:</h3>
                        <a href='tel:89060280248'>+7 (906) 028 02 48</a>
                        <h3>Хризантема, Зелень:</h3>
                        <a href='tel:89251665204'>+7 (925) 166 52 04</a>
                        <h3>Экзотические цветы:</h3>
                        <a href='tel:89645117113'>+7 (964) 511 71 13</a>
                        <a href='tel:89092868188'>+7 (903) 286 81 88</a>
                        <h3>Комнатные растения:</h3>
                        <a href='tel:89266355181'>+7 (926) 635 51 81</a>
                        <h3>Упаковка:</h3>
                        <a href='tel:89654118885'>+7 (965) 411 88 85</a>
                    </div>

                    <div className="map">
                        <img src={MapPNG} alt="map" />
                        <div className="adres_container">
                            <a href='https://yandex.ru/maps/-/CDrK4P8v' className='adres'>Адрес: Московская область, Ленинский городской округ, деревня Апаринки, вл9</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default index