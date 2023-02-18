import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useEffect } from 'react';


function details() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [])

    const history = useHistory();

    // send back to MovieList;
    const sendToHome = () => {
        console.log('to home page!');
        history.push('/')
    }

    return (
        <section>

        <br />
        {/* button to send back to MovieList/ */}
        <button onClick={sendToHome}>back</button>
        </section>
    )
}

export default details;