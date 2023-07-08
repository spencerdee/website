import React, { useEffect, useState } from 'react';

function Gym() {
    const [apiResponse, setApiResponse] = useState("Loading... Might not be working");
    
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
