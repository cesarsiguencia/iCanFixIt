import { Link } from 'react-router-dom'

const ServiceSubmit = ({ clientName, device }) => {


    return (
        <div>
            Thank you for contacting me, {clientName}! Your service request for the device {device} was submitted successfully! Please wait for an email from me within the next 48 hours.

            <Link to='/icanfixit'>
                <button type='button' className='form-components'>
                    Go back to homepage

                </button>
            </Link>

        </div>
    )
}

export default ServiceSubmit