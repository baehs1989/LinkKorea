import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
      <Router>
        <NavBar title="BuyKo"/>
        

        <Switch>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/category/:name" children={<CategoryPage/>}/>
          <Route path="/">
            <SlideShow />
            <CategoryPreview/>
            <CategoryPreview/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
      
  )
}

export default App;
