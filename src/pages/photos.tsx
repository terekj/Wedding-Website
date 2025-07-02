import * as React from 'react';
import Hyperlink from '../components/hyperlink';
import './photos.css';
import picture from '../assets/image_ring.jpeg';
import { SlCamera } from 'react-icons/sl';

function Photos() {
	return (
		<div className="section-container">
			<section id="photos">
				<div className="photos-text">
					<SlCamera className="icon"/>
					<h4>Share your photos!</h4>
					<h3>Come back to this page on the big night for a link to view and contribute to a shared album!</h3>
					{/* <h3>Upload your photos of the big night to our shared album by visiting the link below:</h3>
					<Hyperlink url="https://google.com" target="_blank">https://google.com</Hyperlink> */}
				</div>
			</section>
			<section id="photos-picture">
				<img src={picture} alt="Ring Image"/>
			</section>
		</div>
	);
}

export default Photos;