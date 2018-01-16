import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		console.log('%c How can I help you! ', 'color: #00dbdb');
		const windowScroll = this.props.windowState;
		var border, logoSize, menuSize;
		if (windowScroll === 'true') {
			border = 'border-none';
			logoSize = 'small';
			menuSize = 'smaller';
		} else {
			border = '';
			logoSize = '';
			menuSize = '';
		}
		return (
			<header className="top">
				<nav className="navContainer">
					<ul id="nav" className={`${border} nav`}>
						<li>
							<Link id="logo" className={`${logoSize} logo`} to="/">
								POST
							</Link>
						</li>
						<li>
							<Link id="menuTwo" className={`${menuSize} menuLink`} to="/about">
								About
							</Link>
						</li>
						<li>
							<a href="/contact" id="menuOne" className={`${menuSize} menuLink`}>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
