import React, {useState} from 'react';
// import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import toolbar from '../device-library/utils/wrench-svgrepo-com.svg'

const Header = () => {
    // const {portfolioClicked} = props

    const [titleClicked, setTitleClicked] = useState()
    const [navClicked, setNavClicked] = useState()
  
    // if(portfolioClicked === true){
    //   setTitleClicked(false)
    //   setNavClicked(true)
    // }


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
    
    //   let subUrlObjectAtLoad
    //   const urlsArray = window.location.href.split('/')
    //   const urlOfSubPage = urlsArray[urlsArray.length - 1] 
      
    //   if(urlOfSubPage!== 'my-react-portfolio'){
    //     subUrlObjectAtLoad = {
    //       urlSub: urlOfSubPage,
    //       urlSubLoaded: true
    //     }
    //   } else {
    //     subUrlObjectAtLoad = {
    //       urlSub: "not a urlSub",
    //       urlSubLoaded: false
    //     }
    //   }
    
    //   let currentIndex
    //   const loadedPage = subUrlObjectAtLoad.urlSub
    
    //   if(loadedPage){
    //     pages.forEach((page) => {
    //       if(page.url === loadedPage){
    //         currentIndex = pages.indexOf(page)
    //       }
    //     })
    //   }
    
    //   const [selectedPage, setSelectedPage] = useState(pages[currentIndex])

    return (
        <header className='App-header'>
            <Navbar expand="lg">
                <Container className='header-components'>
                    <Navbar.Brand>
                        <Link  to='/icanfixit' className='nav-links-font' onClick={()=>{
                            setTitleClicked(true)
                            setNavClicked(false)
                        }}>
                            <div class='text-align-left'>
                            <p className='nav-links-font header-title'>iCanFixIt</p>
                            <small className='header-desc'>Repair Your Device With Me!</small>
                            </div>
                            
                        </Link >
                    </Navbar.Brand>
                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav" >
                        <Nav className="me-auto" 
                        onClick={()=>{
                            setNavClicked(true)
                            setTitleClicked(false)
                            }}
                        >
                            {pages.map((page)=>{
                                if(!page.image){
                                    return(
                                        <Nav.Link>
                                        <Link className='nav-links-font links' to={`/icanfixit/${page.url}`}>{page.name}
                                        </Link>
                                    </Nav.Link>
                                    )
                                } else {
                                    return(
                                        <Nav.Link className='featured-button'>
                                        <Link className='nav-links-font links' to={`/icanfixit/${page.url}`}>{page.name}
                                        </Link>
                                        <img className='toolbar' src={page.image}>
                                        </img>
                                    </Nav.Link>
        
                                    )
                                }
                         
                            })}
       


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        

        </header>

    )
}

export default Header