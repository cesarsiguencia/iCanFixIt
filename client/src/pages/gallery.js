import React, { useEffect, useState } from 'react';

import test_photo from '../../src/device-library/test.png'

import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap'

const Gallery = () => {

    const [loading, setLoading] = useState(true)

    const [allProjects, setAllProjects] = useState()

    const [colorStatus, setColorStatus] = useState()

    const fetchDevices = async () => {
        const res = await fetch('/api/devices')

        if (res.ok) {
            const data = await res.json()

            setAllProjects(data)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchDevices()
    },[])



    return (
        <div className='cesar'>

            {loading ? (
                <>
                    <div><p>Loading...</p></div>
                </>
            ) : (<>

                <Container>
                    <Row>
                        <Col className="mb-5 gallery">

                            {allProjects.map((project, i) => {
                                if(project.device_status== 'Completed'){
                                    var colorCode = 'green'
                                }
                                if(project.device_status== 'In Progress'){
                                    var colorCode = 'orange'
                                }
                                if(project.device_status== 'Service Requested'){
                                    var colorCode = 'yellow'
                                }



                                return(
                                    <Card className='shadow-sm bg-white rounded' style={{width:'300px', height: '525px'}} key={i}>
                                    <Card.Img variant="top" style={{width:'300px', height: '400px'}}src={project.images[0].image_url}></Card.Img>
                                    <Card.Body className="d-flex flex-column">
                                        <div className='d-flex mb-2 justify-content-between'>
                                            <Card.Title className='mb-0 font-weight-bold text-align-left'>{project.device_name}</Card.Title>
                                
                                            <strong
                                               style={{color: colorCode}}
                                                >{project.device_status}</strong>
                                        </div>
                                        <div className='text-align-left'>
                                            <p>Year: {project.device_year}</p>

                                        </div>
                                    </Card.Body>
                                </Card>
                                )
                              
                            })}

                        </Col>
                    </Row>
                </Container>

            </>)
            }



        </div>
    )
}

export default Gallery