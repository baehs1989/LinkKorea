import React, {useState, useCallback, useEffect} from 'react';
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
import ContactUs from './components/ContactUs/ContactUs'
import Inquiry from './components/Inquiry/Inquiry'
import OrderPage from './components/OrderPage/OrderPage'
import {UserProvider} from './Context/Context'
import APIConnector from './APIConnector/APIConnector'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [footer, setFooter] = useState(true)
  const [authBar, setAuthBar] = useState(true)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryMap, setCategoryMap] = useState({})

  const toggleFooter = useCallback(()=>{
    setFooter(prev=>!prev)
  }, [])

  const toggleAuthBar = useCallback(()=>{
    setAuthBar(prev=>!prev)
  }, [])

  useEffect(()=>{
    APIConnector.getActiveCategory().then(result => {
      let categoryMap = {}
      let menu = result.data.map(i => {
        categoryMap[i.name.toLowerCase()] = i.id
        return i.name
      })
      setCategoryMap(categoryMap)
      setCategories(menu)
      setIsLoading(false)
    })
  }, [])

  document.title="링크코리아"


  if (isLoading){
    return(
      <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Spinner/>
      </div>
    )
  }


  return (
    <UserProvider value={{categories:categories, categoryMap:categoryMap}}>
      <Router>
        <ScrollToTop>
          <NavBar title="LinkKorea" authBar={authBar}/>
          

          <Switch>
            <Route path="/signin">
              <SignIn/>
            </Route>

            <Route path="/signup">
              <SignUp/>
            </Route>

            <Route path="/category/:name" component={CategoryPage}/>

            <Route path="/product/:id" render={() => <ItemDetail toggleFooter={toggleFooter} toggleAuthBar={toggleAuthBar}/>}/>

            <Route path="/mypage" component={MyPage}/>

            <Route path="/checkout" component={Checkout}/>

            <Route path="/aboutus" component={AboutUs}/>

            <Route path="/privacypolicy" component={PrivacyPolicy}/>

            <Route path="/termcond" component={TermCond}/>

            <Route path="/notice" component={Notice}/>

            <Route path="/reviews" component={ComingSoon}/>

            <Route path="/contactus" component={ContactUs}/>

            <Route path="/inquiry" component={Inquiry}/>

            <Route path="/order" component={OrderPage}/>



            <Route path="/">
              <SlideShow />
              {categories.map(category=>{
                return <CategoryPreview key={category} category={category}/>
              })}

            </Route>
          </Switch>

          {
            footer && <Footer/>
          }
        </ScrollToTop>

        
      </Router>
    </UserProvider>
  )
}

export default App;
