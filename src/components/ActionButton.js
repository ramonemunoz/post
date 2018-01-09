import React from "react";

class ActionButton extends React.Component {
  actionButtonClicked() {
    console.log("Clicked Ramon");
    const container = document.querySelector(".plusSign");
    const uploadContainer = document.getElementById("upload");
    container.classList.toggle("button-active");
    uploadContainer.classList.toggle("show");
  }
  render() {
    return (
      <div className="buttonContainer">
        <button
          onClick={() => this.actionButtonClicked()}
          className="actionButton"
        >
          <div className="plusSign">+</div>
        </button>
      </div>
    );
  }
}
export default ActionButton;
