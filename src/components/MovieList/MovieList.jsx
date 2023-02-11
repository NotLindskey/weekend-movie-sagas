import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const history = useHistory();


    // click to details page
    const routeDetails = (event) => {
        alert('Route to Details');
        history.push('/details');
        
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={routeDetails}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;














// Reminder -
// It's ok, it's only one minute, you'll feel better in 5. 