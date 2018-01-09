import React, { Component } from 'react';
import Header from './components/Header';
import ActionButton from './components/ActionButton';
import Upload from './components/Upload';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ActionButton />
				<Upload />
			</div>
		);
	}
}

export default App;
