import React from 'react';

const Header = props => {
	return (
		<header className="top">
			<nav class="navContainer">
				<ul id="nav" class="nav">
					<li>
						<a href="/" id="logo" class="logo">
							POST
						</a>
					</li>
					<li>
						<a href="/about" id="menuTwo" class="menuLink">
							About
						</a>
					</li>
					<li>
						<a href="/contact" id="menuOne" class="menuLink">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
