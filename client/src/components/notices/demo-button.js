import React, { useState } from "react";

const DemoButton = ({ setNoticeOn, setDemoTrigger }) => {

    

    return (
        <div className="demo-button ">
            <div id="demo-btn-remove">
                <p onClick={() => setNoticeOn(false)} className="h2 text-left p-strong p-color">X</p>
            </div>

            <div className="demo-open" onClick={() => setDemoTrigger(true)}>
                <p id="demo-trigger"><strong>Watch the Demo HERE</strong></p>
            </div>


            
        </div>
    )
}

export default DemoButton