import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ListItem from '../components/lists/about-how'
import FillOut from '../device-library/utils/complete-form.gif'
import Email from '../device-library/utils/email-received.gif'
import Shipping from '../device-library/utils/shipping.gif'
import Success from '../device-library/utils/success.gif'
import Portrait from '../device-library/portrait.png'
import Mobile from '../device-library/utils/mobile.gif'

const About = () => {
    // const [steps, useSteps ] = useState()
    const steps = [
        {
            image: FillOut,
            title: 'Fill Out A Submit Order Form',
            context: 'Please provide your contact information along with an in depth description of the problem with your device. Please provide pictures.'
        },
        {
            image: Email,
            title: 'Message From Me Within 48 Hours',
            context: 'Wait a response from me via email within 2 days that will inform you if I am able to service your device and how much the service would be.'
        },
        {
            image: Shipping,
            title: 'Mail Device',
            context: 'Use a standard shipment carrier to send your device to me. Include all available accessories that come with the device, such as wall chargers, earphones, etc.'
        },
        {
            image: Success,
            title: 'Device Serviced and Returned',
            context: 'Please give me 3 days to service your device. After that time, I will mail your device with the packing slip that you will provide to me.'
        }
    ]
    return (
        <div className='cesar'>
            <h3>Learn About It!</h3>

            <Container>
                <Row className='body-about-row'>
                    <Col xs={5} className='body-about-text'>

                        <img className='test-photo' src={Portrait}>

                        </img>

                    </Col>

                    <Col className='body-about-text'>
                        <Card className='body-about-toast'>
                            <Card.Header className='w-100 gray-color'>
                                <strong className="mr-auto">About What I Do </strong>
                                {/* <small>just now</small> */}
                            </Card.Header>

                            <Card.Body>
                                I began breaking down portable devices from a very young age, having always been fascinated with how everyday objects work, especially electronics. Many years ago, there was a period when I owned several iPhones at a time when iPhones were infamously known for their terrible battery life.
                            </Card.Body>

                            <Card.Body>

                                After being frustrated with the continous problem and expensive servincing, I decided to teach myself on how to swap batteries on my phone. Not long after, I began altering my other devices, such as changing broken screens, upgrading SSDs and RAM on old computers, and much more!
                            </Card.Body>
                            <Link to='/icanfixit/review'>
                                <Button className="form-components">
                                    Write a review for me today!
                                </Button>
                            </Link>



                        </Card>




                    </Col>
                </Row>

                <Row className='body-about-row'>
                    <Col>
                        <Card className='body-about-toast'>
                            <Card.Header className='gray-color'>
                                <strong className="mr-auto">Available Services </strong>
                            </Card.Header>

                            <Card.Body>
                                View the list of all devices I have serviced previously. My services are not limited to this list and vary per device. I primarily replace batteries and screens on mobile devices. I am also able to provide software support for computers.
                            </Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    iPhone - All models</ListGroup.Item>
                                <ListGroup.Item>iPod Classic - Select models</ListGroup.Item>
                                <ListGroup.Item>iPad - Select models</ListGroup.Item>
                                <ListGroup.Item>Macbook Pro - ONLY battery / RAM / SSD upgrades</ListGroup.Item>

                                <ListGroup.Item>Apple Cinema/Thunderbolt Display - 2011 or earlier models</ListGroup.Item>
                            </ListGroup>
                            <Link to='/icanfixit/gallery'>
                                <Button className="form-components">
                                    Go to Gallery
                                </Button>
                            </Link>


                        </Card>
                    </Col>

                    <Col xs={5} className='body-about-text'>

                        <img className='test-photo' src={Mobile}>

                        </img>

                    </Col>

                </Row>

                <Row className='body-about-row'>
                    <Col>
                        <Card className='body-about-toast'>
                            <Card.Header className='gray-color'>
                                <strong className="mr-auto">How It Works</strong>
                            </Card.Header>

                            <Card.Body>
                                Interested? The process is easy!
                            </Card.Body>

                            <ListGroup as="ol">
                                {steps.map((step, i) => {
          
                                    return (
                                        <ListItem step={step} key={i} i={i}>
                                        </ListItem>
                                    )
                                })

                                }

                            </ListGroup>
                            <Link to="/icanfixit/form">
                                <Button className="form-components">Request a Service Today</Button>
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