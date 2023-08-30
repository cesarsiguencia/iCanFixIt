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
                Thank you for contacting me, {clientName}! Your service request for the device {device} was submitted successfully! Please wait for an email from me within the next 48 hours.
            </div>


            <Link to='/icanfixit'>
                <Button type='button' className='form-components'>
                    Go back to homepage
                </Button>
            </Link>

        </div>
    )
}

export default ServiceSubmit