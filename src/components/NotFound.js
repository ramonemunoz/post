import React from "react";
import Header from "./Header";

class NotFound extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="textContainer">
            <h2>404</h2>
            <p>Lost?</p>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFound;
