import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import iPad from '../device-library/stock-images/IMG_2550 Medium.png'
import iPod from '../device-library/stock-images/93164BD7-A3FB-454A-BE72-E60D81951069.png'
import Battery from '../device-library/stock-images/IMG_0131 Medium.png'
import Screen from '../device-library/stock-images/IMG_2637 Medium.png'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
const Home = () => {

    // const [ image, setImage ] = useState()
    // const [loading, setLoading] =useState()

    // const uploadImage = async (e) =>{
    //     // const files =e.target.files 
    //     const data= new FormData()

    //     data.append('file', image)
    //     data.append('upload_preset', 'icanfixit')
    //     console.log(data)
    //     setLoading(true)

    //     const res = await fetch('https://api.cloudinary.com/v1_1/dhrztukgj/image/upload', {
    //         method: 'post',
    //         body: data
    //     })

    //     if(res.ok){
    //         const url = await res.json()
    //         alert('success!')
    //         setImage(url.secure_url)
    //     } else {
    //         alert(res.statusText)
    //         console.log(res.statusText)
    //     }


    //     setLoading(false)
    // }

    const [dbDevices, setDbDevices] = useState()
    const [loading, setLoading] = useState(true)

    const fetchDevice = async() => {
        console.log('fetching....')
        const res =  await fetch('api/devices')

        if(res.ok){
            const devices = await res.json()
            console.log(devices)
            const newArray = devices.slice(0,3)
            setDbDevices(devices)
            console.log(dbDevices)
            // loadCarousel()
        
        } else {
            console.log(res.statusText)
        }
        console.log(dbDevices)
        setLoading(false)
        return
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        fetchDevice()
        // if(dbDevices){
        //     setInterval(() => {
        //         if (currentIndex === dbDevices.length - 1) {
        //             return setCurrentIndex(0)
        //         }
        //         return setCurrentIndex(currentIndex + 1)
        //     }, 12000)
        // }
    },[])

    // if(dbDevices){
    //     useEffect(()=>{
    //         setInterval(() => {
    //             if (currentIndex === dbDevices.length - 1) {
    //                 return setCurrentIndex(0)
    //             }
    //             return setCurrentIndex(currentIndex + 1)
    //         }, 12000)
    //     }, [dbDevices])
    // } 
    
    useEffect(()=>{
        if(dbDevices){
            setInterval(() => {
                console.log(dbDevices)

                console.log(dbDevices[0].images)
      
                if (currentIndex === dbDevices.length - 1) {
                    return setCurrentIndex(0)
                }
                return setCurrentIndex(currentIndex+1)
            }, 8000)
        }
       
    })


    
    

    // const facts = [
    //     {
    //         fact: Screen,
    //         desc: 'hello and I like to write some stuff so that you all know what I am doing'
    //     },
    //     {
    //         fact: Battery,
    //         desc: 'hello and I like to write some stuff so that you all know what I am doing'
    //     },
    //     {
    //         fact: iPod,
    //         desc: 'hello and I like to write some stuff so that you all know what I am doing'
    //     },
    //     {
    //         fact: iPad,
    //         desc: 'hello and I like to write some stuff so that you all know what I am doing'
    //     }
    // ]

    

    // const loadCarousel = useEffect(() => {
    //     fetchDevice()
    //     setInterval(() => {
    //         if (currentIndex === dbDevices.length - 1) {
    //             return setCurrentIndex(0)
    //         }
    //         return setCurrentIndex(currentIndex + 1)
    //     }, 12000)
    // },[])


    return (
        <div>

            {loading && !dbDevices ? (
                <div>
                    <p>Fetching pictures</p>
                </div>
            ) : (
                <div className="carousel-container">

                {/* {dbDevices.map((stuff, i)=>{
                    return(
                        <div key={i}>
                        <p>{stuff.device_name}</p>
                        <p>{stuff.device_year}</p>
                    </div>
                    )
        
                })} */}

                {dbDevices.map((device, i) => {
                    return (
                        <div className='carousel--div' key={i} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            <img src={device.images[0].image_url} className='home-imgs'></img>
                            <div className='img-desc'>
                                <p>{device.device_name}</p>
                                <p>{device.device_year}</p>
                            </div>

                        </div>
                    )
                })}
            </div>

            )}
        
           

        </div>
    )
}

export default Home