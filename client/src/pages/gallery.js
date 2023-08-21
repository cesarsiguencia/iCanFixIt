import React from 'react';

import test_photo from '../../src/device-library/test.png'

import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'
const Gallery = () => {

    return (
        <div>
            <p>Gallery</p>

            <Container>
                <Row>
                    <Col xs={3} className="mb-5">
                        <Card className='h-100 shadow-sm bg-white rounded'>
                            <Card.Img variant="top" src={test_photo}></Card.Img>
                            <Card.Body className="d-flex flex-column">
                                <div className='d-flex mb-2 justify-content-between'>
                                    <Card.Title className='mb-0 font-weight-bold'>Test</Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Gallery