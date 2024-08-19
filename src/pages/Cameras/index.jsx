import React from 'react'
import './style.scss'

function index() {
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
                title={'Контакты'}
                img={'https://sun9-11.userapi.com/impg/SV5dio_s-WuOSeti8urkzfFtF8vPfIh9ZsH1QQ/Gz72YJKRNHk.jpg?size=2560x1707&quality=95&sign=b15efe0d2281fdc23eeca731ce6ee10c&type=album'}
            />

            <div className='cameras_container'>
                <div className="cam_container_inner">
                    <div className="content">
                        <div className="content_wrapper">
                            <div className="cam_section">
                                <div className="section_name">Хризантема</div>
                                <div className="section_name">Экзотика</div>
                                <div className="section_name">Комнатные растения</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </motion.div >
    )
}

export default index