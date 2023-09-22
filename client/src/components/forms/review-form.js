import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import NoDevices from '../notices/no-completed-services'
import LoadingComp from '../notices/loading'
import AlertComp from '../notices/alert'

const WriteReview = ({ uploading, setUploading, clientId, clientName }) => {
    const [id, setId] = useState()
    const [rating, setRating] = useState()
    const [reviewText, setReviewText] = useState()
    const [loadingReview, setLoadingReview] = useState()
    const [loadingDevices, setLoadingDevices] = useState()
    const [arrayLength, setArrayLength] = useState()
    const [reviewedDevices, setReviewedDevices] = useState(false)
    const [alertMessage, setAlertMessage] = useState()

    const alertModal = document.querySelector('#alert')

    const handleReviewSubmit = async (e) => {
        e.preventDefault()
        setUploading(true)
        const completedReview = {
            owner_review: reviewText,
            owner_rating: rating
        }
        const res = await fetch(`/api/devices/review/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(completedReview)
        })

        if (res.ok) {
            setReviewText('')
            alertModal.style.height = '100vh'
            setAlertMessage({server_mes: res.statusText, personal: 'Success in Uploading!', reload: false})
            setUploading(false)
            
        } else {
            alertModal.style.height = '100vh'
            setAlertMessage({server_mes: res.statusText, personal: 'Problem uploading your data. Try again later.', reload: true})
        }
    }


    useEffect(() => {
        setLoadingReview(true)
        const fetchDevices = async () => {

            const res = await fetch(`/api/clients/${clientId}`)

            if (res.ok) {
                var data = await res.json()

                data.devices.forEach((deviceServiced) => {
                    if (deviceServiced.device_status === "Completed") {
                        setArrayLength(true)
                    }

                    if (deviceServiced.owner_rating) {
                        setReviewedDevices(true)
                    }
                })

                setLoadingDevices(data.devices)
            } else {
                alertModal.style.height = '100vh'
                setAlertMessage({server_mes: res.statusText, personal: 'Problem fetching your data. Try again later.', reload: true})
            }
        }
        setLoadingReview(false)
        fetchDevices()
    }, [uploading])


    return (
        <div>
            <AlertComp alertMessage={alertMessage}></AlertComp>
            {loadingReview ? (
                <div>
                    <LoadingComp></LoadingComp>
                </div>
            ) : <>
                <div>
                    {!arrayLength ?
                        (
                            <NoDevices clientName={clientName}></NoDevices>
                        ) : <>
                            <div>
                                <h4>Write Or Update A Review For Me! Thank You, {clientName}!</h4>
                                <br />

                                <Form onSubmit={handleReviewSubmit} id='review-form'>
                                    <Form.Group className='form-components text-align-left'>
                                        <Form.Label>Select One Of Your Devices with Completed Service</Form.Label>

                                        <Form.Select defaultValue={'Your Devices'}
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                        >
                                            <option disabled value='Your Devices'>List of Completed Service Devices Appear Here</option>
                                            {loadingDevices.map((device) => {
                                                if (device.device_status === "Completed") {
                                                    return (

                                                        <option key={device._id} value={device._id}>{device.device_name}, from {device.device_year}</option>

                                                    )
                                                }
                                           
                                            })}
                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group className="form-components text-align-left">
                                        <Form.Label>
                                            Your Rating:
                                        </Form.Label>

                                        <Form.Select
                                            defaultValue={'Select a rating'}
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        >
                                            <option disabled value='Select a rating'>Pick A Rating</option>
                                            <option value='⭐️⭐️⭐️⭐️⭐️'>5</option>
                                            <option value='⭐️⭐️⭐️⭐️'>4</option>
                                            <option value='⭐️⭐️⭐️'>3</option>
                                            <option value='⭐️⭐️'>2</option>
                                            <option value='⭐️'>1</option>
                                        </Form.Select>


                                    </Form.Group>

                                    <Form.Group className="form-components text-align-left">
                                        <Form.Label>
                                            Review Text:
                                        </Form.Label>

                                        <Form.Control as="textarea" rows={4} required value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>

                                    {!uploading && <Button className="form-components" type='submit'>
                                        Submit Review
                                    </Button>}

                                    {uploading && <Button disabled className="form-components">
                                        Uploading review...
                                    </Button>}

                                </Form>
                                <br />

                                {loadingDevices &&
                                    <ListGroup as="ol" numbered className='form-components'>
                                                 <h4>Your List of Reviewed Devices</h4>
                                        <br />

                                        {!reviewedDevices ? 
                                            <div><p>You have not reviewed any devices yet. Start one at the top!</p>
                                           <br/> 
                                           <br/> 
                                            </div>

                                        :
                                            <div>
                                                <p>Your review may be featured on my home page!</p>
                                                {loadingDevices.map((reviewedDevice) => {

                                                    if (reviewedDevice.owner_rating && reviewedDevice.owner_review && reviewedDevice.device_status === 'Completed') {

                                                        return (
                                                            <ListGroup.Item key={reviewedDevice.createdAt}
                                                                as="li"
                                                                className="d-flex align-items-start review-block"
                                                            >
                                                                <div className="col-9 fw-bold text-align-left review-desc-div">
                                                                    <div className="fw-bold text-align-left">{reviewedDevice.device_name}</div>


                                                                    <div className=" fw-normal text-align-left">
                                                                        <br />
                                                                        <p>Device Year: {reviewedDevice.device_year}</p>
                                                                        <p>Your Service Rating: {reviewedDevice.owner_rating}</p>
                                                                        <p>Your Service Review: {reviewedDevice.owner_review}</p>

                                                                    </div>
                                                                </div>

                                                                <div className='col-3 review-img-div'>
                                                                    <img src={reviewedDevice.images[0].image_url} className='review-img' alt={reviewedDevice.device_name}></img>
                                                                </div>


                                                            </ListGroup.Item>
                                                        )
                                                    }
                                               
                                                })}
                                            </div>


                                    
                                        } 
                                    

                                    </ListGroup>
                                }



                            </div>
                        </>
                    }
                </div>
            </>}
        </div>
    )
}

export default WriteReview