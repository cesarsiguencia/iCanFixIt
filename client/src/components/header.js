import React from 'react';
// import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <Link className='nav-links' to='/icanfixit'>
                <p className='nav-links-font'>
                    iCanFixIt
                </p>
            </Link>


            {/* <button
          class="burger"
          onclick="toggleMenu()"></button> */}
            {/* <div class="background"></div> */}
            <div className="menu">
                <Navbar expand="lg">
                    <Container>
                        <Nav>
                        <Link className='nav-links' to="/icanfixit/about">
                        <p className='nav-links-font'
                        // style="animation-delay: 0.2s"
                        >
                            About
                        </p>
                    </Link>

                    <Link className='nav-links' to="/icanfixit/gallery">
                        <p className='nav-links-font'>
                            Gallery
                        </p>
                    </Link>

                    <Link className='nav-links' to='/icanfixit/review'>
                        <p className='nav-links-font'>
                            Review Me!
                        </p>
                    </Link>

                    <Link className='nav-links' to='/icanfixit/form'>
                        <p className='nav-links-font nav-submit'>
                            Submit Order
                        </p>
                    </Link>
                        </Nav>

                    </Container>

                </Navbar>
{/* 
                <Navbar >
                    <Container>

                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                    </Container>
                </Navbar> */}
            </div>
            {/* <script type="text/javascript">
                const toggleMenu = () =>
                document.body.classList. toggle( "open" );
              </script> */}
        </header>

    )
}

export default Header