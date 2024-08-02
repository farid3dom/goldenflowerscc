import { useState, useEffect } from 'react';
import './App.scss';
import './reset.css';

//import layout
import Navbar from './layout/Navbar/index';
import NavbarMenu from './layout/Menu/index';
import Footer from './layout/Footer/index';
import Loading from './layout/Loading/index';

//Import Pages
import Home from './pages/Home/index'
import Products from './pages/Products/index'
import FlowersCollection from './pages/Products/Flowers/Collection/index';
import PlantsCollection from './pages/Products/Plants/Collection/index';
import SingleProduct from './pages/SingleProduct/index'

import Contacts from './pages/Contacts/index'
import About from './pages/About/index'

//Import React router dom
import { Routes, Route, BrowserRouter as Router, Navigate, useLocation, Outlet } from 'react-router-dom';

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

  let flowersFirstOptions = ['dianthus', 'roses', 'chrysanthemum']

  return (
    <Router>
      <div className="App">

        {/* SCROLL TO TOP */}
        <ScrollToTop />

        <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <NavbarMenu setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <Loading />


        <Routes>
          <Route path='/' element={<Home />} />

          {/* <Route path='/products' element={<Products />}>
            <Route path='flowers' element={<Flowers />}>
              <Route path=':details1' element={<DetailsFlowers1 />} />
            </Route>
            <Route path='plants' element={<Plants />} />
            <Route path='accessories' />
            <Route path='cooperation' />
          </Route> */}

          {/* PRODUCTS PAGES */}
          <Route path='/products/flowers/' element={<Products />} />
          <Route path='/products/flowers/:collection' element={<FlowersCollection />} />

          <Route path='/products/plants' element={<Products />} />
          <Route path='/products/plants/:collection' element={<PlantsCollection />} />

          <Route path='/products/accessories' element={<Products />} />
          <Route path='/products/cooperation' element={<Products />} />

          {/* SINGLE PRODUCT PAGE */}
          <Route path='/product' element={<SingleProduct />} />

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
