import React, { useState } from 'react'
import { Container }from 'react-bootstrap'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
const Home = () => {

    const [ image, setImage ] = useState()
    const [loading, setLoading] =useState()

    const uploadImage = async (e) =>{
        // const files =e.target.files 
        const data= new FormData()
    
        data.append('file', image)
        data.append('upload_preset', 'icanfixit')
        console.log(data)
        setLoading(true)
         
        const res = await fetch('https://api.cloudinary.com/v1_1/dhrztukgj/image/upload', {
            method: 'post',
            body: data
        })

        if(res.ok){
            const url = await res.json()
            alert('success!')
            setImage(url.secure_url)
        } else {
            alert(res.statusText)
            console.log(res.statusText)
        }

        
        setLoading(false)
    }
    return(
        <div>
            <p>This is home</p>

            <Container>
                <p>dasdsadsadsa</p>
            </Container>

            <Form>
            <Form.Group className="form-components">
                    <Form.Label>
                        Add Photos (5 Max)
                    </Form.Label>

                    <Form.Control type='file' id='photo' name='image' onChange={(e) => setImage(e.target.files[0])}>
                    </Form.Control>
                    <br />

                
                    
                    <Button className='small-buttons' type='submit' onClick={uploadImage}>
                    Upload Photos (No more than 5) 
                    </Button>
                </Form.Group>
            </Form>

            <div>
                {loading ? (
                    <p>loadingggg</p>
                ) : (
                    <img src={image}></img>
                )}
            </div>
        </div>
    )
}

export default Home