import React from 'react';
import './App.css';

// import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import SlideShow from './components/SlideShow/SlideShow'
import CategoryPreview from './components/CategoryPreview/CategoryPreview'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
      <>
        <NavBar title="BuyKo"/>
        {/* <ItemDetail/> */}
        {/* <SlideShow/>
        <CategoryPreview/>
        <CategoryPreview/> */}
        <SignUp/>
        <Footer/>
      </>
      
  )
}

export default App;
