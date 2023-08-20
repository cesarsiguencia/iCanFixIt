import { useState } from 'react'
import ReviewForm from '../components/forms/review-form'
import ValidateClient from '../components/forms/validate-owner'

const Review = () => {

    const [clientValidateForm, setClientValidateForm] = useState(true)
    const [clientValidatedDevices, setClientValidatedDevices] = useState()
    const [uploading, setUploading] = useState()
    return (
        <div>
            {
                clientValidateForm &&
                <ValidateClient
                    uploading={uploading}
                    setUploading={setUploading}
                    setClientValidateForm={setClientValidateForm}
                    setClientValidatedDevices={setClientValidatedDevices}
                >
                </ValidateClient>
            }
            {
                !clientValidateForm &&
                <ReviewForm
                    uploading={uploading}
                    setUploading={setUploading}
                    clientValidatedDevices={clientValidatedDevices}
                ></ReviewForm>
            }
        </div>
    )
}

export default Review