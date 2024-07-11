import React, { useEffect, useState } from 'react'
import './style.scss';

//Import Images
import FlowerBG from '../../assets/media/images/materials/black_gold_flowers.jpg';
import Loading from '../../assets/icons/loading.svg';

//Import Layout
import HeaderRepeat from '../../layout/HeaderRepeat/index';

//Import Component
import Button from '../../components/Button/Index';
import Input from '../../components/Input/Index';
import GalleryCard from '../../components/GalleryCard/Index';

//Import Utils
import FlowersJSON from '../../utils/flowers.json';

//Import react router dom
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
    const maxLength = 48;
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

    useEffect(() => {
        function getSearchedData() {
            setGalleryLoading(true);
            if (searchValue) {
                setTimeout(() => {
                    let searchedValue = FlowersJSON.filter(f => f.name[lang].toLowerCase().includes(searchValue.toLowerCase()))
                    setGalleryValue(searchedValue);
                    setVisibleCardLength(maxLength);
                    setGalleryLoading(false);
                }, 500)
            } else {
                setTimeout(() => {
                    setGalleryValue(FlowersJSON);
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
            navigate(`/flowers?search=${searchInputValue}`)
            :
            navigate('/flowers');

        // setSearchInputValue('');
    }

    return (
        <div className="flowers_page_container">

            <HeaderRepeat
                title={'Цветы'}
                img={FlowerBG}
            />

            <div className="flowers_content_wrapper">
                <div className="content_wrapper_inner">
                    <p className='content_title'>Каждый цветок — это <span>душа</span>, расцветающая в <span>природе</span>!</p>
                    <div className="search_bar">
                        <Input
                            value={searchInputValue}
                            type={'text'}
                            className={'input_white'}
                            placeholder={'Искать...'}
                            icon={'search'}
                            handleChange={(e) => setSearchInputValue(e.target.value)}
                            submitHandler={searchSubmit}
                        />
                    </div>
                    {galleryLoading &&
                        <div className="loading_wrapper">
                            <img className='loading_icon' src={Loading} alt='' />
                        </div>
                    }
                    <div className="flowers_gallery gallery_grid_wrapper">


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
                                img={f.images && f.images[0].img}
                                title={f.name[lang]}
                                href={`/product/?productType=Flowers&productID=${i}`}
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