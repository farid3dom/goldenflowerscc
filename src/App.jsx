import { useState } from 'react';
import './App.scss';
import './reset.css';

//import layout
import Navbar from './layout/Navbar/index';
import NavbarMenu from './layout/Menu/index';
import Footer from './layout/Footer/index';

//Import Pages
import Home from './pages/Home/index';

//Import React router dom
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';


function App() {

  const [menuIsActive, setMenuIsActive] = useState(null);

  return (
    <Router>
      <div className="App">

        <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
        <NavbarMenu menuIsActive={menuIsActive} />
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
