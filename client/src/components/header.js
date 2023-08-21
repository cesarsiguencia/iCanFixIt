import React from 'react';
import { Link } from 'react-router-dom'

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
                <nav>
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
                </nav>
            </div>
            {/* <script type="text/javascript">
                const toggleMenu = () =>
                document.body.classList. toggle( "open" );
              </script> */}
        </header>

    )
}

export default Header