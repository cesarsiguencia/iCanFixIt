import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import HeroComp from '../components/hero'
import ListItem from '../components/lists/about-how'
import FillOut from '../device-library/utils/complete-form.gif'
import Email from '../device-library/utils/email-received.gif'
import Shipping from '../device-library/utils/shipping.gif'
import Success from '../device-library/utils/success.gif'
import Portrait from '../device-library/portrait.png'
import Mobile from '../device-library/utils/mobile.gif'

import iphone from '../device-library/accepted-devices/iphone.png'
import ipad from '../device-library/accepted-devices/ipad.png'
import ipod from '../device-library/accepted-devices/ipod.png'
import laptop from '../device-library/accepted-devices/laptop.png'
import thunderbolt from '../device-library/accepted-devices/thunderbolt.png'
import extras from '../device-library/accepted-devices/extras.png'

const About = ({ setRedirectClicked }) => {
    const steps = [
        {
            image: FillOut,
            title: 'Fill Out A Submit Order Form',
            context: 'Please provide your contact information, email, address, along with an in depth description of the problem with your device. I need to know the generation number of the device as well as manufacturing year.',
            bolded: 'Please provide ONE IMAGE showing proof of damage.'
        },
        {
            image: Email,
            title: 'Message From Me Within 48 Hours',
            context: 'Wait a response from me via email within 2 days that will inform you if I am able to service your device and how much $$$ service would be.',
            bolded: 'Prices are competitive and vary per device and service. PAYMENT MUST BE RECEIVED BEFORE I RECEIVE YOUR DEVICE.'
        },
        {
            image: Shipping,
            title: 'Mail Device',
            context: 'Use a standard shipment carrier to send your device to me. Include all available accessories that come with the device, such as wall chargers, earphones, etc.',
            bolded: 'Send me carrier information as soon as you receive it!'
        },
        {
            image: Success,
            title: 'Device Serviced and Returned',
            context: 'Please give me 3 days to service your device. After that time, I will mail your device with the packing slip that you will provide to me.',
            bolded: 'Please feel kind to revisit this page and leave me a review once your device is returned. It helps a lot!'
        }
    ]

    const devices = [
        {
            name: 'iPhone',
            info: ' - All models',
            image: iphone
        },
        {
            name: 'iPod Classic',
            info: ' - Select models',
            image: ipod
        },
        {
            name: 'iPad',
            info: ' - Select models',
            image: ipad
        },
        {
            name: 'Macbook Air/Pro',
            info: '- ONLY battery / RAM / SSD upgrades',
            image: laptop
        },
        {
            name: 'Apple Thunderbolt/Cinema Display',
            info: '- ONLY glass, lcd, and power supply',
            image: thunderbolt
        },
        {
            name: 'and MUCH MORE!',
            info: '- including gaming consoles, keyboards, mice, etc',
            image: extras
        },

    ]
    return (
        <div className='cesar'>
            <HeroComp></HeroComp>
            <br />


            <Container>
                <h3>Learn About It!</h3>
                <Row className='body-about-row'>
                    <Col className='body-about-text'>

                        <img className='test-photo' src={Portrait} alt="Portrait of Cesar">

                        </img>

                    </Col>

                    <Col className='body-about-text'>
                        <Card className='body-about-toast gray-color'>
                            <Card.Header className='about-titles w-100 text-align-left'>
                                <strong className="mr-auto">About What I Do </strong>
                            </Card.Header>

                            <Card.Body>
                                <p className='text-align-left'>I began breaking down portable devices from a very young age, having always been fascinated with how everyday objects work, especially electronics. Many years ago, there was a period when I owned several iPhones at a time when iPhones were infamously known for their terrible battery life.
                                </p>
                            </Card.Body>

                            <Card.Body>

                                <p className='text-align-left'>After being frustrated with the continous problem and expensive servincing, I decided to teach myself on how to swap batteries on my phone. Not long after, I began altering my other devices, such as changing broken screens, upgrading SSDs and RAM on old computers, and much more!
                                </p>
                            </Card.Body>
                            <Link onClick={() => setRedirectClicked(true)} to='/review'>
                                <Button className="form-components">
                                    <p>Write a review for me today!</p>
                                </Button>
                            </Link>



                        </Card>




                    </Col>
                </Row>

                <Row className='body-about-row'>
                    <Col>
                        <Card className='body-about-toast gray-color'>
                            <Card.Header className='about-titles text-align-left'>
                                <strong className="mr-auto">Available Services </strong>
                            </Card.Header>

                            <Card.Body>
                                <p className='text-align-left'> I primarily replace batteries and screens on mobile devices. I am also able to provide software support for computers. I have experience servicing the following devices:</p>
                            </Card.Body>
                            <div className='accepted-devices-flex'>
                                {
                                    devices.map((acceptedDevice) => {
                                        return(
                                            <div >
                                            <p className='sub-titles'> <strong>{acceptedDevice.name}</strong> {acceptedDevice.info}</p>
                                            <div className='accepted-devices-image-holder'>
                                                <img src={acceptedDevice.image} alt="Screenshot of a electronic device displayed"></img>
                                            </div>

                                        </div>
                                        )
                                    })
                                }
                            </div>
                            <Link onClick={() => setRedirectClicked(true)} to='/gallery'>
                                <Button className="form-components">
                                    <p>Go to Gallery</p>
                                </Button>
                            </Link>


                        </Card>
                    </Col>

                    {/* <Col className='body-about-text'>

                        <img className='test-photo' src={Mobile} alt='Smartphone'>

                        </img>

                    </Col> */}

                </Row>

                <Row className='body-about-row'>
                    <Col>
                        <Card className='body-about-toast gray-color'>
                            <Card.Header className='about-titles'>
                                <strong className="mr-auto">How It Works</strong>
                            </Card.Header>

                            <Card.Body >
                                <p>Interested? The process is easy!</p>
                            </Card.Body>

                            <div as="ol">
                                {steps.map((step, i) => {

                                    return (
                                        <ListItem step={step} key={i} i={i}>
                                        </ListItem>
                                    )
                                })
                                }
                            </div>
                            <Link onClick={() => setRedirectClicked(true)} to="/form">
                                <Button className="form-components">
                                    <p>Request a Service Today
                                    </p></Button>
                            </Link>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <div>



            </div>


        </div>
    )
}

export default About