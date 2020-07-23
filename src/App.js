import React from 'react';
import './App.css';

import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
      <>
        <NavBar title="BuyKo"/>
        {/* <ItemDetail/> */}
        <Footer/>
      </>
      
  )
}

export default App;