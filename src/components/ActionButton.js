import React from "react";

class ActionButton extends React.Component {
  actionButton() {
    console.log("Clicked");
    // const container = document.querySelector(".plusSign");
    // const uploadContainer = document.getElementById("upload");
    // container.classList.toggle("button-active");
    // uploadContainer.classList.toggle("show");
    //Watch Video 13

  }
  render() {
    return (
      <div className="buttonContainer">
        <button
          onClick={this.actionButton}
          className="actionButton"
        >
          <div className="plusSign">+</div>
        </button>
      </div>
    );
  }
}
export default ActionButton;
