import { useEffect, useState } from 'react'

const WriteReview = ({ uploading, setUploading, clientValidatedDevices }) => {
    const [id, setId] = useState()
    const [rating, setRating] = useState()
    const [reviewText, setReviewText] = useState()

    const [loadingReview, setLoadingReview] = useState()


    const [loadingDevices, setLoadingDevices] = useState()
    const [arrayLength, setArrayLength] = useState()

    const handleReviewSubmit = async (e) => {
        e.preventDefault()
        setUploading(true)
        const completedReview = {
            owner_rating: rating,
            owner_review: reviewText
        }

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

            const res = await fetch(`/api/clients/${clientValidatedDevices}`)

            if (res.ok) {
                var data = await res.json()
                if (data.devices.length == 0) {
                    setArrayLength(false)
                } else {
                    setArrayLength(true)
                }
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
                                <p>Devices finished loading</p>
                                <p>Write A Review For Me! I appreciate it!</p>

                                <form onSubmit={handleReviewSubmit}>
                                    <div>
                                        <label>Select One Of Your Devices</label>

                                        <select defaultValue={'Your Devices'}
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                        >
                                            <option disabled value='Your Devices'>Your Devices</option>
                                            {loadingDevices.map((device) => {
                                                return (

                                                    <option key={device._id} value={device._id}>{device.device_name}, from {device.device_year}</option>

                                                )
                                            })}
                                        </select>

                                    </div>
                                    <div className="form-components">
                                        <label>
                                            Your Rating:
                                        </label>

                                        <select
                                            defaultValue={'Select a rating'}
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        >
                                            <option disable value='Select a rating'>Select A Rating</option>
                                            <option value='5'>5</option>
                                            <option value='4'>4</option>
                                            <option value='3'>3</option>
                                            <option value='2'>2</option>
                                            <option value='1'>1</option>
                                        </select>


                                    </div>

                                    <div className="form-components">
                                        <label>
                                            Review Text:
                                        </label>

                                        <textarea type="text" required value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                                        </textarea>
                                    </div>

                                    {!uploading && <button className="form-components" type='submit'>
                                        Submit Review
                                    </button>}

                                    {uploading && <button disabled className="form-components">
                                        Uploading review...
                                    </button>}

                                </form>

                                <div>
                                    {loadingDevices &&
                                        <div>
                                            <p>Your List of Reviewed Devices</p>

                                            {loadingDevices.map((reviewedDevice) => {
                                                listNumber = listNumber + 1
                                                if (reviewedDevice.owner_rating && reviewedDevice.owner_review) {
                                                    return (
                                                        <div key={listNumber}>
                                                            <p>{listNumber}.</p>
                                                            <p>{reviewedDevice.device_name}</p>
                                                            <p>{reviewedDevice.device_year}</p>
                                                            <p>{reviewedDevice.owner_rating}</p>
                                                            <p>{reviewedDevice.owner_review}</p>
                                                        </div>
                                                    ) 
                                                }
                                            })}
                                        </div>
                                    }
                                </div>


                            </div>
                        </>
                    }
                </div>
            </>}
        </div>
    )
}

export default WriteReview