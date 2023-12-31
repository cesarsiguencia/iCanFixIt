import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import successCheck from '../../device-library/utils/success.gif'
const ServiceSubmit = ({ clientName, device }) => {

    return (
        <div>
            <img className='success-gif' src={successCheck} alt='Success checkmark'>
            </img>
            <div>
                <p>Thank you for contacting me, {clientName}! Your service request for the device {device} was submitted successfully! Please wait for an email from me within the next 48 hours.</p>
                <br/>
            </div>

            <Link to='/gallery'>
                <Button type='button' className='form-components'>
                    View your submitted device on 'Gallery'!
                </Button>
            </Link>
            


            <Link to='/'>
                <Button type='button' className='form-components'>
                    Go back to homepage
                </Button>
            </Link>

        </div>
    )
}

export default ServiceSubmit