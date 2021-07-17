import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import pintrest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
	return (
		<footer>
			<div className='footer-items container'>
				<img src={logo} alt='' />
				<div className='links-social'>
					<div className='links'>
						<ul>
							<li>
								<h5>Features</h5>
							</li>
							<li>
								<a href='/'>Link Shortening</a>
							</li>
							<li>
								<a href='/'>Analytics</a>
							</li>
							<li>
								<a href='/'>Branded Links</a>
							</li>
						</ul>
						<ul>
							<li>
								<h5>Resources</h5>
							</li>
							<li>
								<a href='/'>Blog</a>
							</li>
							<li>
								<a href='/'>Developers</a>
							</li>
							<li>
								<a href='/'>Support</a>
							</li>
						</ul>
						<ul>
							<li>
								<h5>Company</h5>
							</li>
							<li>
								<a href='/'>About</a>
							</li>
							<li>
								<a href='/'>Our Team</a>
							</li>
							<li>
								<a href='/'>Careers</a>
							</li>
							<li>
								<a href='/'>Contact</a>
							</li>
						</ul>
					</div>
					<div className='social'>
						<img src={facebook} alt='' />
						<img src={instagram} alt='' />
						<img src={pintrest} alt='' />
						<img src={twitter} alt='' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
