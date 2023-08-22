import React, { useState } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const DeviceForm = ({uploading, setUploading, setDeviceForm, setDevice, clientId}) =>{

    const [deviceName, setDeviceName] = useState()  
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()
    // const [devicePhotos, setDevicePhotos] = useState()

    const handleDeviceSubmit = async (e) =>{
        setUploading(true)
        e.preventDefault()

        const device = {
            device_name: deviceName,
            device_year: deviceYear,
            device_description: deviceDesc,
            owner: clientId
        }

        const response = await fetch("/api/devices", {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(device)
        })

        if(response.ok){
            var data = await response.json()
            alert('success')
            setDevice(deviceName)
            setDeviceForm(false)
            

        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    return(
        <div>
            <h4>Enter the device info:</h4>

            <Form onSubmit={handleDeviceSubmit}>
                <Form.Group className="form-components text-align-left">
                    <Form.Label>
                        Device Name:
                    </Form.Label>

                    <Form.Control as='input' placeholder='Title of the device with Generation #' type="type" required value={deviceName} onChange={(e) => setDeviceName(e.target.value)}>
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

                    <Form.Control as='textarea' placeholder='Describe the issue with your device in full depth' type="type" required value={deviceDesc} onChange={(e) => setDeviceDesc(e.target.value)}>
                    </Form.Control>
                </Form.Group>


                {/* <div className="form-components">
                    <label>
                        Zipcode:
                    </label>

                    <input type="type" required value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                    </input>
                </div> */}

                {!uploading &&   <Button className="form-components" type='submit'>
                    Submit Device Info
                </Button>}

                {uploading &&     <Button disabled className="form-components">
                    Adding Your Device...
                </Button>}

            </Form>  
        </div>
    )
}

export default DeviceForm