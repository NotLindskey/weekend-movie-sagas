import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // add movie clicked - send to addMovie
    const handleToMovie = () => {
        console.log('proceed to add movie?')
        history.push('/addMovie')
    }

    // poster clicked - send to movie details 
    const handleClick = (movie) => {
        alert(`you clicked ${movie.title}!`);
        history.push('/details');
        
    }

    return (
        <main>
            <button onClick={() => handleToMovie()}>Add movie</button>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie)}/>
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