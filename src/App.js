import "./index.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Section from "./components/Section";

function App() {
	return (
		<>
			<div className='container'>
				<Header></Header>
				<Main></Main>
				<Section></Section>
			</div>
			<Footer></Footer>
		</>
	);
}

export default App;
