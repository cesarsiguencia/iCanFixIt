import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

   
    <footer >
        <div className="footer-flex  margin-center">
            <div className='text-align-left flex-row'>
                <p>Developed by César Siguencia</p>
                <p>Copyright ©2023, All rights reserved</p>
            </div>

            <div className='text-align-right flex-row'>
                <p>Did you like this website? I coded it!</p>
                <p>Check out more of my projects 
                <a target="_blank" className='no-underline'
                    href="https://cesarsiguencia.github.io/my-react-portfolio/"> HERE!</a>
                     </p>
            </div>
        </div>

    </footer>
     )
} 

export default Footer 