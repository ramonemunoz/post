import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import Upload from './components/Upload';
import Feed from './components/Feed';
import base from './base.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.updateActionButton = this.updateActionButton.bind(this);
		this.updateFeed = this.updateFeed.bind(this);
		//get initial state
		this.state = {
			actionButton: {
				status: 'notClicked'
			},
			feed: {}
		};
	}
	componentWillMount() {
		this.ref = base.syncState('/posts', {
			context: this,
			state: 'feed'
		});
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	updateActionButton(actionButtonState) {
		const actionButton = { ...this.state.actionButton };
		const css = actionButton.status === 'notClicked' ? 'clicked' : 'notClicked';
		actionButton['status'] = css;
		this.setState({ actionButton });
	}

	updateFeed(post) {
		const feed = { ...this.state.feed };
		const timestamp = Date.now();
		feed[`post-${timestamp}`] = post;
		this.setState({ feed });
	}

	render() {
		return (
			<div className="App">
				<Feed feedState={this.state.feed} />
				<ActionButton updateActionButton={this.updateActionButton} buttonState={this.state.actionButton.status} />
				<Upload updateFeed={this.updateFeed} buttonState={this.state.actionButton.status} />
			</div>
		);
	}
}

export default App;
