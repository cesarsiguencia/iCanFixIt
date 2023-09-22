import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserIcon from '../../device-library/user.avif'

const trialNotice = ({ setNoticeOn }) => {
    return (
        <div className='trial-modal modal-block'>
            <Container >
                <Row >
                    <Col className='trial-content'>

                        <div>
                            <h3>
                                Welcome to iCanFixIt!
                            </h3>
                            <br />
                            <p> Before you tour the app, <span className="text-italics" style={{ fontWeight: "bold" }}>credentials are needed for FULL experience of the app.</span> </p>
                            <p>Please do one of the following:</p>
                            <div className='text-align-left' style={{fontWeight: 'bold'}}>
                            <p style={{  color: 'yellow' }}>1: Use the SAMPLE CREDENTIALS  provided when needed</p>
                            <p style={{ color: 'yellow' }}>2: Create a NEW CLIENT under the tab "REQUEST SERVICE"</p>
                            <p className='text-italics'>NOTE: The developer may and has every right to delete any new users or devices added to this site by visitors at random.</p>
                            <p className='text-italics'>NOTE: One feature asks to upload a sample photo of a 'damaged device', be prepared to do so!</p>


                           
                            </div>

                       
                           
                           <p>The icon below will guide you when credentials will be provided.</p>

                            <div style={{ display: 'flex' }}>
                                <img className='user-icon' src={UserIcon}>
                                </img>
                            </div>



                            <Button onClick={() => setNoticeOn(false)}>

                                I have read and understood how to use the full app


                            </Button>
                        </div>


                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default trialNotice