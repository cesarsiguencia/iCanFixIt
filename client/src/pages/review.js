import React, { useState } from 'react'
import ReviewForm from '../components/forms/review-form'
import ValidateClient from '../components/forms/validate-owner'
import HeroComp from '../components/hero'
import Container from 'react-bootstrap/Container'

const Review = () => {

    const [clientValidateForm, setClientForm] = useState(true)
    const [clientId, setClientId] = useState()
    const [uploading, setUploading] = useState()
    const [clientName, setClientName] = useState()


    return (
        <div className='cesar'>
            <HeroComp></HeroComp>
            <Container>
            <br/>
            {
                        
                        clientValidateForm &&
        
                        <div>
                            
                            <h3>Write A Review for me!</h3>
                            <p>In order to write a review for your device, client information must be listed within my records, has previously used my services, and has a device/devices saved with a 'Completed' service status.</p>
        
                            <p>Please validate the personal information you provided when you submited a new request, down below:</p>
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
           
            </div>



    
    )
}

export default Review