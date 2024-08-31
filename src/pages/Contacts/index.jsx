import React, { useState } from 'react'
import './style.scss';
import { motion } from 'framer-motion';
import axios from 'axios';
import Alert from '@mui/material/Alert';

import HeaderRepeat from '@/layout/HeaderRepeat/index'

//import images
import Num1 from '@/assets/icons/logo_mini.png'
import Num2 from '@/assets/icons/flowers_icons/chrysanthemum.png'
import Num3 from '@/assets/icons/flowers_icons/rose.png'
import Num5 from '@/assets/icons/flowers_icons/rose.png'
import Num7 from '@/assets/icons/flowers_icons/rose.png'
import Num4 from '@/assets/icons/flowers_icons/exotic.png'
import Num6 from '@/assets/icons/flowers_icons/domestic.png'
import Num8 from '@/assets/icons/flowers_icons/packaging.png';
import Loading from '@/assets/icons/loading.svg';
import CustomerSupport from '@/assets/media/images/customer_support.jpg';

///Import Constants
import { pageVariants, pageTransition } from '@/constants/framerSettings.js';

///Import Utils
import { useTranslation } from 'react-i18next';

///Formik Import
import { useFormik } from 'formik';

///Import Validation
import { contactFormSchema } from '@/validation/contactFormValidation';

function index() {
    const { t, i18n } = useTranslation();
    const [formLoading, setFormLoading] = useState(false);
    const [sendingDone, setSendingDone] = useState(false);

    const formSubmitHandler = async (values, action) => {
        if (values) {
            setFormLoading(true);
            try {
                await axios.post(`https://goldenflowerscc-b-1bb111f79e27.herokuapp.com/api/send-mail`, values)
                    .then(res => {
                        submitResult('success', action);
                        return res.data;
                    });
            } catch (err) {
                submitResult('error', action);
                console.log(err, 'error from send mail front');
            }
        }
    }

    const submitResult = (result, action) => {
        action.resetForm();
        setFormLoading(false);
        setSendingDone(result);
        setTimeout(() => { setSendingDone(null) }, 5000);
    }

    const { values, touched, errors, initialErrors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: ''
        },
        validationSchema: contactFormSchema,
        onSubmit: formSubmitHandler
    });

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="contact_page">

            <div className="fixed-img__wrapper"></div>

            <HeaderRepeat
                title={t('contact.title')}
                img={'https://sun9-11.userapi.com/impg/SV5dio_s-WuOSeti8urkzfFtF8vPfIh9ZsH1QQ/Gz72YJKRNHk.jpg?size=2560x1707&quality=95&sign=b15efe0d2281fdc23eeca731ce6ee10c&type=album'}
            />

            <div className="contacts_content_wrapper">

                <div className="content_num_map">
                    <div className="number_container">
                        <div className="number_text">
                            <p className='p1' dangerouslySetInnerHTML={{ __html: t('contact.section1.title') }}></p>
                            <p className='p2' dangerouslySetInnerHTML={{ __html: t('contact.section1.title2') }}></p>
                        </div>
                        <div className="numbers">

                            <a href='tel:84957818888'>
                                <span><img src={Num1} width={35} /></span>
                                {t('contact.section1.office1')}
                                <p>+7 (495) 781 88 88</p>
                            </a>

                            <a href='tel:89251665204'>
                                <span><img src={Num2} width={35} /></span>
                                {t('contact.section1.office2')}
                                <p>+7 (925) 166 52 04</p>
                            </a>

                            <a href='tel:89254533969'>
                                <span><img src={Num3} width={35} /></span>
                                {t('contact.section1.office3')}
                                <p>+7 (925) 453 39 69</p>
                            </a>

                            <a href='tel:89645117113'>
                                <span><img src={Num4} width={35} /></span>
                                {t('contact.section1.office4')}
                                <p>+7 (964) 511 71 13</p>
                            </a>

                            <a href='tel:89672921155'>
                                <span><img src={Num5} width={35} /></span>
                                {t('contact.section1.office5')}
                                <p>+7 (967) 292 11 55</p>
                            </a>

                            <a href='tel:89266355181'>
                                <span><img src={Num6} width={35} /></span>
                                {t('contact.section1.office6')}
                                <p>+7 (926) 635 51 81</p>
                            </a>

                            <a href='tel:89060280248'>
                                <span><img src={Num7} width={35} /></span>
                                {t('contact.section1.office7')}
                                <p>+7 (906) 028 02 48</p>
                            </a>

                            <a href='tel:89654118885'>
                                <span><img src={Num8} width={35} /></span>
                                {t('contact.section1.office8')}
                                <p>+7 (965) 411 88 85</p>
                            </a>

                        </div>
                    </div>
                    <div className="map">
                        <div className='map_inner'>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.762914%2C55.567408&mode=poi&poi%5Bpoint%5D=37.761437%2C55.567365&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57660294184&z=18.14">
                            </iframe>
                            {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad053836cb0c9f0b843abbfd6a18c4b31ca836facc1b13aeca320826e49a697ed&amp;source=constructor" width={650} height={650} frameborder={0}></iframe> */}
                        </div>
                    </div>
                </div>
                {/* <div className="about_vk_inner">
                    <div className="vk_left_content">
                        <div id="vk_groups"></div>
                    </div>
                    <div className="vk_right_content">
                        <span className='vk_content_title'>
                            {t('contact.section2title')}
                        </span>
                    </div>

                </div> */}
                <div className="contact-form__wrapper">

                    <div className="image__wrapper">
                        <img src={CustomerSupport} />
                    </div>

                    <div className="form__wrapper">

                        <div className="wrapper__title">
                            <h2>{t('contact.form.title')}</h2>
                        </div>

                        {
                            sendingDone === 'success' ?
                                <Alert severity="success">
                                    {t('contact.form.successMsg')}
                                </Alert>
                                : sendingDone === 'error' ?
                                    <Alert severity="error">
                                        {t('contact.form.errorMsg')}
                                    </Alert> : null
                        }

                        <form onSubmit={handleSubmit}>
                            <div className="form__controller">
                                <label htmlFor="fullName">{t('contact.form.name.label')}</label>
                                <div className="input__wrapper">
                                    <input
                                        type="text"
                                        id='fullName'
                                        placeholder={t('contact.form.name.placeholder')}
                                        className='input_white'
                                        value={values.fullName}
                                        onChange={handleChange}
                                        maxLength={30}
                                    />
                                </div>
                                {
                                    errors.fullName && touched.fullName ?
                                        <span className="error__message">{errors.fullName}</span>
                                        : null
                                }
                            </div>

                            <div className="form__controller">
                                <label htmlFor="email">{t('contact.form.email.label')}</label>
                                <div className="input__wrapper">
                                    <input
                                        type="text"
                                        id='email'
                                        placeholder={t('contact.form.email.placeholder')}
                                        className='input_white'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    errors.email && touched.email ?
                                        <span className="error__message">{errors.email}</span>
                                        : null
                                }
                            </div>

                            <div className="form__controller">
                                <label htmlFor="message">{t('contact.form.message.label')}</label>
                                <div className="input__wrapper">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder={t('contact.form.message.placeholder')}
                                        className='input_white'
                                        value={values.message}
                                        onChange={handleChange}
                                        maxLength={2000}
                                    ></textarea>
                                </div>
                                {
                                    errors.message && touched.message ?
                                        <span className="error__message">{errors.message}</span>
                                        : null
                                }
                            </div>

                            <div className="form__controller">
                                <div className="button__wrapper">
                                    <button type='submit' className='btn btn_white hover_gold'>
                                        {
                                            !formLoading ?
                                                t('contact.form.btnText') :
                                                <img className='loading_icon' width={34} height={34} src={Loading} alt='' />
                                        }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default index