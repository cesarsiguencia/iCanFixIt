import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserIcon from '../../device-library/user.avif'

const DemoAppear = ({ setNoticeOn, setDemoTrigger }) => {
    return (
        <div className='trial-modal modal-block body-about-text'>
            <Container >
                <Row className='modal-flex'>
                    <Col className='modal-block'> 
                        <h3>
                            Demo: How to Use "iCanFixIt" app
                        </h3>

                        <div >
                            <br />
                            <p style={{ fontWeight: 'bold' }} >Watch the 2 minute demo before previewing app!</p>
                            <div className="videoWrapper">
                                <iframe width="560" height="349" src="https://drive.google.com/file/d/1_0FVgUyds6AZcGe751tFelJHap19wQQb/preview" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </Col>

                    <Col className='modal-block'>
                        <div className='text-align-left'>
                            <h5 style={{ fontWeight: 'bold' }}>Keep In Mind:</h5>

                            {/* <p style={{ color: 'yellow' }}>2: Create a NEW CLIENT under the tab "REQUEST SERVICE"</p>
    <p className='text-italics'>NOTE: The developer may and has every right to delete any new users or devices added to this site by visitors at random.</p> */}

                            <p><span> - Visit or reload this <strong style={{ color: 'yellow' }}>homepage </strong>to return to demo at anytime.</span></p>
                            <p> - The developer may and has every right to update data/app layout.
                            </p>

                            <div>
                                <div style={{ display: 'flex' }}>
                                    <img className='user-icon' src={UserIcon}>
                                    </img>
                                </div>
                                <p><span> - <strong style={{ color: 'yellow' }}>BE ON THE LOOK OUT FOR THIS ICON, which will give you SAMPLE
                                    CREDENTIALS</strong> where needed if you do not wish to create an entire new client
                                    profile.</span>
                                </p>
                            </div>

                            <br />

                        </div>

                        <Button onClick={() => {
                            setNoticeOn(false)
                            setDemoTrigger(false)
                        }}>
                            I have watched the demo and understand how to use the full app
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DemoAppear