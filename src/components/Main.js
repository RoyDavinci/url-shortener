import React, { useState } from "react";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Main = () => {
	const [text, setText] = useState("");
	const [inputText, setInputText] = useState("");
	const [link, setLink] = useState("");
	const [classList, setClassList] = useState(false);

	const url = "https://api.shrtco.de/v2/shorten?url=";

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputText(text);
		setText("");
		if (!text) {
			setClassList(true);
		} else {
			setClassList(classList);
		}
		getData(text);
	};

	const getData = async (text) => {
		if (text) {
			const response = await fetch(`${url}${text}`);
			const data = await response.json();
			const result = data.result;
			setLink(result.full_short_link2);
		}
	};

	const width = window.innerWidth;
	const actualWidth = "767px";

	return (
		<main>
			<div className='shorten'>
				<div className='input-container'>
					<form action='' method='post' onSubmit={handleSubmit}>
						<input
							className={`${classList ? "border" : ""}`}
							type='text'
							placeholder='Shorten a link here'
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button type='submit'>Shorten It</button>
						<small className={`${classList ? "show" : "hide"}`}>
							Please insert a link
						</small>
					</form>
				</div>
				<div
					className={`${
						link
							? width > actualWidth
								? "link-container flex"
								: "link-container show"
							: "link-container hide"
					}`}
				>
					<div className='link'>
						<p>{inputText}</p>
						<div className='short-link'>
							<a href='/'>{link}</a>
							<button onClick={() => navigator.clipboard.writeText(link)}>
								Copy
							</button>
						</div>
					</div>
				</div>
			</div>
			<article className='statistics'>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard
				</p>
			</article>
			<article className='about'>
				<div className='about-container'>
					<img src={brand} alt='' />
					<h3>brand recognition</h3>
					<p>
						Boost your brand recognition with a click, Generic links don't mean
						a thing. Branded links helps instill confidence in your content.
					</p>
				</div>
				<div className='about-container'>
					<img src={records} alt='' />
					<h3>detailed records</h3>
					<p>
						Gain insights on who is clicking your links. Knowing when and where
						people engage with your content help inform better decisions.
					</p>
				</div>
				<div className='about-container'>
					<img src={customizable} alt='' />
					<h3>fully customizable</h3>
					<p>
						Improve brand awareness and custom discoverability through
						customizable links, supercharging audience engagement
					</p>
				</div>
			</article>
		</main>
	);
};

export default Main;
