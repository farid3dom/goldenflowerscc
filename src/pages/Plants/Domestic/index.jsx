import React, { useEffect, useState } from 'react';
import '../Domestic/style.scss';

//Import Images
import DomesticBG from '../../../assets/media/images/materials/gold_plants.jpg';
import Loading from '../../../assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '../../../layout/HeaderRepeat/index';

//Import Component
import Button from '../../../components/Button/Index';
import Input from '../../../components/Input/Index';
import GalleryCard from '../../../components/GalleryCard/Index';

//Import Utils
import DomesticJSON from '../../../utils/domestic.json';

//Import react router dom
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
    const maxLength = 16;
    let lang = 'ru';
    const [visibleCardLength, setVisibleCardLength] = useState(maxLength);
    const [galleryValue, setGalleryValue] = useState(null)
    const [loading, setLoading] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [galleryLoading, setGalleryLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');

    console.log(galleryValue)

    useEffect(() => {
        function getSearchedData() {
            setGalleryLoading(true);
            if (searchValue) {
                setTimeout(() => {
                    let searchedValue = DomesticJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                    setGalleryValue(searchedValue);
                    setVisibleCardLength(maxLength);
                    setGalleryLoading(false);
                }, 500)
            } else {
                setTimeout(() => {
                    setGalleryValue(DomesticJSON);
                    setVisibleCardLength(maxLength);
                    setGalleryLoading(false);
                }, 500)
            }
        }
        getSearchedData();
    }, [location])

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

    //Search On Submit
    const searchSubmit = (e) => {
        e.preventDefault();
        searchInputValue ?
            navigate(`/plants/domestic?search=${searchInputValue}`)
            :
            navigate('/plants/domestic');

        // setSearchInputValue('');
    }

    return (
        <div className="domestic_page_container">

            <HeaderRepeat
                title={'Комнатные растения'}
                img={DomesticBG}
            />

            <div className="domestic_content_wrapper">
                <div className="content_wrapper_inner">
                    <p className='content_title'>Вы <span>никогда</span> не найдете столько <span>растений</span>!</p>
                    <div className="search_bar">
                        <Input
                            value={searchInputValue}
                            type={'text'}
                            className={'input_white'}
                            placeholder={'Искать'}
                            icon={'search'}
                            handleChange={(e) => setSearchInputValue(e.target.value)}
                            submitHandler={searchSubmit}
                        />
                    </div>
                    <div className="domestic_gallery gallery_grid_wrapper">
                        {galleryLoading &&
                            <div className="loading_wrapper">
                                <img className='loading_icon' src={Loading} alt='' />
                            </div>
                        }

                        {!galleryLoading && galleryValue?.length === 0 ?
                            <div className="no_result_wrapper">
                                <h2>Товар не найден...</h2>
                            </div>
                            :
                            null
                    }

                        {!galleryLoading && galleryValue?.slice(0, visibleCardLength).map((f, i) => (
                            <GalleryCard
                                key={i}
                                img={DomesticBG}
                                title={f.name[lang]}
                            />
                        ))
                        }

                    </div>

                    {
                        loading ?
                            <div className="load_more_wrapper">
                                <img src={Loading} className='loading_icon' alt="" />
                            </div>
                            :
                            !galleryLoading && visibleCardLength < galleryValue?.length ?
                                <div className="load_more_wrapper">
                                    <Button
                                        className={'btn btn_white hover_gold'}
                                        btnText={'Загрузить еще...'}
                                        disabled={loading ? true : false}
                                        clickHandler={showMoreFunc}
                                    />
                                </div>
                                :
                                null
                    }

                </div>
            </div>

        </div>
    )
}

export default Index