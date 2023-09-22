import React from "react";
import Button from 'react-bootstrap/Button'

const AlertComp = ({ alertMessage }) => {
    const closeAlert = () => {
        if(!alertMessage.reload){
            const alertModal=document.querySelector('#alert')
            alertModal.style.height = '0px'
        } else {
            document.location.reload()
        }   
        
    }
    return (
        <div className="modal-me" id='alert' style={{padding: '0px 20px'}}>
            {alertMessage &&
                <div className="modal-center">
                        <h3>{alertMessage.server_mes}, {alertMessage.personal}</h3>
                        <br/>
                        <Button className='small-buttons' style={{width: '100%', margin: '0 auto'}} onClick={() => { closeAlert() }}>
                            Close message
                        </Button>
                </div>
            }
        </div>
    )
}

export default AlertComp