import { useState, useEffect } from 'react';
import './App.scss';
import './reset.css';

//import layout
import Navbar from './layout/Navbar/index';
import NavbarMenu from './layout/Menu/index';
import Footer from './layout/Footer/index';

//Import Pages
import Home from './pages/Home/index'
import Flowers from './pages/Flowers/index'
import Plants from './pages/Plants/index'
import SingleProduct from './pages/SingleProduct/index'

import Grunt from './pages/Plants/Grunt/index'
import Greenery from './pages/Plants/Greenery/index'
import Domestic from './pages/Plants/Domestic/index'

import Accessories from './pages/Accessories/index'
import Cooperation from './pages/Cooperation/index'
import Contacts from './pages/Contacts/index'
import About from './pages/About/index'

//Import React router dom
import { Routes, Route, BrowserRouter as Router, Navigate, useLocation } from 'react-router-dom';



function App() {

  const [menuIsActive, setMenuIsActive] = useState(null);

  ///PAGE SCROLL TO TOP
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <div className="App">

        {/* SCROLL TO TOP */}
        <ScrollToTop />
        
        <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <NavbarMenu setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />


        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/flowers' element={<Flowers />} />
          <Route path='/product' exact element={<SingleProduct />} />

          <Route path='/plants' element={<Plants />} />
          <Route path='/plants/greenery' element={<Greenery />} />
          <Route path='/plants/grunt' element={<Grunt />} />
          <Route path='/plants/domestic' element={<Domestic />} />

          <Route path='/accessories' element={<Accessories />} />


          <Route path='/cooperation' element={<Cooperation />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>


        <Footer />

      </div>
    </Router>
  );
}

export default App;
