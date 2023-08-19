const ServiceSubmit = ({clientName, device}) =>{



    const reloadFunc = () =>{
        document.location.replace('/icanfixit')
    } 

    return(
        <div>
            Thank you for contacting me, {clientName}! Your service request for the device {device} was submitted successfully! Please wait for an email from me within the next 48 hours.

            <button type='button'className='form-components' onClick={()=> reloadFunc }>
                Go back to homepage

            </button>
        </div>
    )
}

export default ServiceSubmit