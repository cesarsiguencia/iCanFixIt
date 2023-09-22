// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import HomePg from './pages/home'
import FormPg from './pages/form'
import ReviewPg from './pages/review'
import GalleryPg from './pages/gallery'
import AboutPg from './pages/about'

//COMPONENTS
import HeaderComp from './components/header'
import FooterComp from './components/footer'

const App = () => {
  const [noticeOn, setNoticeOn] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setNoticeOn(true)
    }, 1000)
  },[])

  const [redirectClicked, setRedirectClicked] = useState(false)

  const workEaseIn = () => {
    const bodyPages = document.querySelector('.cesar')

    if (bodyPages) {
      bodyPages.style.opacity = 1
    }
  }

  return (
    <Router>
      <div className="App">
        <HeaderComp
          redirectClicked={redirectClicked}
        ></HeaderComp>

        <div className="App-body" onLoad={workEaseIn}>
            <Routes>
              <Route path='/' element={<HomePg setNoticeOn={setNoticeOn} noticeOn={noticeOn}></HomePg>}>
    
              </Route>

              <Route path='/form' element={<FormPg></FormPg>}>
              </Route>

              <Route path='/review' element={<ReviewPg></ReviewPg>}>
              </Route>

              <Route setRedirectClicked={setRedirectClicked} path='/gallery' element={<GalleryPg></GalleryPg>}>
              </Route>

              <Route setRedirectClicked={setRedirectClicked} path='/about' element={<AboutPg></AboutPg>}>
              </Route>
            </Routes>
        </div>
        <FooterComp></FooterComp>
      </div>
    </Router >

  );
}

export default App;