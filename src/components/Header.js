import React from "react";
import logo from "../images/logo.svg";
import boost from "../images/illustration-working.svg";

const Header = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<div className='logo'>
					<ul>
						<li>
							<img src={logo} alt='' />
						</li>
						<li>
							<a href='/features'>Features</a>
						</li>
						<li>
							<a href='/fpricing'>Pricing</a>
						</li>
						<li>
							<a href='/resources'>Resources</a>
						</li>
					</ul>
				</div>
				<div className='login'>
					<button className='btn btn-login'>Login</button>
					<button className='btn btn-signup'>Sign Up</button>
				</div>
			</nav>
			<div className='header-container'>
				<div className='header-container-text'>
					<div className='content'>
						<h1>More than just shorter links</h1>
						<p>
							Build your brands recognition and get detailed insights on how
							your links are performing
						</p>
						<button className='btn btn-started'>Get Started</button>
					</div>
				</div>
				<div className='header-container-image'>
					<img src={boost} alt='' />
				</div>
			</div>
		</header>
	);
};

export default Header;
