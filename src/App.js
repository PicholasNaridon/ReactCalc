import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Calc />
				</header>
			</div>
		);
	}
}

export default App;
