import React from 'react';
import PopPop from 'react-poppop';

class Model extends React.Component {
	toggleShow(show) {
		this.props.updateModel(show);
	}
	postClicked(action) {
		this.props.postAction(action);
		this.props.updateModel(false);
	}
	render() {
		const show = this.props.modelState;
		return (
			<div>
				<PopPop
					position="centerCenter"
					open={show}
					closeBtn={true}
					closeOnEsc={true}
					onClose={() => this.toggleShow(false)}
					closeOnOverlay={true}
					contentStyle={{ width: '35%' }}
				>
					<h1>Are you Sure?</h1>
					<p>Once posted, you cant delete the image!</p>
					<p>
						<button className="uploadButton2" onClick={() => this.postClicked('yes')}>
							Yes, I want to post
						</button>
					</p>
				</PopPop>
			</div>
		);
	}
}
export default Model;
