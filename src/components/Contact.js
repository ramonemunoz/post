import React from 'react';
import Header from './Header';

class Contact extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="textContainer">
						<h2>So you want to contact me?</h2>
						<p>Email Me: contact@posssst.com</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
