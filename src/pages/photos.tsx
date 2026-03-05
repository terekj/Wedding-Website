import * as React from 'react';
import Hyperlink from '../components/hyperlink';
import './photos.css';
import picture from '../assets/image_ring.jpeg';
import { SlMagicWand } from 'react-icons/sl';

function Photos() {
	return (
		<div className="section-container">
			<section id="photos-picture">
				<img src={picture} alt="Ring Image"/>
			</section>
			<section id="photos">
				<div className="photos-text">
					<SlMagicWand className="icon"/>
					<h4>Join the party!</h4>
					<h3>Request a song, tip the DJ, or add photos to a shared album by visiting the link below!</h3>
					<Hyperlink url="https://app.limedj.com/shows/djwretro/4GPTPG" target="_blank">https://app.limedj.com/shows/djwretro/4GPTPG</Hyperlink>
				</div>
			</section>
		</div>
	);
}

export default Photos;