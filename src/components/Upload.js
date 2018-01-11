import React from 'react';

class Upload extends React.Component {
	render() {
		const buttonState = this.props.buttonState === 'clicked' ? 'show' : 'hide'
		const uploadContainerClasses = `${buttonState} uploadContainer`
		return (
			<div id="upload" className={uploadContainerClasses}>
				<div className="uploadTab">
					<button className="uploadButton">Upload</button>
				</div>
			</div>
		);
	}
}
export default Upload;
