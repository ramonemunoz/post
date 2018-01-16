import React, { Component } from "react";
import ActionButton from "./components/ActionButton";
import Upload from "./components/Upload";
import Feed from "./components/Feed";
import base from "./base.js";
import Header from "./components/Header";
import Model from "./components/Model";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.updateActionButton = this.updateActionButton.bind(this);
    this.updateFeed = this.updateFeed.bind(this);
    this.model = this.model.bind(this);
    this.postAction = this.postAction.bind(this);
    this.saveTemp = this.saveTemp.bind(this);
    //get initial state
    this.state = {
      actionButton: {
        status: "notClicked"
      },
      feed: {},
      tempFeed: null,
      feedStateLoading: "true",
      modelState: false,
      postAction: "",
      windowEvents: {
        scroll: "false"
      }
    };
  }
  componentWillMount() {
    this.ref = base.syncState("/posts", {
      context: this,
      state: "feed",
      then(data) {
        var feedStateLoading = { feedStateLoading: "false" };
        this.setState(feedStateLoading);
      }
    });
  }
  componentDidMount() {
    window.addEventListener("scroll", event => {
      var scrollStatus;
      if (window.pageYOffset > 20) {
        scrollStatus = "true";
      } else {
        scrollStatus = "false";
      }
      const windowEvents = { ...this.state.windowEvents };
      windowEvents["scroll"] = scrollStatus;
      this.setState({ windowEvents });
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateActionButton(actionButtonState) {
    const actionButton = { ...this.state.actionButton };
    const css = actionButton.status === "notClicked" ? "clicked" : "notClicked";
    actionButton["status"] = css;
    this.setState({ actionButton });
  }

  updateFeed(post) {
    const feed = { ...this.state.feed };
    const actionButton = { ...this.state.actionButton };
    actionButton["status"] = "notClicked";
    const timestamp = Date.now();
	feed[`post-${timestamp}`] = post;
    this.setState({ feed });
    this.setState({ actionButton });
  }

  saveTemp(post){
	var tempFeed = { ...this.state.tempFeed };
    const actionButton = { ...this.state.actionButton };
    actionButton["status"] = "notClicked";
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
  }

  render() {
    return (
      <div className="App">
        <Header windowState={this.state.windowEvents.scroll} />
        <Feed
          feedState={this.state.feed}
          feedLoading={this.state.feedStateLoading}
        />
        <ActionButton
          updateActionButton={this.updateActionButton}
          buttonState={this.state.actionButton.status}
        />
        <Upload
          updateFeed={this.updateFeed}
          buttonState={this.state.actionButton.status}
          updateModel={this.model}
		  postAction={this.state.postAction}
		  saveTemp={this.saveTemp}
        />
        <Model
          modelState={this.state.modelState}
          updateModel={this.model}
          postAction={this.postAction}
        />
      </div>
    );
  }
}

export default App;
