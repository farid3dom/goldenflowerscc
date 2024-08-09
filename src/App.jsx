import { useState, useEffect } from 'react';
import './App.scss';
import './reset.css';

///Import Components
import ScrollToTop from '@components/ScrollToTop';

//import layout
import Navbar from '@layout/Navbar';
import NavbarMenu from '@layout/Menu';
import Footer from '@layout/Footer';
import Loading from '@layout/Loading';

//Import Pages
import Home from '@pages/Home';
import Products from '@pages/Products';
import FlowersCollection from '@pages/Products/Flowers/Collection';
import PlantsCollection from '@pages/Products/Plants/Collection';
import SingleProduct from '@pages/SingleProduct';
import Cooperation from '@pages/Cooperation';
import Contacts from '@pages/Contacts';
import About from '@pages/About';

//Import React router dom
import { Routes, Route, BrowserRouter as Router, Navigate, useLocation, Outlet } from 'react-router-dom';

function App() {
  const [menuIsActive, setMenuIsActive] = useState(null);

  ///PAGE SCROLL TO TOP
  function ScrollToTopFunc() {
    const { pathname, search } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
  };

  return (
    <Router>
      <>

        {/* SCROLL TO TOP */}
        <ScrollToTop />
        <ScrollToTopFunc />

        <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <NavbarMenu setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <Loading />

        <Routes>
          <Route path='/' element={<Home />} />

          {/* PRODUCTS PAGES */}
          <Route path='/products/flowers/' element={<Products />} />
          <Route path='/products/flowers/:collection' element={<FlowersCollection />} />

          <Route path='/products/plants' element={<Products />} />
          <Route path='/products/plants/:collection' element={<PlantsCollection />} />

          <Route path='/products/accessories' element={<Products />} />
          <Route path='/cooperation' element={<Cooperation />} />

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
      </>
    </Router>
  )
}

export default App
