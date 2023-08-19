import React, { useState, useEffect } from "react"

// import TestingDom from '../components/testing'

import ClientForm from '../components/client-form'
import DeviceForm from '../components/device-form'
import Success from '../components/notices/service-submitted'

const Form = (props) => {

    const [clientForm, setClientForm] = useState(true)
    const [deviceForm, setDeviceForm] = useState(true)

    const [clientId, setClientId] = useState()
    const [clientName, setClientName] = useState()
    const [uploading, setUploading] = useState(false)
    const [device, setDevice] = useState()

    console.log(clientId, 'clientId when state is changed')
    console.log(clientForm)

    return (
        <div>
            {clientForm && deviceForm &&
                <ClientForm
                uploading={uploading}
                setUploading={setUploading}
                setClientForm={setClientForm}
                setClientId={setClientId}
                setClientName={setClientName}
            ></ClientForm>
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
                ></Success>}

        </div>
    )
}

export default Form