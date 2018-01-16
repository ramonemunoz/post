import React from "react";

class ActionButton extends React.Component {
  actionButtonClicked() {
    const actionButtonState = {
      status: "clicked"
    };

    //https://stackoverflow.com/questions/36403101/toggle-class-in-react/36404061

    this.props.updateActionButton(actionButtonState);
  }
  render() {
    return (
      <div className="buttonContainer">
        <button
          ref={button => (this.button = button)}
          onClick={() => this.actionButtonClicked()}
          className={`${this.props.buttonState} actionButton`}
        >
          <div className="plusSign">+</div>
        </button>
      </div>
    );
  }
}
export default ActionButton;
