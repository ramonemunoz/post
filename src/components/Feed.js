import React from "react";

class Feed extends React.Component {
  constructor() {
    super();
    this.renderFeed = this.renderFeed.bind(this);
  }
  renderFeed(key) {
    const post = this.props.feedState[key];

    return (
      <div className="post" key={key}>
        <img className="image" src={post["src"]} alt={post["name"]} />
      </div>
    );
  }
  render() {
    const loading = this.props.feedLoading;
    const feedPosition = this.props.feedPosition;
    let feed = null;
    if (loading === "true") {
      feed = (
        <div className="spinnerContainer">
            <svg
              className="spinner"
              width="65px"
              height="65px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="path"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              />
            </svg>
        </div>
      );
    } else {
        if(feedPosition >= 3 ){
          feed = Object.keys(this.props.feedState)
          .map(this.renderFeed); 
        }
        else{
          feed = Object.keys(this.props.feedState)
            .map(this.renderFeed);
        }
    }
    return <div className="container">{feed}</div>;
  }
}
export default Feed;
