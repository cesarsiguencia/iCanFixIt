import React, { useState } from "react"
import ValidateClient from "../components/forms/validate-owner"
// import TestingDom from '../components/testing'

import ClientForm from '../components/forms/client-form'
import DeviceForm from '../components/forms/device-form'
import Success from '../components/notices/service-submitted'
import Button from 'react-bootstrap/button'


const FormEntries = () => {

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
                            <h4>Request a service for your device here:</h4>
                            <p>Are you a new or returning client?</p>

                            <Button onClick={() => {
                                setReturning(false)
                                setNewClient(true)
                                setSelectStarter(false)
                            }
                            }

                            >
                                New
                            </Button>
                            <br />
                            <br />
                            <Button onClick={() => {
                                setReturning(true)
                                setNewClient(false)
                                setSelectStarter(false)
                            }}>
                                Returning
                            </Button>
                        </div>
                    }

                    {returning && !newClient &&
                        <div>
                            <h4>Search your profile here</h4>
                            <ValidateClient
                                uploading={uploading}
                                setUploading={setUploading}
                                setClientId={setClientId}
                                setClientForm={setClientForm}
                                setClientName={setClientName}
                            ></ValidateClient>
                            <br />
                        </div>

                    }

                    {!returning && newClient &&
                        <div>
                            <h4>If this is your first time, please fill out your information below:</h4>

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

export default FormEntries