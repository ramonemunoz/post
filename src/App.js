import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import Upload from './components/Upload';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.updateActionButton = this.updateActionButton.bind(this);
		//get initial state
		this.state = {
			actionButton: {}
		};
	}

	updateActionButton(actionButtonState) {
		const actionButton = { ...this.state.actionButton };
		actionButton['buttonstate'] = actionButtonState;
		this.setState({ actionButton });
	}

	render() {
		return (
			<div className="App">
				<ActionButton updateActionButton={this.updateActionButton} />
				<Upload />
			</div>
		);
	}
}

export default App;
