import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ImageForm = ({ deviceId, deviceName, setImageForm, uploading, setUploading }) => {

    const [image, setImage] = useState()
    const [uploadedVisibleNames, setVisibleImgNames] = useState([])
    const [showUploadDiv, setShowUploadDiv] = useState(false)

    const uploadImage = (e) => {
        // if (image.length === 3) {
        //     window.alert("You've reached the maximum number of image uploads!")
        //     return
        // }

        if (e) {
            setVisibleImgNames(current => [...current, e.name])
        }

        console.log(e)

        if (!showUploadDiv) {
            setShowUploadDiv(true)
        }

    }

    const clearImagesSeletion = () => {
        setImage()
        setVisibleImgNames([])
        setShowUploadDiv(false)
    }

    const submitImage = async (e) => {
        console.log('for upload:', e)
        const data = new FormData()

        data.append('file', image)
        data.append('upload_preset', 'icanfixit')
        console.log(data)
        setUploading(true)

        const res = await fetch('https://api.cloudinary.com/v1_1/dhrztukgj/image/upload', {
            method: 'post',
            body: data
        })

        if (res.ok) {
            const url = await res.json()
            console.log(url)
            const urlsArray = []
            urlsArray.push(url.secure_url)
            await submitImageInfo(deviceId, urlsArray)
            alert('success!')
            setUploading(false)
            setImageForm(false)
        } else {
            alert(res.statusText)
            console.log(res.statusText)
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

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                alert('success in submitting image info')
            } else {
                console.log(res.statusText)
            }
            
        // })
        return
    }

    return (
        <div>
            <h3>Add photos indicating damage to your {deviceName}</h3>

            <Form>
                <Form.Group className="form-components">
                    <Form.Label>
                        No more than 1 photo.
                    </Form.Label>

                    <Form.Control type='file' id='photo' name='image' onChange={(e) => (
                        setImage(e.target.files[0]),
                        uploadImage(e.target.files[0])
                    )
                    }>
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
                                <Button className='small-buttons' type='button' onClick={clearImagesSeletion}>
                                    Clear Image Selection
                                </Button>

                            </div>
                        </>
                    }


                    {!uploading && <Button className="form-components" type='submit' onClick={submitImage}>
                        Submit Image Info
                    </Button>}

                    {uploading && <Button disabled className="form-components" onClick={submitImage}>
                        Adding Image...
                    </Button>}
                </Form.Group>

            </Form>


        </div>
    )
}

export default ImageForm