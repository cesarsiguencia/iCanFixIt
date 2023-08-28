import React, { useState } from "react"
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'

const DeviceForm = ({ uploading, setUploading, setDeviceForm, setDeviceName, setDeviceId, clientId }) => {

    const [deviceTitle, setDeviceTitle] = useState()
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()
    // const [devicePhotos, setDevicePhotos] = useState([])

    // const [showUploadDiv, setShowUploadDiv] = useState(false)

    // const [uploadedVisibleNames, setVisibleImgNames] = useState([])

    // const [actualUploads, setActualUploads] = useState([])

    // const [newOne, setNewOne] = useState()

    // const uploadingFiles = (theImage) => {
    //     if(devicePhotos.length === 5){
    //         window.alert("You've reached the maximum number of image uploads!")
    //         return
    //     }
    //     console.log(theImage.files)
    //     if (theImage.files[0]) {
    //         setVisibleImgNames(current => [...current, theImage.files[0].name])
    //     }

    //     setDevicePhotos(current => [...current, theImage.files])
        // setNewOne(theImage.files[0])


        // if (!showUploadDiv) {
        //     setShowUploadDiv(true)
        // }


    // }

    // const clearImagesSeletion = () =>{
    //     setDevicePhotos([])
    //     setVisibleImgNames([])
    //     setShowUploadDiv(false)
    // }


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

            // var newUrlsArray = []
            // uploadedVisibleNames.map((newName, i)=>{
            //     newName = `${data._id}/${i}.png`
            //     newUrlsArray.push(newName)
            // })

            // await submitNewImgNames(data._id, newUrlsArray)
            // await sendNewPhotos(newUrlsArray)
            // await submitPhotos(data._id, newUrlsArray)
            // console.log(actualUploads)
            alert('success')
            setDeviceName(deviceTitle)
            setDeviceId(data._id)
            setDeviceForm(false)




        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    // const submitNewImgNames = async(id, imageNames) =>{
    //     console.log(id, 'from func')
    //     console.log(imageNames, 'from func')
    //     const res = await fetch(`/api/devices/${id}`,{
    //         method: 'put',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({imageNames})
    //     })

    //     if(res.ok){
    //         var returned = await res.json()
    //         alert('PHOTOS uploaded')

    //     } else {
    //         console.log(res.statusText)
    //         return
    //     }
    //     return
    // }

    // const [urlsArray, setUrlsArray] = useState([])

    // const [photosInfo setPhotosInfo] = useState([])

    // const submitPhotos = async (deviceId, newNames) => {
  
    //     console.log(devicePhotos)


    //         var data = new FormData()
    //         data.append('file', newOne)
    //         data.append('upload_preset', 'icanfixit')
    //         const res = await fetch ('https://api.cloudinary.com/v1_1/dhrztukgj/image/upload', {
    //             method:'post',
    //             body: data

    //         })

    //         const url = await res.json()
    //         console.log(url)
    //         setUrlsArray(current => [...current, url])
        // })

        // urlsArray.forEach(async(returnedImage, i)=>{
        //     var imageInfo = {
        //         name: newNames[i],
        //         device_tied: deviceId,
        //         image_url: returnedImage
        //     }

        //     const res = await fetch('/api/images/upload',{
        //         method:'post',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(imageInfo)
        //     })

        //     if(res.ok){
        //         const data = await res.json()
        //         console.log(data)
            
        //         return
        //     } else {
        //         console.log(res.statusText)
        //     }
        // })

        
    // }

    // const sendNewPhotos = async(newNames) =>{
    //     var firstName= newNames[0]
    //     var firstPhoto = devicePhotos[0]
    //     const response = await fetch("/api/images",{
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             firstName,
    //             clientId,
    //             firstPhoto
                
    //         })
    //     })
    // }

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