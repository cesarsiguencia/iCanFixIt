import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ValidateClient from "../components/forms/validate-owner"



import ClientForm from '../components/forms/client-form'
import DeviceForm from '../components/forms/device-form'
import ImageForm from '../components/forms/image-form'
import Success from '../components/notices/service-submitted'
import Button from 'react-bootstrap/Button'
import HeroComp from '../components/hero'

const FormEntries = () => {

    const [returning, setReturning] = useState()
    const [newClient, setNewClient] = useState()
    const [selectStarter, setSelectStarter] = useState(true)

    const [clientForm, setClientForm] = useState(true)
    const [deviceForm, setDeviceForm] = useState(true)
    const [imageForm, setImageForm ] = useState(true)

    const [clientId, setClientId] = useState()
    const [clientName, setClientName] = useState()
    const [uploading, setUploading] = useState(false)
    const [deviceName, setDeviceName] = useState()
    const [deviceId, setDeviceId] = useState()

    return (
        <div className="cesar">
            <HeroComp></HeroComp>
            <br/>
            <Container>
                <Row>
           
                {clientForm && deviceForm && imageForm &&
                <div>

                    {selectStarter &&
                        <div>
                            <h3>Request a service for your device here:</h3>
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

                {!clientForm && deviceForm && imageForm &&
                    <DeviceForm
                        uploading={uploading}
                        setUploading={setUploading}
                        setDeviceForm={setDeviceForm}
                        setDeviceName={setDeviceName}
                        setDeviceId={setDeviceId}
                        clientId={clientId}
                    >
                    </DeviceForm>
                }

                {!clientForm && !deviceForm && imageForm &&
                    <ImageForm
                        deviceId={deviceId}
                        deviceName={deviceName}
                        setImageForm={setImageForm}
                        uploading= {uploading}
                        setUploading={setUploading}
                    ></ImageForm>
                }

                {!clientForm && !deviceForm && !imageForm &&
                    <Success
                        clientName={clientName}
                        deviceName={deviceName}
                    ></Success>
                }
                </Row>
            

            </Container>


        </div>
    )
}

export default FormEntries