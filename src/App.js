import React from 'react';
import './App.css';

// import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import SlideShow from './components/SlideShow/SlideShow'
import ProductStack from './components/ProductStack/ProductStack'

function App() {
  return (
      <>
        <NavBar title="BuyKo"/>
        {/* <ItemDetail/> */}
        <SlideShow/>
        <ProductStack/>
        <Footer/>
      </>
      
  )
}

export default App;
