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
                            <p style={{fontWeight: 'bold'}} >Watch the 2 minute demo before previewing app!</p>
                            <iframe src="https://drive.google.com/file/d/1_0FVgUyds6AZcGe751tFelJHap19wQQb/preview" width="1200" height="720" allow="autoplay"></iframe>

                            <br />
                            <br />
                            <div className='text-align-left'>
                            <h5 style={{fontWeight: 'bold'}}>Keep In Mind:</h5>


                                {/* <p style={{ color: 'yellow' }}>2: Create a NEW CLIENT under the tab "REQUEST SERVICE"</p>
                            <p className='text-italics'>NOTE: The developer may and has every right to delete any new users or devices added to this site by visitors at random.</p> */}

                                <p><span> - Click on the page title 'iCanFixIt' to return to this demo at anytime.</span></p>
                                <p> - The developer may and has every right to delete any new data added to this site by visitors at random.</p>

                                <div>
                                <div style={{ display: 'flex' }}>
                                        <img className='user-icon' src={UserIcon}>
                                        </img>
                                    </div>
                                    <p><span style={{ fontWeight: "bold" }}> - BE ON THE LOOK OUT FOR THIS ICON, which will give you SAMPLE CREDENTIALS where needed if you do not wish to create an entire new client profile.</span></p>


                                </div>

                                <br />


                             

                            </div>





                            <Button onClick={() => setNoticeOn(false)}>

                                I have watched the demo and understand how to use the full app


                            </Button>
                        </div>


                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default trialNotice