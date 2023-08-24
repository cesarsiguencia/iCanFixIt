import React, { useState } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const DeviceForm = ({ uploading, setUploading, setDeviceForm, setDevice, clientId }) => {

    const [deviceName, setDeviceName] = useState()
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()
    const [devicePhotos, setDevicePhotos] = useState([])

    const [showUploadDiv, setShowUploadDiv] = useState(false)

    const [uploadedImgNames, setUploadedImgNames] = useState([])


    console.log(devicePhotos)

    const uploadingFiles = (theImage) => {
        if(devicePhotos.length === 5){
            window.alert("You've reached the maximum number of image uploads!")
            return
        }
        console.log(theImage.files)

        setDevicePhotos(current => [...current, theImage.files])

        if (theImage.files[0]) {
            setUploadedImgNames(current => [...current, theImage.files[0].name])
        }

        if (!showUploadDiv) {
            setShowUploadDiv(true)
        }


    }

    if (devicePhotos[0]) {
        // devicePhotos = devicePhotos.json()
        console.log(devicePhotos, 'the full array')

    }

    

    const clearImagesSeletion = () =>{
        setDevicePhotos([])
        setUploadedImgNames([])
        setShowUploadDiv(false)
    }


    const handleDeviceSubmit = async (e) => {
        setUploading(true)
        e.preventDefault()
        


        // const device = {
        //     device_name: deviceName,
        //     device_year: deviceYear,
        //     device_description: deviceDesc,
        //     device_photos: devicePhotos
        // }

        const response = await fetch("/api/devices", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceName,
                deviceYear,
                deviceDesc,
                clientId
            })
        })

        if (response.ok) {
            var data = await response.json()
            console.log(data, 'where is the device id/')

            var newUrlsArray = []
            uploadedImgNames.map((newName, i)=>{
                newName = `${data._id}/${i}.png`
                console.log(newName)
                newUrlsArray.push(newName)
            })
            console.log(newUrlsArray)

            await submitNewImgNames(data._id, newUrlsArray)


            console.log(newUrlsArray)
            alert('success')
            setDevice(deviceName)
            setDeviceForm(false)




        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    const submitNewImgNames = async(id, imageNames) =>{
        console.log(id, 'from func')
        console.log(imageNames, 'from func')
        const res = await fetch(`/api/devices/imageNames/${id}`,{
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({imageNames})
        })

        if(res.ok){
            var returnedNames = await res.json()
            alert('names uploaded')

        } else {
            console.log(res.statusText)
            return
        }
        return
    }

    return (
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

                    <Form.Control as='textarea' placeholder='Describe the issue with your device in full depth' type="type" required value={deviceDesc} onChange={(e) => { setDeviceDesc(e.target.value) }}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="form-components">
                    <Form.Label>
                        Add Photos (5 Max)
                    </Form.Label>

                    <Form.Control type='file' id='image' name='image' onChange={(e) => uploadingFiles(e.target)}>
                    </Form.Control>
                    <br />

                    {showUploadDiv &&
                        <>
            
                                <div className='text-align-left'>
                                    <strong>Images ready for Upload:</strong>

                                    {uploadedImgNames.map((image, i) => {
                                        return (
                                            <p key={i}>{i + 1}: {image}</p>
                                        )
                                    })}
                                     <Button className='small-buttons' type='button' onClick={clearImagesSeletion}> 
                                        Clear Images Selection
                                    </Button>
                                    
                                </div>
                        </>
                    }



                    {/* 
                    <Button className='small-buttons' type='button' onClick={()=>uploadingStuff()}>
                    Upload Photos (No more than 5)
                    </Button> */}
                </Form.Group>


                {/* <div className="form-components">
                    <label>
                        Zipcode:
                    </label>

                    <input type="type" required value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                    </input>
                </div> */}

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