import React from 'react'
import './style.scss';

import HeaderRepeat from '../../layout/HeaderRepeat/index'

//import images
import ContactBG from '../../assets/media/images/materials/vitrin/vitrin_qost.jpg'


function index() {
    return (
        <div className="contact_page">

            <HeaderRepeat
                title={'Контакты'}
                img={ContactBG}
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
                        <div className='map_inner'>
                            <a href="https://yandex.ru/maps/org/golden_flowers/57660294184/?utm_medium=mapframe&utm_source=maps" style={{ color: 'white', fontSize: 12, position: 'absolute', top:0}}>
                            </a>
                            <a href="https://yandex.ru/maps/10719/vidnoe/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps" style={{ color: 'white', fontSize: 12, position:'absolute', top: 14 }}>
                            </a>
                            <a href="https://yandex.ru/maps/10719/vidnoe/category/flowers_and_bouquets_delivery/184108319/?utm_medium=mapframe&utm_source=maps" style={{ color: 'white', fontSize: 12, position:'absolute', top: 28 }}>
                            </a>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.762914%2C55.567408&mode=poi&poi%5Bpoint%5D=37.761437%2C55.567365&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57660294184&z=18.14" width={570} height={627} frameborder={1} allowfullscreen={true} style={{position:'relative'}}>
                            </iframe>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default index