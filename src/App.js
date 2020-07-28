import React, {useState, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'

import './App.css';


import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import SlideShow from './components/SlideShow/SlideShow'
import CategoryPreview from './components/CategoryPreview/CategoryPreview'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import CategoryPage from './components/CategoryPage/CategoryPage'
import MyPage from './components/MyPage/MyPage'
import Checkout from './components/Checkout/Checkout'
import AboutUs from './components/AboutUs/AboutUs'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermCond from './components/TermCond/TermCond'
import Notice from './components/Notice/Notice'
import ComingSoon from './components/PlaceHolder/ComingSoon'

function App() {
  const [footer, setFooter] = useState(true)

  const toggleFooter = useCallback(()=>{
    setFooter(prev=>!prev)
  }, [])

  document.title="링크코리아"

  return (
      <Router>
        <ScrollToTop>
          <NavBar title="LinkKorea"/>
          

          <Switch>
            <Route path="/signin">
              <SignIn/>
            </Route>

            <Route path="/signup">
              <SignUp/>
            </Route>

            <Route path="/category/:name" component={CategoryPage}/>

            <Route path="/product/:id" render={() => <ItemDetail toggleFooter={toggleFooter}/>}/>

            <Route path="/mypage" component={MyPage}/>

            <Route path="/checkout" component={Checkout}/>

            <Route path="/aboutus" component={AboutUs}/>

            <Route path="/privacypolicy" component={PrivacyPolicy}/>

            <Route path="/termcond" component={TermCond}/>

            <Route path="/notice" component={Notice}/>

            <Route path="/reviews" component={ComingSoon}/>

            <Route path="/">
              <SlideShow />
              <CategoryPreview/>
              <CategoryPreview/>
            </Route>
          </Switch>

          {
            footer && <Footer/>
          }
        </ScrollToTop>

        
      </Router>
      
  )
}

export default App;
