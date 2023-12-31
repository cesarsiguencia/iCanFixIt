import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AlertComp from '../notices/alert'

const ImageForm = ({ deviceId, deviceName, setImageForm, uploading, setUploading}) => {

    const [image, setImage] = useState('')
    const [uploadedVisibleNames, setVisibleImgNames] = useState([])
    const [showUploadDiv, setShowUploadDiv] = useState(false)
    const [alertMessage, setAlertMessage] = useState()

    const alertModal = document.querySelector('#alert')

    const uploadImage = (e) => {
        // if (image.length === 3) {
        //     window.alert("You've reached the maximum number of image uploads!")
        //     return
        // }

        if (e) {
            setVisibleImgNames([e.name])
        } 

        if(!e){
            setVisibleImgNames([])
        }

        console.log(e)

        if (!showUploadDiv) {
            setShowUploadDiv(true)
        }
        console.log(image)

    }

    // const clearImagesSeletion = () => {
    //     setImage('')
    //     setVisibleImgNames([])
    //     setShowUploadDiv(false)
    // }

    const submitImage = async () => {
        if(image){
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'icanfixit')
    
            setUploading(true)
    
            const res = await fetch('https://api.cloudinary.com/v1_1/dhrztukgj/image/upload', {
                method: 'post',
                body: data
            })
    
            if (res.ok) {
                const url = await res.json()
                const urlsArray = []
                urlsArray.push(url.secure_url)
                await submitImageInfo(deviceId, urlsArray)
                setUploading(false)
                setImageForm(false)
            } else {
                // if image is unable to be posted through the cloudinary API, then delete the device entirely.
                const deleteDeviceOnFetchError = await fetch(`/api/devices/${deviceId}`,{
                    method:'DELETE'
                })
    
                if(deleteDeviceOnFetchError.ok){
                    alertModal.style.height = '100vh'
                    setAlertMessage({server_mes: res.statusText, personal: `Problem submitting image to 3rd party server. Try again later. 
                    
                    If you're a new client, try through the "Returning" option as your client information was saved, but not your device information`, reload: true})
                } else {
                    alertModal.style.height = '100vh'
                    setAlertMessage({server_mes: res.statusText, personal: 'Please submit a new order later.', reload: true})
                }
            }
        } else {
            setUploading(false)
            setImageForm(false)
        }

       
    }

    const submitImageInfo = async(deviceId, urlsArray) => {
        // urlsArray.map(async (singleImageUrl, i) => {

            var imageInfo = {
                name: `${deviceId}/0.png`,
                deviceById: deviceId,
                image_url: urlsArray[0]
            }

            const res = await fetch('/api/images/upload', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(imageInfo)
            })

            if(!res.ok){
                alertModal.style.height = '100vh'
                setAlertMessage({server_mes: res.statusText, personal: 'Problem submitting image info. Try again later.', reload: true})
            }
        // })
        return
    }

    return (
        <div>
            <AlertComp alertMessage={alertMessage}></AlertComp>
            <h3>Add photo for {deviceName} (Optional)</h3>

            <Form>
                <Form.Group className="form-components">
                    <Form.Label>
                        <p>If you have a photo showing proof of damage to device, please upload it now. Otherwise, continue with submission WITHOUT image.</p>
                        <strong> Upload ONE image only. Only PNG of JPEG format</strong>
                     
                    </Form.Label>

                    {/* {!uploading && <Button className="form-components small-buttons" style={{width: '200px'}}type='submit' onClick={submitImage}>
                        Skip Image Upload
                    </Button>}

                    {uploading && <Button disabled className="form-components" style={{width: '200px'}}onClick={submitStaple}>
                        Finalizing...
                    </Button>} */}

                    <Form.Control type='file' id='photo' name='image' onChange={(e) => (
                        setImage(e.target.files[0]),
                        uploadImage(e.target.files[0])
                    )
                    }
                    
                    >
                    </Form.Control>
                    <br />


                    {showUploadDiv &&
                        <>

                            <div className='text-align-left'>
                                <strong>Images ready for Upload:</strong>

                                {uploadedVisibleNames.map((imageName, i) => {
                                    return (
                                        <p key={i}>{i + 1}: {imageName}</p>
                                    )
                                })}
                                {/* <Button className='small-buttons' type='button' onClick={clearImagesSeletion}>
                                    Clear Image Selection
                                </Button> */}

                            </div>
                        </>
                    }

                    {!uploading && <Button className="form-components" type='submit' onClick={submitImage}>
                        Finish Submission
                    </Button>}

                    {uploading && <Button disabled className="form-components" onClick={submitImage}>
                        Loading...
                    </Button>}


                </Form.Group>

            </Form>

        </div>
    )
}

export default ImageForm