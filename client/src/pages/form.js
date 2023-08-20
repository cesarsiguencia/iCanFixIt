import React, { useState } from "react"
import ValidateClient from "../components/forms/validate-owner"
// import TestingDom from '../components/testing'

import ClientForm from '../components/forms/client-form'
import DeviceForm from '../components/forms/device-form'
import Success from '../components/notices/service-submitted'

const Form = () => {

    const [returning, setReturning] = useState()
    const [newClient, setNewClient] = useState()
    const [selectStarter, setSelectStarter] = useState(true)

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

                    {selectStarter &&
                        <div>
                            <p>Are you a new or returning client?</p>

                            <button onClick={() => {
                                setReturning(false)
                                setNewClient(true)
                                setSelectStarter(false)
                            }
                            }

                            >
                                <p>New</p>
                            </button>
                            <br />
                            <br />
                            <button onClick={() => {
                                setReturning(true)
                                setNewClient(false)
                                setSelectStarter(false)
                            }}>
                                <p>Returning</p>
                            </button>
                        </div>
                    }

                    <br />

                    {returning && !newClient &&
                        <div>
                            <p>Search your profile here</p>
                            <ValidateClient
                                uploading={uploading}
                                setUploading={setUploading}
                                setClientId={setClientId}
                                setClientForm={setClientForm}

                            ></ValidateClient>
                            <br />
                        </div>

                    }

                    {!returning && newClient &&
                        <div>
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