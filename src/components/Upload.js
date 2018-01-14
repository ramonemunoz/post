import React from 'react';
import ReactFileReader from 'react-file-reader';

class Upload extends React.Component {
	handleFiles = files => {
		const curfile = files.fileList[0];
		console.log(curfile.name);
		const post = {
			name: curfile.name,
			src: files.base64
		};
		this.props.updateFeed(post);
	};

	render() {
		const buttonState = this.props.buttonState === 'clicked' ? 'show' : 'hide';
		const uploadContainerClasses = `${buttonState} uploadContainer`;
		return (
			<div id="upload" className={uploadContainerClasses}>
				<div className="uploadTab">
					<ReactFileReader
						fileTypes={['.png', '.jpg']}
						base64={true}
						multipleFiles={false}
						handleFiles={this.handleFiles}
					>
						<button className="uploadButton">Upload</button>
					</ReactFileReader>
				</div>
			</div>
		);
	}
}
export default Upload;
