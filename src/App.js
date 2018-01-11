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
			actionButton: {
				status: 'notClicked'
			}
		};
	}

	updateActionButton(actionButtonState) {
		const actionButton = { ...this.state.actionButton };
		console.log('current state');
		console.log(actionButton);
		console.log('state being passed');
		console.log(actionButtonState);
		const css = actionButton.status === 'notClicked' ? 'clicked' : 'notClicked';
		// console.log(css);
		actionButton['status'] = css;
		// console.log(actionButton);
		this.setState({ actionButton });
	}

	render() {
		return (
			<div className="App">
				<ActionButton updateActionButton={this.updateActionButton} buttonState={this.state.actionButton.status}/>
				<Upload buttonState={this.state.actionButton.status}/>
			</div>
		);
	}
}

export default App;
