import React from 'react';

class ActionButton extends React.Component {
	actionButtonClicked() {
		console.log('Clickeds');
		const actionButtonState = {
			status: 'clicked'
		};
		// const container = document.querySelector(".plusSign");
		// const uploadContainer = document.getElementById("upload");
		// container.classList.toggle("button-active");
		// uploadContainer.classList.toggle("show");
		//https://stackoverflow.com/questions/36403101/toggle-class-in-react/36404061
		// console.log(actionButtonState);
		this.props.updateActionButton(actionButtonState);
	}
	render() {
		return (
			<div className="buttonContainer">
				<button
					ref={button => (this.button = button)}
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
