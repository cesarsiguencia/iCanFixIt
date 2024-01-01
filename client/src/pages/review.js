import React, { useState } from 'react'
import ReviewForm from '../components/forms/review-form'
import ValidateClient from '../components/forms/validate-owner'
import HeroComp from '../components/hero'
import Container from 'react-bootstrap/Container'
import Credentials from '../device-library/credentials.avif'
import UserIcon from '../device-library/user.avif'

const Review = () => {

    const [clientValidateForm, setClientForm] = useState(true)
    const [clientId, setClientId] = useState()
    const [uploading, setUploading] = useState()
    const [clientName, setClientName] = useState()

    return (
        <div className='cesar'>
            
            <Container className='absolute-bg' >
            
            <br/>
            {        
                clientValidateForm &&
                <div>
                    
                    <h3>Write A Review Of My Services!</h3>
                    <p>In order to write a review for your one of your recorded devices, client's information must be in my system, has had their device serviced by me, and has had their device returned back with a 'Completed' status placed on by me in the system.</p>

                    <p>Please validate the personal information you provided when you submited a new request, down below:</p>
                    <div className='credentials-box'>
                        <img className='user-icon' src={UserIcon}></img>
                        <p className='nav-links-font'>
                            Use the sample credentials below!
                        </p>
                        <img className='credentials-img' src={Credentials}>
                        </img>
                    </div>
                    <ValidateClient
                        uploading={uploading}
                        setUploading={setUploading}
                        setClientId={setClientId}
                        setClientForm={setClientForm}
                        setClientName={setClientName}
                    >
                    </ValidateClient>
                </div>

            }
            {
                !clientValidateForm &&
                <ReviewForm
                    uploading={uploading}
                    setUploading={setUploading}
                    clientId={clientId}
                    clientName={clientName}
                ></ReviewForm>
            }
            </Container>
            <HeroComp className="relative-bg"></HeroComp>
        </div>
    )
}

export default Review