import React, { useState } from 'react'

const WriteReview = ({clientValidatedDevices}) => {

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

    return (
        <div>
            <p>Write A Review For Me!</p>

            {clientValidatedDevices.forEach((device)=>{
                return(
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

export default WriteReview