import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function AddMovie() {

    const dispatch = useDispatch();

    // A // add title
    const [title, setTitle] = useState('');
    // event
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    // B // add poster
    const [poster, setPoster] = useState('');
    // event
    const handlePosterChange = (event) => {
        setPoster(event.target.value);
    }

    // C // add genre
    const [genre, setGenre] = useState('');
     // event
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }

    // D // add description
    const [description, setDescription] = useState('');
    // event
    const handleDescriptonChange = (event) => {
        setDescription(event.target.value);
    }

    // on submit > event
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('title:', title);
        console.log('poster:', poster);
        console.log('genre:', genre);
        console.log('description:', description);
        dispatch({
            type: 'ADD_MOVIE',
            payload: 
                setTitle,
                setPoster,
                setGenre,
                setDescription
        });
        setTitle('');
        setPoster('');
        setGenre('');
        setDescription('');
    }    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Add Movie:</p>
        
                {/* /title */}
                <input 
                    value={title} onChange={handleTitleChange} type="text" id="title" name="title" placeholder='title Here'>
                </input>

                {/* /image */}
                <input 
                    value={poster} onChange={handlePosterChange} type="text" id="poster" name="poster" placeholder='poster Here'>
                </input>

                {/* /genre */}
                <input 
                    value={genre} onChange={handleGenreChange} type="text" id="genre" name="genre" placeholder='genre Here'>
                </input>

                {/* /descripton */}
                <input 
                    value={description} onChange={handleDescriptonChange} type="text" id="descripton" name="descripton" placeholder='descripton Here'>
                </input>

                {/* submit */}
                <button type="submit">Enter your movie!</button>
            </form>
        </div>
    )
}

export default AddMovie;