import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const history = useHistory();


    // click to details 
    const handleClick = (movie) => {
        alert(`you clicked ${movie.title}!`);
        history.push('/details');
        
    }

    // // click to addMovie
    // const addButton = () => {
    //     if (confirm('proceed to add your favorite movie?') == true) {
    //         history.push('/addMovie');
    //     }
    // }

    return (
        <main>
            <AddMovie />

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