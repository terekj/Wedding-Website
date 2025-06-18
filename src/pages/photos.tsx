import * as React from 'react';
import Hyperlink from '../components/hyperlink';
import './registry.css';
import picture from '../assets/image_ring.jpeg';

function Photos() {
	return (
		<div className="section-container">
			<section id="photos">
				<div>Share your photos!</div>
				<div>Upload your photos of the big night to our shared album by visiting the link below:</div>
				<Hyperlink url="https://google.com" target="_blank">https://google.com</Hyperlink>
			</section>
			<section id="photos-picture">
				<img src={picture} alt="Ring Image"/>
			</section>
		</div>
	);
}

export default Photos;