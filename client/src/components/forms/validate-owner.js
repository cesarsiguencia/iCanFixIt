import React, { useState } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const GrabOwner = ( {uploading, setUploading, setClientId, setClientForm, setClientName}) =>{

    const [validateEmail, setValidateEmail] = useState()
    const [validateZipcode, setValidateZipcode] = useState()

    const handleValidateClient = async(e) =>{
        e.preventDefault()
        setUploading(true)

        const res = await fetch("/api/clients/validate", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                validateEmail,
                validateZipcode
            })
        })

        if(res.ok){
            var returnedClient = await res.json()
            var clientId = returnedClient._id
            var clientName = returnedClient.first_name
            alert('You have been verified!')
            setClientId(clientId)
            setClientName(clientName)
           
            setUploading(false)
            setClientForm(false)
            
        } else {
            console.log(res.statusText)
        }
    }

    return(
        <div>
            <Form onSubmit={handleValidateClient}>
                <Form.Group className="form-components text-align-left">
                        <Form.Label>
                            Email:
                        </Form.Label>

                        <Form.Control type="type" placeholder='Enter the email you submitted with your first request' required value={validateEmail} onChange={(e) => setValidateEmail(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Zipcode:
                    </Form.Label>

                    <Form.Control type="type" placeholder='Zipcode' required value={validateZipcode} onChange={(e) => setValidateZipcode(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                {!uploading && <Button className="form-components" type='submit'>
                    Validate Your Info
                </Button>}

                {uploading &&  <Button disabled className="form-components">
                    Searching Records...
                </Button>}


            </Form>
        </div>
    )
}

export default GrabOwner