import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import from MovieList
import MovieList from '../MovieList/MovieList';

// import from Details
import Details from '../Details/Details';

function App() {
	return (
		<Router>
			<div className="App">
				{/* <nav>
					<li>
						<Link to="/details">Details</Link>
					</li>
				</nav> */}

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
			</div>
		</Router>
	);
}

export default App;
