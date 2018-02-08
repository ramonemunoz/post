import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import Upload from './components/Upload';
import Feed from './components/Feed';
import base from './base.js';
import Header from './components/Header';
import Model from './components/Model';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.updateActionButton = this.updateActionButton.bind(this);
		this.updateFeed = this.updateFeed.bind(this);
		this.model = this.model.bind(this);
		this.postAction = this.postAction.bind(this);
		this.saveTemp = this.saveTemp.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.headerShrink = this.headerShrink.bind(this);
		//get initial state
		this.state = {
			actionButton: {
				status: 'notClicked'
			},
			feed: {},
			tempFeed: null,
			feedStateLoading: 'true',
			feedPosition: 0,
			modelState: false,
			postAction: '',
			windowEvents: {
				scroll: 'false'
			}
		};
	}
	componentWillMount() {
		this.ref = base
			.fetch('/posts', {
				context: this,
				queries: {
					limitToLast: 8
				}
			})
			.then(data => {
				var feedStateLoading = { feedStateLoading: 'false' };
				this.setState(feedStateLoading);
				var feed = { ...this.state.feed };
				feed = data;
				this.setState({ feed });
				var feedPosition = { ...this.state.feedPosition };
				feedPosition = 8;
				this.setState({ feedPosition });
				console.log(data);
			})
			.catch(error => {
				//handle error
				console.log('error');
			});
	}
	componentDidMount() {
		window.addEventListener('scroll', this.headerShrink);
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('scroll', this.headerShrink);
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

	saveTemp(post) {
		var tempFeed = { ...this.state.tempFeed };
		const actionButton = { ...this.state.actionButton };
		actionButton['status'] = 'notClicked';
		tempFeed = post;
		this.setState({ tempFeed });
		this.setState({ actionButton });
	}

	model(status) {
		var modelState = { ...this.state.modelState };
		modelState = status;
		this.setState({ modelState });
	}

	postAction(action) {
		var postAction = { ...this.state.postAction };
		var tempFeed = { ...this.state.tempFeed };
		const feed = { ...this.state.feed };
		const timestamp = Date.now();
		feed[`post-${timestamp}`] = tempFeed;
		postAction = action;
		this.setState({ postAction });
		this.setState({ feed });
		base
			.post(`/posts/post-${timestamp}`, {
				data: {
					name: tempFeed['name'],
					src: tempFeed['src']
				}
			})
			.then(() => {
				console.log('posted');
			})
			.catch(err => {
				// handle error
				console.log('did not post');
			});
	}

	headerShrink() {
		var scrollStatus;
		if (window.pageYOffset > 20) {
			scrollStatus = 'true';
		} else {
			scrollStatus = 'false';
		}
		const windowEvents = { ...this.state.windowEvents };
		windowEvents['scroll'] = scrollStatus;
		this.setState({ windowEvents });
	}
	handleScroll() {
		const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight) {
			console.log('bottom');
			var currentFeedPosition = this.state.feedPosition;

			this.ref = base
				.fetch('/posts', {
					context: this,
					queries: {
						limitToLast: currentFeedPosition
					}
				})
				.then(data => {
					var feedStateLoading = { feedStateLoading: 'false' };
					this.setState(feedStateLoading);

					var newFeedPostion = this.state.feedPosition + 8;
					this.setState({ feedPosition: newFeedPostion });

					var feed = { ...this.state.feed };
					console.log(data);
					Object.assign(feed, data);
					this.setState({ feed });
					console.log(data);
				})
				.catch(error => {
					//handle error
					console.log('error');
				});
		} else {
			console.log('not at bottom');
		}
	}

	render() {
		return (
			<div className="App">
				<Header windowState={this.state.windowEvents.scroll} />
				<Feed
					feedState={this.state.feed}
					feedLoading={this.state.feedStateLoading}
					feedPosition={this.state.feedPosition}
				/>
				<ActionButton updateActionButton={this.updateActionButton} buttonState={this.state.actionButton.status} />
				<Upload
					updateFeed={this.updateFeed}
					buttonState={this.state.actionButton.status}
					updateModel={this.model}
					postAction={this.state.postAction}
					saveTemp={this.saveTemp}
				/>
				<Model modelState={this.state.modelState} updateModel={this.model} postAction={this.postAction} />
			</div>
		);
	}
}

export default App;
