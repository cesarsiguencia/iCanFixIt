import React from "react";
import Loading from '../../device-library/utils/ZKZg.gif'

const LoadingComp = () =>{
    return(
        <div className="loadingDiv">
            <div className="loadingBlock">
                <img src={Loading} alt='Loading sign'></img>
            </div>
        </div>
    )
}

export default LoadingComp