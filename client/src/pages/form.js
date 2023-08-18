import React, { useState, useEffect } from "react"

// import TestingDom from '../components/testing'

import ClientForm from '../components/client-form'
import DeviceForm from '../components/device-form'

const Form = (props) => {

    const [clientForm, setClientForm] = useState(true)
    // const [deviceForm, setDeviceForm] = useState(false)

    const [clientId, setClientId] = useState()

    const [uploading, setUploading] = useState(false)

    console.log(clientId, 'clientId when state is changed')
    console.log(clientForm)

    return (
        <div>
            {!clientForm ?
                <DeviceForm
                    uploading={uploading}
                    setUploading={setUploading}

                    clientId={clientId}
                >
                </DeviceForm> :
                <ClientForm
                    uploading={uploading}
                    setUploading={setUploading}
                    setClientForm={setClientForm}
                    setClientId={setClientId}
                ></ClientForm>

            }





        </div>
    )
}

export default Form