// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import HomePg from './pages/home'
import FormPg from './pages/form'
import ReviewPg from './pages/review'
import GalleryPg from './pages/gallery'
import AboutPg from './pages/about'



// import ImageUploadPg from './pages/form-images'

//COMPONENTS
import HeaderComp from './components/header'
import FooterComp from './components/footer'



const App = () => {


  const [redirectClicked, setRedirectClicked] = useState(false)
  const [showHero, setShowHero] = useState(false)

  const workEaseIn = () => {
    const bodyPages = document.querySelector('.cesar')

    if (bodyPages) {
      bodyPages.style.opacity = 1
      setShowHero(true)
    }
    
  }


  return (
    <Router>
      <div className="App">
        <HeaderComp
          // pages={pages}
          // setCurrentPage={setCurrentPage}
          // currentPage={currentPage}
          redirectClicked={redirectClicked}

        ></HeaderComp>

        <div className="App-body" onLoad={workEaseIn}>
          

            <Routes>
              <Route path='/icanfixit' element={<HomePg></HomePg>}>
              </Route>

              <Route path='/icanfixit/form' element={<FormPg></FormPg>}>
              </Route>

              <Route path='/icanfixit/review' element={<ReviewPg></ReviewPg>}>
              </Route>

              <Route setRedirectClicked={setRedirectClicked} path='/icanfixit/gallery' element={<GalleryPg></GalleryPg>}>
              </Route>

              <Route setRedirectClicked={setRedirectClicked} path='/icanfixit/about' element={<AboutPg></AboutPg>}>
              </Route>
            </Routes>
          




        </div>
        <FooterComp></FooterComp>
      </div>
    </Router >

  );
}

export default App;
