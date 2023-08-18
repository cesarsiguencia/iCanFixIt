import { useState, useEffect } from "react"

import TestingDom from '../components/testing'

const Form = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [state, setState] = useState()
    const [zipcode, setZipcode] = useState()



    const [uploading, setUploading] = useState(false)

    const handleClientSubmit = async (e) => {
        e.preventDefault()

        const client = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            address_street: address,
            address_state: state,
            address_zipcode: zipcode
        }
        
        setUploading(true)
        const response = await fetch("/api/clients",{
            method: 'post',
            body: JSON.stringify(client),
            headers: {'Content-Type': 'application/json'}
        })
        
        if(response.ok){
            alert('success')
        } else {
            console.log(response.statusText)
        }

        setUploading(false)
    }

    useEffect(() => {
        fetch("/api/clients")
          .then((res) => res.json())
          .then((clientInfo) => console.log(clientInfo[0]));
      }, []);

    return (
        <div>
            <p>First: Enter Your Info</p>

            <form onSubmit={handleClientSubmit}>
                <div className="form-components">
                    <label>
                        First Name:
                    </label>

                    <input type="type" required value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                    </input>
                </div>

                <div className="form-components"> 
                    <label>
                        Last Name:
                    </label>

                    <input type="type" required value={lastName} onChange={(e) => setLastName(e.target.value)}>
                    </input>
                </div>

                <div className="form-components">
                    <label>
                        Email:
                    </label>

                    <input type="type" required value={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>

                <div className="form-components">
                    <label>
                        Street and Building Number:
                    </label>

                    <input type="type" required value={address} onChange={(e) => setAddress(e.target.value)}>
                    </input>

                </div>


                <div className="form-components">
                    <label>
                        State:
                    </label>

                    <input type="type" required value={state} onChange={(e) => setState(e.target.value)}>
                    </input>
                </div>

                <div className="form-components">
                    <label>
                        Zipcode:
                    </label>

                    <input type="type" required value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                    </input>
                </div>

                {!uploading &&   <button className="form-components" type='submit'>
                    Submit Your Info
                </button>}

                {uploading &&     <button disabled className="form-components">
                    Adding client...
                </button>}


            </form>

            <div>
                <TestingDom></TestingDom>
            </div>
        </div>
    )
}

export default Form