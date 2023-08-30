import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import toolbar from '../device-library/utils/wrench-svgrepo-com.svg'

const Header = ({ redirectClicked }) => {
    const [titleClicked, setTitleClicked] = useState()
    const [navClicked, setNavClicked] = useState()

    if (redirectClicked === true) {
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
                currentIndex = pages.indexOf(page)
            }
        })
    }

    const [selectedPage, setSelectedPage] = useState(pages[currentIndex])

    useEffect(() => {
        if (subUrlObjectAtLoad.urlSubLoaded === false) {
            setTitleClicked(true)
            setNavClicked(false)
        } else {
            setTitleClicked(false)
            setNavClicked(true)
        }
    }, [subUrlObjectAtLoad])

    return (
        <header className='App-header'>
            <Navbar expand="lg">
                <Container className='header-components'>
                    <div>

                        <Link to='/' className='nav-links-font' onClick={() => {
                            setTitleClicked(true)
                            setNavClicked(false)
                        }}>
                            <div className='text-align-left'>
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
                                            <Link onClick={() => {
                                                    setSelectedPage(page)
                                                }}
                                                key={i} className={`nav-links-font links     ${!selectedPage ? (selectedPage === "") : (selectedPage.name === page.name && !titleClicked && navClicked && 'links-selected')}`} to={`/${page.url}`}>{page.name}
                                            </Link>
                                        )
                                    }

                                    else {
                                        return (
                                            <div key={i}
                                                className='featured-button'>
                                                <Link
                                                    onClick={() => {
                                                        setSelectedPage(page)
                                                    }} 
                                                    className='nav-links-font links featured-button' to={`/${page.url}`}>{page.name}
                                                </Link>
                                                <img className='toolbar' src={page.image} alt='wrench toolbar'>
                                                </img>
                                            </div>
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