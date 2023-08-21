import React from 'react';
import { Container, Row, Col, Card, Toast } from 'react-bootstrap'
import test_photo from '../device-library/test.png'

const About = () => {
    return (
        <div>
            <p>ABOUT</p>

            <Container>


            <Row className='body-about-row'>
                <Col xs={5}>
                    <Card>
                        <Card.Img src={test_photo}>

                        </Card.Img>
                    </Card>
                </Col>

                <Col>
                        <Card>
                        <Toast className='body-about-toast'>
                        <Toast.Header className='w-100'>
                            <strong className="mr-auto">About What I Do </strong>
                            {/* <small>just now</small> */}
                        </Toast.Header>

                        <Toast.Body>
                            I fix alot of devices since I was a boy.

                            <button className="form-components">
                                Write a review for me today!
                            </button>
                        </Toast.Body>


                        <Toast.Body>
                            I fix alot of devices since I was a boy.
                        </Toast.Body>
                    </Toast>
                        </Card>




                </Col>
            </Row>

            <Row className='body-about-row'>
                <Col>

                    <Toast className='body-about-toast'>
                        <Toast.Header>
                            <strong className="mr-auto">Availble Services </strong>
                            {/* <small>just now</small> */}
                        </Toast.Header>

                        <Toast.Body>
                            View all the devices I have services here

                            <button className="form-components">
                                Go to Gallery
                            </button>
                        </Toast.Body>
                    </Toast>




                </Col>

                <Col xs={5}>

                </Col>
            </Row>

            <Row className='body-about-row'>
                <Col xs={5}>


                </Col>

                <Col>

                    <Toast className='body-about-toast'>
                        <Toast.Header>
                            <strong className="mr-auto">How It Works</strong>
                        </Toast.Header>

                        <Toast.Body>
                            <button className="form-components">Request a Service Today</button>
                        </Toast.Body>
                    </Toast>


                </Col>
            </Row>
            </Container>


        </div>
    )
}

export default About