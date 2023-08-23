import React from 'react';
// import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import toolbar from '../device-library/utils/wrench-svgrepo-com.svg'

const Header = () => {
    return (
        // <header className="App-header">
        //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
        //     <div className='header-elements'>
        //         <Navbar>
        //         <Container>
        //             <Nav>
        //                 <Link className='nav-links' to='/icanfixit'>
        //                     <p className='nav-links-font'>
        //                         iCanFixIt
        //                     </p>
        //                 </Link>
        //             </Nav>

        //         </Container>
        //         </Navbar>


        //     </div>



        //     {/* <button
        //   class="burger"
        //   onclick="toggleMenu()"></button> */}
        //     {/* <div class="background"></div> */}
        //     <div className="header-elements menu">
        //         <Navbar expand="lg">
        //             <Container>
        //                 <Nav>
        //                     <Link className='nav-links' to="/icanfixit/about">
        //                         <p className='nav-links-font'
        //                         // style="animation-delay: 0.2s"
        //                         >
        //                             About
        //                         </p>
        //                     </Link>

        //                     <Link className='nav-links' to="/icanfixit/gallery">
        //                         <p className='nav-links-font'>
        //                             Gallery
        //                         </p>
        //                     </Link>

        //                     <Link className='nav-links' to='/icanfixit/review'>
        //                         <p className='nav-links-font'>
        //                             Review Me!
        //                         </p>
        //                     </Link>

        //                     <Link className='nav-links' to='/icanfixit/form'>
        //                         <p className='nav-links-font nav-submit'>
        //                             Submit Order
        //                         </p>
        //                     </Link>
        //                 </Nav>

        //             </Container>

        //         </Navbar>
        //         {/* 
        //         <Navbar >
        //             <Container>

        //                     <Nav className="me-auto">
        //                         <Nav.Link href="#home">Home</Nav.Link>
        //                         <Nav.Link href="#link">Link</Nav.Link>
        //                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                             <NavDropdown.Item href="#action/3.2">
        //                                 Another action
        //                             </NavDropdown.Item>
        //                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                             <NavDropdown.Divider />
        //                             <NavDropdown.Item href="#action/3.4">
        //                                 Separated link
        //                             </NavDropdown.Item>
        //                         </NavDropdown>
        //                     </Nav>

        //             </Container>
        //         </Navbar> */}
        //     </div>
        //     {/* <script type="text/javascript">
        //         const toggleMenu = () =>
        //         document.body.classList. toggle( "open" );
        //       </script> */}
        // </header>

        <header className='App-header'>
            <Navbar expand="lg">
                <Container className='header-components'>
                    <Navbar.Brand>
                        <Link  to='/icanfixit' className='nav-links-font'>
                            <div class='text-align-left'>
                            <p className='nav-links-font header-title'>iCanFixIt</p>
                            <small className='header-desc'>Repair Your Device With Me!</small>
                            </div>
                            
                        </Link >
                    </Navbar.Brand>
                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className='nav-links-font links' to='/icanfixit/about'>About
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-links-font links' to='/icanfixit/gallery'>Gallery
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-links-font links' to='/icanfixit/review'>Review Me
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='featured-button'>
                                <Link className='nav-links-font links' to='/icanfixit/form'>Request Service 
                                </Link>
                                <img className='toolbar' src={toolbar}>
                                </img>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        

        </header>

    )
}

export default Header