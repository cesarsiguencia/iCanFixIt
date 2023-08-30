import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import LoadingComp from './notices/loading'

const Modal = ({ selectedProject }) => {

    const [colorCode, setColorCode] = useState()

    useEffect(() => {
        if (selectedProject) {

            if (selectedProject.device_status === 'Completed') {
                setColorCode('green')
            }

            if (selectedProject.device_status === 'In Progress') {
                setColorCode('orange')
            }

            if (selectedProject.device_status === 'Service Requested') {
                setColorCode('red')
            }
        }
    })

    const closeModal = () => {
        const modalDiv = document.querySelector('.modal-me')
        modalDiv.style.height = '0px'
    }

    return (
        <div className='modal-me'  >
            {!selectedProject ? <>
                <div>
                    <LoadingComp></LoadingComp>
                </div>
            </> : <>
                <Container className='modal-center' >
                    <Row className='modal-block'>
                        <img className='modal-img' src={selectedProject.images[0].image_url} alt={selectedProject.device_name}></img>
                        <div className='modal-titles'>
                            <h4 className='modal-font'>{selectedProject.owner.first_name}'s {selectedProject.device_name}</h4>
                            <p className='modal-font'>{selectedProject.device_year}</p>
                            <strong className='modal-font'>Service Status:  </strong><strong style={{ color: colorCode }}>{selectedProject.device_status}</strong>
                        </div>

                        <div className='container'>
                            <div className='row'>


                                <div className='col-6 col-6 text-align-left'>
                                    <strong>Problem reported by {selectedProject.owner.first_name}:</strong>
                                    <p className='modal-font text-italics'>"{selectedProject.device_description}"</p>
                                </div>

                                {!selectedProject.owner_rating ? (
                                <div className='col-6 text-align-left'>
                                    <strong>No review available</strong>
                                    <p>{selectedProject.owner.first_name} has not reviewed my services yet. The device may still be receiving service.</p>
                                </div>
                                ) : (
                                    <div className='col-6 text-align-left'>
                                    <strong>{selectedProject.owner.first_name} reviewed this service as {selectedProject.owner_rating}</strong>
                                    <p className='text-italics'>"{selectedProject.owner_review}"</p>
                                </div>
                                )
                                }


                            </div>
                        </div>
                        <br />
                        <Button className='small-buttons' type='button' onClick={() => closeModal()}>
                            Close
                        </Button>

                    </Row>

                </Container>
            </>
            }
        </div>
    )
}

export default Modal