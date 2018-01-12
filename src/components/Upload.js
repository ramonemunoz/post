import React from 'react';

class Upload extends React.Component {
	fileUploaded(){
		const fileInput = this.fileInput;
		console.log('clicked')
		const curFile = fileInput.files[0];
		const curlFileURL = window.URL.createObjectURL(curFile)
		console.log(curFile);
		const post = {
			name: curFile.name,
			url: curlFileURL
		}
		this.props.updateFeed(post);
	}
	render() {
		const buttonState = this.props.buttonState === 'clicked' ? 'show' : 'hide'
		const uploadContainerClasses = `${buttonState} uploadContainer`
		return (
			<div id="upload" className={uploadContainerClasses}>
				<div className="uploadTab">
					<input onChange={() => this.fileUploaded()} ref={(input) => {this.fileInput = input}} type="file" name="file" id="file" className="inputfile" />
					<label id="uploadFile" htmlFor="file">Upload</label>
				</div>
			</div>
		);
	}
}
export default Upload;
