import React, { useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AlertComp from "../notices/alert"

const DeviceForm = ({ uploading, setUploading, setDeviceForm, setDeviceName, setDeviceId, clientId }) => {

    const [deviceTitle, setDeviceTitle] = useState()
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()
    const [alertMessage, setAlertMessage] = useState()

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
            setDeviceName(deviceTitle)
            setDeviceId(data._id)
            setDeviceForm(false)

        } else {
            const alertModal = document.querySelector('#alert')
            alertModal.style.height = '100vh'
            setAlertMessage({server_mes: response.statusText, personal: 'Problem uploading your device data. Try again later.', reload: true})
        }
        setUploading(false)
    }

    return (
        <div>
            <AlertComp alertMessage={alertMessage}></AlertComp>
            <h4>Enter the device info:</h4>

            <Form onSubmit={handleDeviceSubmit}>
                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Device Name (Include Generation #)
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