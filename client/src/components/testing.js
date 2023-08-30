import React from 'react'
import { useState, useEffect } from 'react';

const TestingDom = () =>{

    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("/api/clients")
        .then((res) => res.json())
        .then((clientInfo) => setData(clientInfo[0].first_name));
    }, []);




    return(
        <div>

            <p>Sample test from Cez</p>


            <p>{!data ? "Loading" : data}</p>


        </div>
    )
}

export default TestingDom