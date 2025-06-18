import * as React from 'react';
import Hyperlink from '../components/hyperlink';
import './registry.css';
import picture from '../assets/image_hug.jpeg';

function Registry() {
	return (
		<div className="section-container">
			<section id="registry">
				<div>Show your love to Breanna & Jake!</div>
				<div>View the special couple's registry or gift straight from the gift below:</div>
				<Hyperlink url="https://google.com" target="_blank">https://google.com</Hyperlink>
			</section>
			<section id="registry-picture">
				<img src={picture} alt="Hug Image"/>
			</section>
		</div>
	);
}

export default Registry;