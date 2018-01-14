import React from 'react';
import Header from './Header';

class About extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="textContainer">
						<h2>Title</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum tristique iaculis. Suspendisse
							tempor elementum lacus, eget porta magna laoreet nec. Donec vehicula metus sed congue rutrum. Morbi
							dapibus arcu magna, a dapibus odio elementum aliquet. Cras sit amet est id diam efficitur viverra a sed
							lacus. Quisque eu nulla est. Aenean dignissim sapien risus, in aliquet nisl rutrum id. Cras rhoncus mauris
							vitae nibh laoreet bibendum. Duis ac lorem fringilla, auctor tortor quis, semper felis. Nam molestie arcu
							a nunc blandit sagittis. Praesent in est vitae ex feugiat vestibulum. Cras nec sem sit amet tellus aliquet
							suscipit vel id metus. Maecenas hendrerit enim elit, at sagittis mi accumsan sed. Nulla et malesuada
							lorem. Etiam aliquet mattis massa, non mollis libero congue sagittis. Aenean in ante non velit fringilla
							dignissim.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default About;
