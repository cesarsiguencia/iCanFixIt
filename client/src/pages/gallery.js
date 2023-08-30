import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Modal from '../components/modal'
import LoadingComp from '../components/notices/loading'

const Gallery = () => {

    const [loading, setLoading] = useState(true)

    const [allProjects, setAllProjects] = useState()

    const [selectedProject, setSelectedProject] = useState()

    const fetchDevices = async () => {
        const res = await fetch('/api/devices')

        if (res.ok) {
            const data = await res.json()

            setAllProjects(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDevices()
    }, [])

    const openModal = () => {
        const modalDiv = document.querySelector('.modal-me')
        modalDiv.style.height = '100vh'
    }

    return (
        <div className='cesar'>
            <Modal
                selectedProject={selectedProject}
            >
            </Modal>

            {loading ? (
                <>
                    <LoadingComp></LoadingComp>
                </>
            ) : (<>

                <Container>
                    <br/>
                <h4>Click on the devices I have serviced!</h4>
                <br/>
                    <Row>
                        <Col className="mb-5 gallery">
                            
                            {allProjects.map((project, i) => {
                                let colorCode

                                switch (project.device_status) {
                                    case 'Completed':
                                        colorCode = 'green'
                                        break

                                    case 'In Progress':
                                        colorCode = 'orange'
                                        break

                                    case 'Service Requested':
                                        colorCode = 'red'
                                        break

                                }

                                return (

                                    <Card className='shadow-sm bg-white rounded' style={{ width: '300px', height: '525px' }} key={i}
                                        onClick={() => {
                                            setSelectedProject(allProjects[i])
                                            openModal()
                                        }
                                    }
                                    >
                                        <Card.Img variant="top" style={{ width: '300px', height: '400px' }} src={project.images[0].image_url}></Card.Img>
                                        <Card.Body className="d-flex flex-column">
                                            <div className='d-flex mb-2 justify-content-between'>
                                                <Card.Title className='mb-0 font-weight-bold text-align-left'>{project.device_name}</Card.Title>

                                                <strong
                                                    style={{ color: colorCode }}
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