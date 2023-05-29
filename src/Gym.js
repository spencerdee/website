import './App.css';
import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';

function Gym() {
    const [apiResponse, setApiResponse] = useState("Loading");
    
    useEffect(() => {
        fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res)).catch(res => console.log(res));
    }, [])

    return (
        <div id="app">
            <div id="Basic Calculator">
                <p id="apiTest">{apiResponse}</p>
            </div>
        </div>
    );
}

export default Gym;
