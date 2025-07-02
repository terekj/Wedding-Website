import * as React from 'react';
import Countdown from '../components/countdown';
import './home.css';
import picture from '../assets/image_sunset.jpeg';

function Home() {
	return (
		<div className="section-container">
			<section id="home">
				<div className="home-content">
					<p className="text">Be our guest.</p>
					<div className="title">Breanna & Jacob</div>
					<p className="text">September 25, 2025<br/>Canyon Country, CA</p>
					<Countdown
						date="2025-09-20T14:00:00"
						className="countdown"
						units={["months", "days", "hours", "minutes", "seconds"]}
					/>

				</div>
			</section>
			<section id="home-picture">
				<img src={picture} alt="Sunset Image"/>
			</section>
		</div>
	);
}

export default Home;