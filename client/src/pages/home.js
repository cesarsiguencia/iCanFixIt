import React, { useState, useEffect } from 'react'
import LoadingComp from '../components/notices/loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import DemoButton from '../components/notices/demo-button'
import DemoAppear from '../components/notices/demo-modal'

const Home = () => {

    const [dbDevices, setDbDevices] = useState()
    const [loading, setLoading] = useState(true)

    const fetchDevice = async () => {
        const res = await fetch('api/devices')

        if (res.ok) {
            const devices = await res.json()
            setDbDevices(devices.slice(0, 4))
        } else {
            console.log(res.statusText)
        }
        setLoading(false)
        return
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetchDevice()
    }, [])

    useEffect(() => {
        if (dbDevices) {
            setInterval(() => {

                if (currentIndex === dbDevices.length - 1) {
                    return setCurrentIndex(0)
                }
                return setCurrentIndex(currentIndex + 1)
            }, 8000)
        }
    })

    const [noticeOn, setNoticeOn] = useState(false)
    const [demoTrigger, setDemoTrigger] = useState(false)
    

    useEffect(()=>{
      setTimeout(()=>{
        setNoticeOn(true)
      }, 5000)
    },[])

    return (
        <div>
            {noticeOn &&
                <DemoButton setNoticeOn={setNoticeOn} setDemoTrigger={setDemoTrigger}></DemoButton>
            }

            {demoTrigger &&
                <DemoAppear setNoticeOn={setNoticeOn} setDemoTrigger={setDemoTrigger}></DemoAppear>
            }

            <div>
                {loading && !dbDevices ? (
                    <LoadingComp></LoadingComp>
                ) : (
                    <div className="carousel-container">

                        {dbDevices.map((device, i) => {
                            return (
                                <div className='carousel--div' key={i} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                    <img src={device.images[0].image_url} alt={device.device_name} className='home-imgs'></img>
                                    <div className='img-desc'>
                                        <Container>
                                            <Row>
                                                <Col className='text-align-left'>
                                                    <strong>{device.device_name}</strong>
                                                    <p>Year: {device.device_year}</p>
                                                    <p>Client Rating: {device.owner_rating}</p>
                                                    <p className='text-italics'>"{device.owner_review}"</p>
                                                    <p> - Says {device.owner.first_name}</p>

                                                    <Link to='/gallery'>
                                                        <Button className='small-buttons' style={{ width: '100%' }}>
                                                            Check out more projects here!
                                                        </Button>
                                                    </Link>
                                                    <br />
                                                    {/* <br/>
                                        <div className='time-bar'>

                                        </div> */}
                                                </Col>

                                            </Row>
                                        </Container>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home