import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import {Route, Routes} from "react-router-dom";
import {Home} from './pages/Home';
import {Utp} from './pages/Utp';
import {Articles} from './pages/Articles';
import {Contacts} from './pages/Contacts';
import {Products} from './pages/Products';
import {NotFound} from './pages/NotFound';
import ProductDetailPage from "./pages/ProductDetailPage";


function App() {
  return(
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products/*" elemeent={<Products/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/utp" element={<Utp/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/product" element={<ProductDetailPage/>}/>
        </Routes>
    </>
  );
}

export default App;
