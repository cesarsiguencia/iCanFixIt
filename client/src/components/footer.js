import React from 'react'
import { Link } from 'react-router-dom'
import github from '../device-library/utils/github.svg'
import linkedIn from '../device-library/utils/linkedin.png'

const Footer = () => {
    return (


    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-align-left">
                <h5>Terms and Disclosures</h5>
                <p className='text-italics' style={{fontSize: 15}}>1 - I am not a certified repair person. I taught myself what I know. Repair results could vary.</p>
                <p className='text-italics' style={{fontSize: 15}}>2 - In the unlikely event I am unable to fix the device issue, service fees will be reimbursed. However, fees for purchasing replacement items will not be reimbursed.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li><a src="https://github.com/cesarsiguencia"><img className='footer-icons' src={github}></img></a></li>

                    <li><a src="https://www.linkedin.com/in/cesar-siguencia/"><img className='footer-icons' src={linkedIn}></img></a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Links and Projects</h5>
                <ul className="list-unstyled">
                    <li><a className='footer-links' href="https://cesarsiguencia.github.io/my-react-portfolio/">My Portfolio</a></li>
                    <li><a className='footer-links'href="https://cs-10000-days-33ee2045b3a6.herokuapp.com/">10000 Days</a></li>
                    <li><a className='footer-links' href="https://www.apple.com/">Apple Website</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-italics ">Developed by César Siguencia, Copyright ©2023, All rights reserved
    </div>

</footer>
     )
} 

export default Footer 