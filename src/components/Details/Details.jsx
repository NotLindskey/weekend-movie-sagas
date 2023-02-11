import React from 'react';

import { useHistory } from "react-router-dom";

function details() {

    const history = useHistory();

    const sendToHome = () => {
        console.log('to home page!');
        history.push('/')
    }

    return (
        <>
        <div>details</div>
        <p>poster clicked - [x]</p>
        <br />
        <button onClick={sendToHome}>back</button>
        </>
    )
}


export default details;