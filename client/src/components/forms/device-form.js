import React, { useState } from "react"

const DeviceForm = ({uploading, setUploading, setDeviceForm, setDevice, clientId}) =>{

    const [deviceName, setDeviceName] = useState()  
    const [deviceYear, setDeviceYear] = useState()
    const [deviceDesc, setDeviceDesc] = useState()
    // const [devicePhotos, setDevicePhotos] = useState()

    const handleDeviceSubmit = async (e) =>{
        setUploading(true)
        e.preventDefault()

        const device = {
            device_name: deviceName,
            device_year: deviceYear,
            device_description: deviceDesc,
            owner: clientId
        }

        const response = await fetch("/api/devices", {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(device)
        })

        if(response.ok){
            var data = await response.json()
            alert('success')
            setDevice(deviceName)
            setDeviceForm(false)
            

        } else {
            console.log(response.statusText)
        }
        setUploading(false)
    }

    return(
        <div>
            <p>Enter the device info:</p>

            <form onSubmit={handleDeviceSubmit}>
                <div className="form-components">
                    <label>
                        Device Name:
                    </label>

                    <input type="type" required value={deviceName} onChange={(e) => setDeviceName(e.target.value)}>
                    </input>
                </div>

                <div className="form-components"> 
                    <label>
                        Device Year:
                    </label>

                    <input type="type" required value={deviceYear} onChange={(e) => setDeviceYear(e.target.value)}>
                    </input>
                </div>

                <div className="form-components">
                    <label>
                        Description
                    </label>

                    <textarea type="type" required value={deviceDesc} onChange={(e) => setDeviceDesc(e.target.value)}>
                    </textarea>
                </div>


                {/* <div className="form-components">
                    <label>
                        Zipcode:
                    </label>

                    <input type="type" required value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                    </input>
                </div> */}

                {!uploading &&   <button className="form-components" type='submit'>
                    Submit Device Info
                </button>}

                {uploading &&     <button disabled className="form-components">
                    Adding Your Device...
                </button>}

            </form>  
        </div>
    )
}

export default DeviceForm