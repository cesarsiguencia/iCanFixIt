import React from "react";

const ListItem = ({ step, i }) => {

    return (
        <div className='about-how-block '>
            <img className='about' src={step.image} alt={`${step.image} icon`}>
            </img>

            <div className="about-how-text text-align-left">
                <div>
                    <div className="fw-bold text-align-left">
                        <p>{i + 1}: {step.title}</p>
                    </div>
                    <p>{step.context}</p>
                    <strong className='text-italics'>* {step.bolded} *</strong>
                </div>

            </div>
        </div>
    )
}

export default ListItem