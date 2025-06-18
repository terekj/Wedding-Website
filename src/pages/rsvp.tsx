import * as React from 'react';
import './rsvp.css';
import picture from '../assets/image_walking.jpeg';

function RSVP() {
	return (
		<div className="section-container">
			<section id="rsvp">
				<div>
					<p className="text">RSVP Page</p>
				</div>
			</section>
			<section id="rsvp-picture">
				<img src={picture} alt="Walking Image"/>
			</section>
		</div>
	);
}

export default RSVP;