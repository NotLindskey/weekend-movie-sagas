import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
	yield takeEvery('FETCH_MOVIES', fetchAllMovies);
	yield takeEvery('FETCH_THIS_MOVIE', fetchMovieID);
}

function* fetchAllMovies(action) {
	console.log(action);
	// get all movies from the DB
	try {
		const movies = yield axios.get(`/api/movie`);
		console.log('get all:', movies.data);
		yield put({ type: 'SET_MOVIES', payload: movies.data });
	} catch {
		console.log('get all error');
	}
}

function* fetchMovieID(action) {
	console.log(action);
	try {
		const thisMovie = yield axios.get(`/api/movie/${action.payload}`);
		console.log('get this movie', movies.data);
		yield put({ type: 'SET_THIS_MOVIE', payload: thisMovie.data });
	} catch {
		console.log('this movie id error');
	}
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//
const thisMovie = (state = [], action) => {
	switch (action.type) {
		case 'SET_THIS_MOVIE':
			return action.payload;
		default:
			return state;
	}
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
	switch (action.type) {
		case 'SET_MOVIES':
			return action.payload;
		default:
			return state;
	}
};

// Used to store the movie genres
const genres = (state = [], action) => {
	switch (action.type) {
		case 'SET_GENRES':
			return action.payload;
		default:
			return state;
	}
};

// used to store selected movie
const movieDetails = (state = {}, action) => {
	switch (action.type) {
		case 'SET_DETAILS':
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		thisMovie,
		movies,
		genres,
		movieDetails,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
