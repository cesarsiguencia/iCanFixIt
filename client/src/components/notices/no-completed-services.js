import React from 'react'
import Dog from '../../device-library/utils/dog-running.gif'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const noFinishedDevices = ({clientName}) =>{

    return(
        <div>
        <img src={Dog} className='dog-running'></img>
        <p>You have no devices that have completed receiving service, {clientName}. You may write a review once you receive your device back.</p>

        <a>
        <Button className="form-components" href='mailto:cd.siguencia@gmail.com'>
                    Contact César directly for status update
        </Button>
        </a>


    </div>
    )
}

export default noFinishedDevices