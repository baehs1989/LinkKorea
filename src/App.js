import React from 'react';
import './App.css';

// import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import SlideShow from './components/SlideShow/SlideShow'
import CategoryPreview from './components/CategoryPreview/CategoryPreview'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import CategoryPage from './components/CategoryPage/CategoryPage'

function App() {
  return (
      <>
        <NavBar title="BuyKo"/>
        <CategoryPage/>
        <Footer/>
      </>
      
  )
}

export default App;
