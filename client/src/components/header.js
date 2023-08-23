import React, { useState, useEffect } from 'react';
// import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import toolbar from '../device-library/utils/wrench-svgrepo-com.svg'

const Header = ({redirectClicked}) => {
    const [titleClicked, setTitleClicked] = useState()
    const [navClicked, setNavClicked] = useState()

    if(redirectClicked === true){
      setTitleClicked(false)
      setNavClicked(true)
    }

    const pages = [
        {
            name: "About",
            url: "about"
        },
        {
            name: 'Gallery',
            url: "gallery"
        },
        {
            name: "Review Me",
            url: "review"
        },
        {
            name: "Request Service",
            url: "form",
            image: toolbar
        }
    ]

    let subUrlObjectAtLoad
    const urlsArray = window.location.href.split('/')
    const urlOfSubPage = urlsArray[urlsArray.length - 1]

    if (urlOfSubPage !== 'icanfixit') {
        subUrlObjectAtLoad = {
            urlSub: urlOfSubPage,
            urlSubLoaded: true
        }
    } else {
        subUrlObjectAtLoad = {
            urlSub: "not a urlSub",
            urlSubLoaded: false
        }
    }

    let currentIndex
    const loadedPage = subUrlObjectAtLoad.urlSub

    if (loadedPage) {
        pages.forEach((page) => {
            if (page.url === loadedPage) {
                console.log(page.url, '= to current')
                currentIndex = pages.indexOf(page)
            }
        })
    }

    const [selectedPage, setSelectedPage] = useState(pages[currentIndex])

    useEffect(()=>{
        if(subUrlObjectAtLoad.urlSubLoaded === false){
          setTitleClicked(true)
          setNavClicked(false)
        } else {
          setTitleClicked(false)
          setNavClicked(true)
        }
      },[subUrlObjectAtLoad])

    return (
        <header className='App-header'>
            <Navbar expand="lg">
                <Container className='header-components'>
                    <div>
             
                        <Link to='/icanfixit' className='nav-links-font' onClick={() => {
                            setTitleClicked(true)
                            setNavClicked(false)
                        }}>
                            <div class='text-align-left'>
                                <p className='nav-links-font header-title'>iCanFixIt</p>
                                <small className='header-desc'>Repair Your Device With Me!</small>
                            </div>

                        </Link >
   
                    </div>
                    <div>
                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='SOMETHING' >
                        <Nav className="me-auto"
                            onClick={() => {
                                setNavClicked(true)
                                setTitleClicked(false)
                            }}
                        >
                            {pages.map((page, i) => {
                                if (!page.image) {
                                    return (
                                        <Nav.Link 

                                        onClick={() => {
                                            setSelectedPage(page)
                                          }}
                                            
                                        key={i}>
                                            <Link className={`nav-links-font links     ${!selectedPage ? (selectedPage == "") : (selectedPage.name === page.name && !titleClicked && navClicked && 'links-selected')}`} to={`/icanfixit/${page.url}`}>{page.name}
                                            </Link>
                                        </Nav.Link>
                                    )
                                } else {
                                    return (
                                        <Nav.Link 
                                        onClick={() => {
                                            setSelectedPage(page)
                                          }}
                                        
                                        key={i} className='featured-button'>
                                            <Link className='nav-links-font links' 
                                            
                                            to={`/icanfixit/${page.url}`}>{page.name}
                                            </Link>
                                            <img className='toolbar' src={page.image}>
                                            </img>
                                        </Nav.Link>

                                    )
                                }

                            })}



                        </Nav>
                    </Navbar.Collapse>
                    </div>
      
                   
                </Container>
            </Navbar>



        </header>

    )
}

export default Header