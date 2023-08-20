import React, { useState } from "react"
import ValidateClient from "../components/forms/validate-owner"
// import TestingDom from '../components/testing'

import ClientForm from '../components/forms/client-form'
import DeviceForm from '../components/forms/device-form'
import Success from '../components/notices/service-submitted'

const Form = () => {

    const [clientForm, setClientForm] = useState(true)
    const [deviceForm, setDeviceForm] = useState(true)

    const [clientId, setClientId] = useState()
    const [clientName, setClientName] = useState()
    const [uploading, setUploading] = useState(false)
    const [device, setDevice] = useState()

    return (
        <div>
            {clientForm && deviceForm &&
                <div>
                    <p>Have you previously submitted a device before? Search your profile here</p>
                    <ValidateClient
                        uploading={uploading}
                        setUploading={setUploading}
                        setClientId={setClientId}
                        setClientForm={setClientForm}
                        
                    ></ValidateClient>
                    <br />
                    <br />
                    <p>If this is your first time, please fill out your information below</p>

                    <ClientForm
                        uploading={uploading}
                        setUploading={setUploading}
                        setClientForm={setClientForm}
                        setClientId={setClientId}
                        setClientName={setClientName}
                    ></ClientForm>
                </div>
            }

            {!clientForm && deviceForm &&
                <DeviceForm
                    uploading={uploading}
                    setUploading={setUploading}
                    setDeviceForm={setDeviceForm}
                    setDevice={setDevice}
                    clientId={clientId}
                >
                </DeviceForm>
            }

            {!clientForm && !deviceForm &&
                <Success
                    clientName={clientName}
                    device={device}
                ></Success>
            }

        </div>
    )
}

export default Form