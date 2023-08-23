import React from 'react'
import Dog from '../../device-library/utils/dog-running.gif'

const noFinishedDevices = ({clientName}) =>{

    return(
        <div>
        <img src={Dog} className='dog-running'></img>
        <p>You have no devices that have completed receiving service, {clientName}. You may write a review once you receive your device back.</p>
    </div>
    )
}

export default noFinishedDevices