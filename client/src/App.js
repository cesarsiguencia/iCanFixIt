// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {Container, Row, Col } from 'react-bootstrap'

//PAGES
import HomePg from './pages/home'
import AboutPg from './pages/about'
import FormPg from './pages/form'
import ReviewPg from './pages/review'
import GalleryPg from './pages/gallery'
import ImageUploadPg from './pages/form-images'

//COMPONENTS
import HeaderComp from './components/header'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

  // const [ clientId, setClientId ] = useState()
  return (
    <Router>
      <div className="App"
      

      >
        <HeaderComp></HeaderComp>

        <div className="App-body" 


                
        >


          <Routes>
            <Route path='/icanfixit' element={<HomePg></HomePg>}>

            </Route>



            <Route path='/icanfixit/form' element={<FormPg ></FormPg>}>

            </Route>

            <Route path='/icanfixit/about' element={<AboutPg></AboutPg>}>

            </Route>

            <Route path='/icanfixit/review' element={<ReviewPg></ReviewPg>}>

            </Route>

            <Route path='/icanfixit/gallery' element={<GalleryPg></GalleryPg>}>

            </Route>

            <Route  path='/icanfixit/client' element={<ImageUploadPg></ImageUploadPg>}>

            </Route>



          </Routes>

        </div>
      </div>
    </Router >

  );
}

export default App;
