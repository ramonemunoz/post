import React from 'react';
import Header from './Header';

class About extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="textContainer">
						<h2>Welcome</h2>
						<p>This website was made as a response to the non-chronological feeds we all experience every day.</p>
						<p>
							Please feel free to post some of your creative work that didn't make it to your social media. Their's no
							accounts, likes, applauses...etc.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default About;
