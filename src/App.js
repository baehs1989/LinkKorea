import React from 'react';
import './App.css';

// import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import SlideShow from './components/SlideShow/SlideShow'
import CategoryPreview from './components/CategoryPreview/CategoryPreview'

function App() {
  return (
      <>
        <NavBar title="BuyKo"/>
        {/* <ItemDetail/> */}
        <SlideShow/>
        <CategoryPreview/>
        <CategoryPreview/>
        <Footer/>
      </>
      
  )
}

export default App;
