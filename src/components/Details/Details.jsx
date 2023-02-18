import React from 'react';

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';


function details() {

    const dispatch = useDispatch();

    const movies = useSelector((store) => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [])

    const history = useHistory();

    // get data from id
    // const movieDetails = () => {
    //     const { id } = useParams();
    //     axios.get(`details/${id}`)

    // send back to MovieList;
    const sendToHome = () => {
        console.log('to home page!');
        history.push('/')
    }

    return (
        <section>
            {/* {JSON.stringify(movies)} */}
            {/* {movies.map( movie => {
                return (
                    <div key={movie.id}>
                        <h1>{movie.title}</h1>
                        <img src={movie.poster}></img>
                        <p>{movie.description}</p>
                    </div>
                )
            })} */}

            <h1>?</h1>
        <br />
        {/* button to send back to MovieList/ */}
        <button onClick={sendToHome}>back</button>
        </section>
    )
}

export default details;