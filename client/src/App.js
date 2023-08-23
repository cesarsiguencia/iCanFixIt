// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import './App.css';

//PAGES
import HomePg from './pages/home'
import FormPg from './pages/form'
import ReviewPg from './pages/review'
import GalleryPg from './pages/gallery'
import AboutPg from './pages/about'



// import ImageUploadPg from './pages/form-images'

//COMPONENTS
import HeaderComp from './components/header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = () => {

  const workEaseIn = () =>{
    const bodyPages = document.querySelector('.cesar')

  
    console.log('on')
  
    if (bodyPages) {
      bodyPages.style.opacity = 1
  
    }
  }


  return (
    <Router>
      <div className="App">
        <HeaderComp></HeaderComp>

        <div className="App-body" onLoad={workEaseIn}>
          <Container>
          <Routes>
              <Route path='/icanfixit' element={<HomePg></HomePg>}>
              </Route>

              <Route path='/icanfixit/form' element={<FormPg></FormPg>}>
              </Route>

              <Route path='/icanfixit/review' element={<ReviewPg></ReviewPg>}>
              </Route>

              <Route path='/icanfixit/gallery' element={<GalleryPg></GalleryPg>}>
              </Route>

              <Route path='/icanfixit/about' element={<AboutPg></AboutPg>}>
              </Route>
            </Routes>
          </Container>


      

        </div>
      </div>
    </Router >

  );
}

export default App;
