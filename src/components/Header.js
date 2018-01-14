import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
	return (
		<header className="top">
			<nav className="navContainer">
				<ul id="nav" className="nav">
					<li>
						<Link id="logo" className="logo" to="/">
							POST
						</Link>
					</li>
					<li>
						<Link id="menuTwo" className="menuLink" to="/about">
							About
						</Link>
					</li>
					<li>
						<a href="/contact" id="menuOne" className="menuLink">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
