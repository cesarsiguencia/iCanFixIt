import React from 'react'
import Dog from '../../device-library/utils/dog-running.gif'
import Button from 'react-bootstrap/Button'
const noFinishedDevices = ({ clientName }) => {

    return (
        <div>
            <img src={Dog} className='dog-running' alt='Running dog'></img>
            <p>You have no devices that have completed receiving service, {clientName}. You may write a review once you receive your device back.</p>

            <a href='mailto:cd.siguencia@gmail.com'>
                <Button className="form-components">
                    Contact César directly for status update
                </Button>
            </a>


        </div>
    )
}

export default noFinishedDevices