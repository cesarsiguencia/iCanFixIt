import { useState, useEffect } from "react"

const GrabOwner = ( {uploading, setUploading, setClientValidateForm, setClientValidatedDevices }) =>{

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
            setClientValidatedDevices(clientId)
            setUploading(false)
            setClientValidateForm(false)
            

        } else {
            console.log(res.statusText)
        }


    }

    // useEffect(() => {
    //     fetch("/api/clients")
    //       .then((res) => res.json())
    //       .then((clientInfo) => console.log(clientInfo[0]));
    //   }, []);

    return(
        <div>
            <p>In order to write a review for your device, client information must be listed within my records, has previously used my services, and has a device/devices saved with a 'Completed' service status.</p>

            <p>Please validate the personal information you provided when you submited a new request, down below:</p>

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