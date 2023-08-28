import React, { useState } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const DeviceForm = ({ uploading, setUploading, setDeviceForm, setDeviceName, setDeviceId, clientId }) => {

    const [deviceTitle, setDeviceTitle] = useState()
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()

    const handleDeviceSubmit = async (e) => {
        setUploading(true)
        e.preventDefault()

        const deviceInfo = {
            device_name: deviceTitle,
            device_year: deviceYear,
            device_description: deviceDesc,
            owner: clientId
        }
        
        const response = await fetch("/api/devices", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deviceInfo)
        })

        if (response.ok) {
            
            var data = await response.json()
            console.log(data, 'where is the device id/')

            alert('success')
            setDeviceName(deviceTitle)
            setDeviceId(data._id)
            setDeviceForm(false)

        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    return (
        <div>
            <h4>Enter the device info:</h4>

            <Form onSubmit={handleDeviceSubmit}>
                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Device Name:
                    </Form.Label>

                    <Form.Control as='input' placeholder='Title of the device with Generation #' type="type" required value={deviceTitle} onChange={(e) => setDeviceTitle(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components">
                    <Form.Label>
                        Device Year:
                    </Form.Label>

                    <Form.Control as='input' placeholder='4 digits' type="type" required value={deviceYear} onChange={(e) => setDeviceYear(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components">
                    <Form.Label>
                        Description
                    </Form.Label>

                    <Form.Control as='textarea' placeholder='Describe the issue with your device in full depth' type="type" required value={deviceDesc} onChange={(e) => { setDeviceDesc(e.target.value) }}>
                    </Form.Control>
                </Form.Group>


                {!uploading && <Button className="form-components" type='submit'>
                    Submit Device Info
                </Button>}

                {uploading && <Button disabled className="form-components">
                    Adding Your Device...
                </Button>}

            </Form>
        </div>
    )
}

export default DeviceForm