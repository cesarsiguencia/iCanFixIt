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
import Credentials from '../device-library/credentials.avif'
import UserIcon from "../device-library/user.avif"

const FormEntries = () => {

    const [returning, setReturning] = useState()
    const [newClient, setNewClient] = useState()
    const [selectStarter, setSelectStarter] = useState(true)

    const [clientForm, setClientForm] = useState(true)
    const [deviceForm, setDeviceForm] = useState(true)
    const [imageForm, setImageForm] = useState(true)

    const [clientId, setClientId] = useState()
    const [clientName, setClientName] = useState()
    const [uploading, setUploading] = useState(false)
    const [deviceName, setDeviceName] = useState()
    const [deviceId, setDeviceId] = useState()

    return (
        <div className="cesar">
            <br />
            <Container>
                <Row>

                    {clientForm && deviceForm && imageForm &&
                        <div>

                            {selectStarter &&
                                <div>
                                    <h3>Request A Service For Your Device Here:</h3>

                                    <div className='credentials-box'>
                                        <img src={UserIcon} className="user-icon"></img>
                                        <p className='nav-links-font'>
                                            Click on "Returning" for these credentials:
                                        </p>
                                        <img className='credentials-img' src={Credentials}>
                                        </img>
                                        <p className='nav-links-font'> - - - - -</p>
                                        <p className='nav-links-font'>Or click on "New" to create a new client</p>

                                    </div>
                                    <br />
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
                                    <br />
                                    <br />

                                </div>
                            }

                            {returning && !newClient &&
                                <div>
                                    <h4>Search Your Profile Here</h4>
                                    <p>Please provide the personal information you provided when you submited your first service request.</p>
                                    <div className='credentials-box'>
                                        <img className='user-icon' src={UserIcon}></img>
                                        <p className='nav-links-font'>
                                            Use the sample credentials below!
                                        </p>
                                        <img className='credentials-img' src={Credentials}>
                                        </img>
                                    </div>
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
                            uploading={uploading}
                            setUploading={setUploading}
                            clientId={clientId}
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

            <HeroComp></HeroComp>
        </div>
    )
}

export default FormEntries