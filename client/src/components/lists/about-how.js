import React from "react";

const ListItem = ({step, i}) =>{

    return(
        <div className='about-how-block'>
        <img className='about' src={step.image}>
        </img>

        <div className="about-how-text text-align-left">
            <div>
                <div className="fw-bold text-align-left">{i+1}: {step.title}</div>
                <p>{step.context}</p>
                <strong className='text-italics'>* {step.bolded} *</strong>
            </div>

        </div>
    </div>
    )
}

export default ListItem