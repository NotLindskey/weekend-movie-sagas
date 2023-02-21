import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>The Movies Saga!</h1>
				{/* Home page */}
				<Route exact path="/">
					<MovieList />
				</Route>
				{/* Details page */}
				<Route exact path="/Details">
					<Details />
				</Route>
				{/* Add Movie page */}
				<Route exact path="/AddMovie">
					<AddMovie />
				</Route>
			</div>
		</Router>
	);
}

export default App;
