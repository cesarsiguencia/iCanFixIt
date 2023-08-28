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

    const facts = [
        {
            fact: Screen
        },
        {
            fact: Battery
        },
        {
            fact: iPod
        },
        {
            fact: iPad
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setInterval(() => {
            if (currentIndex === facts.length - 1) {
                return setCurrentIndex(0)
            }
            return setCurrentIndex(currentIndex + 1)
        }, 12000)
    })


    return (
        <div>

            <div className="carousel-container">
                {facts.map((fact, i) => {
                    return (
                        <div className='carousel--div' key={i} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            <img src={fact.fact} className='home-imgs'></img>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Home