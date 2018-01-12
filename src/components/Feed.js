import React from "react";

class Feed extends React.Component {
    constructor(){
        super();
        this.renderFeed = this.renderFeed.bind(this);
    }
    renderFeed(key){
        const post = this.props.feedState[key];
        return(
            <div className="post" key={key}>
                <img className="image" src={post['url']} alt={post['name']}/>
            </div>
            
        )
    }
  render() {
    return (
      <div className="container">
        {/* <img className="image" src={this.props.url} /> */}
        {Object.keys(this.props.feedState).map(this.renderFeed)}
      </div>
    );
  }
}
export default Feed;
