import React, { useState } from "react"

const GrabOwner = ( {uploading, setUploading, setClientId, setClientForm}) =>{

    const [validateEmail, setValidateEmail] = useState()
    const [validateZipcode, setValidateZipcode] = useState()

    const handleValidateClient = async(e) =>{
        e.preventDefault()
        setUploading(true)

        const res = await fetch("/api/clients/validate", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                validateEmail,
                validateZipcode
            })
        })

        if(res.ok){
            var returnedClient = await res.json()
            var clientId = returnedClient._id
            alert('You have been verified!')
            setClientId(clientId)
            setUploading(false)
            setClientForm(false)
            
        } else {
            console.log(res.statusText)
        }
    }

    return(
        <div>
            <form onSubmit={handleValidateClient}>
                <div className="form-components">
                        <label>
                            Email:
                        </label>

                        <input type="type" required value={validateEmail} onChange={(e) => setValidateEmail(e.target.value)}>
                        </input>
                </div>

                <div className="form-components">
                    <label>
                        Zipcode:
                    </label>

                    <input type="type" required value={validateZipcode} onChange={(e) => setValidateZipcode(e.target.value)}>
                    </input>
                </div>

                {!uploading && <button className="form-components" type='submit'>
                    Validate Your Info
                </button>}

                {uploading &&  <button disabled className="form-components">
                    Searching Records...
                </button>}


            </form>
        </div>
    )
}

export default GrabOwner