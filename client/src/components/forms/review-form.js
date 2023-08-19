import { useEffect, useState } from 'react'

const WriteReview = ({ uploading, setUploading, clientValidatedDevices }) => {

    const [rating, setRating] = useState()
    const [reviewText, setReviewText] = useState()

    const handleReviewSubmit = async (e) => {
        e.preventDefault()

        const completedReview = {
            owner_rating: rating,
            owner_review: reviewText
        }

        const res = await fetch("api/devices/:id", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(completedReview)
        })

        if (res.ok) {
            alert('success')
        } else (
            console.log(res.statusText)
        )
    }

    const [loadingDevices, setLoadingDevices] = useState()
    const [arrayLength, setArrayLength] = useState()



    // useEffect(()=>{
    //     fetch(`/api/clients/${clientValidatedDevices}`)
    //     .then(res => res.json())
    //     .then(clientInfo => {
    //         console.log(clientInfo)
    //         clientDevices = clientInfo.devices
    //         console.log(clientDevices)
    //         setLoadingDevices(true)
    //     })
    // })

    let devicesStored
    


    useEffect(() => {
        setUploading(false)
        const fetchDevices = async () => {

            const res = await fetch(`/api/clients/${clientValidatedDevices}`)

            if (res.ok) {
                var data = await res.json()
                // clientDevices = await data.devices
                // console.log(clientDevices)
                // console.log(loadingDevices, 'should be false')
                if(data.devices.length == 0){
                    setArrayLength(false)
                } else {
                    setArrayLength(true)
                }
                setLoadingDevices(data.devices)
                console.log(data.devices)
            } else {
                console.log(res.statusText)
            }



        }

        setUploading(true)
        fetchDevices()
    }, [])




    return (
        <div>
            {!uploading ? (
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
                        ) : (
                            <div>
                                <p>Devices finished loading</p>

                        


                                <p>Write A Review For Me!</p>

                                {loadingDevices.map((device) => {
                                    return (
                                        <div key={device._id}>
                                            <p>{device.device_name}</p>
                                            <p>{device.device_year}</p>
                                        </div>
                                    )
                                })}

                                <form onSubmit={handleReviewSubmit}>
                                    <div className="form-components">
                                        <label>
                                            Your Rating:
                                        </label>

                                        <select
                                            value={rating}
                                            required
                                            onChange={(e) => setRating(e.target.value)}
                                        >
                                            <option value='5'>5</option>
                                            <option value='4'>4</option>
                                            <option value='3'>3</option>
                                            <option value='2'>2</option>
                                            <option value='1'>1</option>
                                        </select>


                                    </div>

                                    <div className="form-components">
                                        <label>
                                            Last Name:
                                        </label>

                                        <textarea type="text" required value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                                        </textarea>
                                    </div>
                                </form>
                            </div>


                        )
                    }


                </div>



            </>}
        </div>
    )


}

export default WriteReview