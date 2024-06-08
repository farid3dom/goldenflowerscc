import React from 'react'
import './style.scss'
//import images
import Logo from '../../assets/icons/logo.png'

const Index = () => {
  return (
    <div className='Navbar'>
        
        <div className='inner_nav'>

            <div className="logo">
                <a href='https://goldenflowers.com/ru'>
                    <img src={Logo} alt="Golden Flowers Logo" />
                </a>
            </div>
            
            <div className='nav_menu'>

                <span className="menu_text_collection">Коллекция</span>
                <span className="menu_text_about_us">Наша история</span>
                <span className="menu_text_contacts">Контакты</span>

            </div>

            <div className="nav_right">

                <div className="nav_hamburger">

                    <input type="checkbox" id="burger-checkbox" class="burger-checkbox"/>
                    <label class="burger" for="burger-checkbox"></label>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Index