import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

const WriteReview = ({ uploading, setUploading, clientId }) => {
    const [id, setId] = useState()
    const [rating, setRating] = useState()
    const [reviewText, setReviewText] = useState()

    const [loadingReview, setLoadingReview] = useState()
    console.log(clientId)

    const [loadingDevices, setLoadingDevices] = useState()
    const [arrayLength, setArrayLength] = useState()

    const handleReviewSubmit = async (e) => {
        e.preventDefault()
        setUploading(true)
        const completedReview = {
            owner_rating: rating,
            owner_review: reviewText
        }
        //CHANGEEE!!!!!! ID
        const res = await fetch(`/api/devices/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(completedReview)
        })

        if (res.ok) {
            var data = await res.json()
            setRating('')
            setReviewText('')
            alert('success in submitting review')
            setUploading(false)
            console.log('updated list of devices', loadingDevices)
        } else (
            console.log(res.statusText)
        )
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
                })
                // if (data.devices.length == 0) {

                // } else {

                // }
                setLoadingDevices(data.devices)
            } else {
                console.log(res.statusText)
            }
        }
        setLoadingReview(false)
        fetchDevices()
    }, [uploading])

    var listNumber = 0

    return (
        <div>
            {loadingReview ? (
                <div>
                    <p>Loading devices...</p>
                </div>
            ) : <>
                <div>
                    {!arrayLength ?
                        (
                            <div>
                                <p>You have no devices that have completed receiving service. You may write a review once you receive your device back.</p>
                            </div>
                        ) : <>
                            <div>
                                <h4>Write A Review For Me! I appreciate it!</h4>
                                <br />

                                <Form onSubmit={handleReviewSubmit}>
                                    <Form.Group className='form-components text-align-left'>
                                        <Form.Label>Select One Of Your Devices</Form.Label>

                                        <Form.Select defaultValue={'Your Devices'}
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                        >
                                            <option disabled value='Your Devices'>List of Serviced Devices</option>
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
                                            <option disabled value='Select a rating'>Select A Rating</option>
                                            <option value='5'>5</option>
                                            <option value='4'>4</option>
                                            <option value='3'>3</option>
                                            <option value='2'>2</option>
                                            <option value='1'>1</option>
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
                                <br/>

                                {loadingDevices &&
                                    <ListGroup as="ol" numbered className='form-components'>
                                        <h4>Your List of Reviewed Devices</h4>
                                        <br/>
                                        {loadingDevices.map((reviewedDevice) => {

                                            if (reviewedDevice.owner_rating && reviewedDevice.owner_review && reviewedDevice.device_status === 'Completed') {
                                                // listNumber = listNumber + 1
                                                return (
                                                    <ListGroup.Item key={reviewedDevice.createdAt}
                                                        as="li"
                                                        className="d-flex align-items-start"
                                                    >
                                                        <div className="ms-2 fw-bold text-align-left">
                                                        <div className="fw-bold text-align-left">{reviewedDevice.device_name}</div>
                              

                                                            <div className=" fw-normal text-align-left">
                                                                <br/>
                                                                <p>Device Year: {reviewedDevice.device_year}</p>
                                                                <p>Your Service Rating: {reviewedDevice.owner_rating}</p>
                                                                <p>Your Service Review: {reviewedDevice.owner_review}</p>

                                                            </div>
                                                        </div>


                                                    </ListGroup.Item>
                                                )
                                            }
                                        })}
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