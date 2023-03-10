import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import '@fontsource/roboto';

function details() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const movie = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_THIS_MOVIE', payload: 3});
    }, [])

    const sendToAddMovie = () => {
        console.log('to addMovie');
        history.push('/addMovie')
    }

    // send back to MovieList;
    const sendToHome = () => {
        console.log('to home page!');
        history.push('/')
    }

    return (
        <div>
            <section className='movieContainer'>
                <div className="movieDetails"> 
                    {movie.map((movie) => (
                        <div key={movie}>
                            <p>{movie.title}</p>
                            <img src={movie.poster} alt={movie.title}/>
                            <p>{movie.description}</p>
                        </div>
        ))}
            <img src={movie.poster} alt={movie.title}></img> 
            </div>
            </section>

            {/* button to send back to MovieList/ */}
            <div className="backButton">
            <button onClick={sendToHome}>back</button>
            </div>
        </div>
    )
}

export default details;