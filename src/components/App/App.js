import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// import from MovieList
import MovieList from '../MovieList/MovieList';

// import from Details
import Details from '../Details/Details';

// import from AddMovie />
import AddMovie from '../AddMovie/AddMovie';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>The Movies Saga!</h1>
				{/* Home page */}
				<Route path="/" exact>
					<MovieList />
				</Route>
				{/* Details page */}
				<Route path="/details" exact>
					<Details />
				</Route>
				{/* Add Movie page */}
				<Route path="/addMovie" exact>
					<AddMovie />
				</Route>
			</div>
		</Router>
	);
}

export default App;
