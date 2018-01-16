import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import Upload from './components/Upload';
import Feed from './components/Feed';
import base from './base.js';
import Header from './components/Header';
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
			feed: {},
			feedStateLoading: 'true',
			windowEvents: {
				scroll: 'false'
			}
		};
	}
	componentWillMount() {
		this.ref = base.syncState('/posts', {
			context: this,
			state: 'feed',
			then(data) {
				var feedStateLoading = {feedStateLoading: 'false'}
				this.setState(feedStateLoading)
			},
		});
	}
	componentDidMount() {
		window.addEventListener('scroll', event => {
			var scrollStatus;
			if (window.pageYOffset > 20) {
				scrollStatus = 'true';
			} else {
				scrollStatus = 'false';
			}
			const windowEvents = { ...this.state.windowEvents };
			windowEvents['scroll'] = scrollStatus;
			this.setState({ windowEvents });
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
		const actionButton = { ...this.state.actionButton };
		actionButton['status'] = 'notClicked';
		const timestamp = Date.now();
		feed[`post-${timestamp}`] = post;
		this.setState({ feed });
		this.setState({ actionButton });
	}

	render() {
		return (
			<div className="App">
				<Header windowState={this.state.windowEvents.scroll} />
				<Feed feedState={this.state.feed} feedLoading={this.state.feedStateLoading} />
				<ActionButton updateActionButton={this.updateActionButton} buttonState={this.state.actionButton.status} />
				<Upload updateFeed={this.updateFeed} buttonState={this.state.actionButton.status} />
			</div>
		);
	}
}

export default App;
