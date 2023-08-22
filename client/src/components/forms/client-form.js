import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const ClientForm = ({ uploading, setUploading, setClientForm, setClientId, setClientName }) => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [state, setState] = useState()
    const [zipcode, setZipcode] = useState()


    const handleClientSubmit = async (e) => {
        setUploading(true)
        e.preventDefault()

        const client = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            address_street: address,
            address_state: state,
            address_zipcode: zipcode
        }

        const response = await fetch("/api/clients", {
            method: 'post',
            body: JSON.stringify(client),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            var data = await response.json()
            alert('success')
            setClientId(data._id)
            setClientName(firstName)
            setClientForm(false)
        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    return (
        <div >

            <Form onSubmit={handleClientSubmit}>
                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        First Name:
                    </Form.Label>

                    <Form.Control as='input' type="type" placeholder='Enter Your First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Last Name:
                    </Form.Label>

                    <Form.Control as='input' type="type" placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Email:
                    </Form.Label>

                    <Form.Control as='input' type="type" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Street and Building Number:
                    </Form.Label>

                    <Form.Control as='input' type="type" placeholder='Enter Street Addres' required value={address} onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>

                </Form.Group>


                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        State:
                    </Form.Label>

                    <Form.Control as='input' placeholder='State' type="type" required value={state} onChange={(e) => setState(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Zipcode:
                    </Form.Label>

                    <Form.Control as='input' type="type" placeholder='Five digits'required value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                {!uploading && <Button className="form-components" type='submit'>
                    Submit Your Info
                </Button>}

                {uploading && <Button disabled className="form-components">
                    Adding client...
                </Button>}
            </Form>
        </div>
    )

}

export default ClientForm