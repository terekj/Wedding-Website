import * as React from 'react';
import './info.css';

function Info() {
 	return (
		<div className="section-container">
			<section id="info">
				<div>
					<div className="title">Information</div>
					<div className="text"><p>20250 Sand Canyon Rd,<br/>Canyon Country, CA 91351</p></div>
					<div className="text">9.20.25</div>
					<div className="text">2 pm</div>

					<div className="title">Rules</div>
					<div className="text">Ceremony begins promplty at 2 pm. Tardy guests will not be allowed entrance.</div>
					<div className="text">No phones or cameras allowed during the ceremony.</div>
					<div className="text">No children or extended invitation unless directed otherwise.</div>
				</div>
				<div>
					<div className="subtitle">Frequently Asked Questions</div>

					<div className="question">
						<p className="text">
							<span>Is there a dress code?</span><br/>
							The couple requests formal attire in earth tones.
						</p>
					</div>
					<div className="question">
						<p className="text">
							<span>Why are no plus-ones given?</span><br/>
							We have strict limits on the amount of guests we can accommodate. 
							Unless your guest is explicitly addressed in the formal invitation,
							we ask that your guest kindly stay home for the evening.
						</p>
					</div>
					<div className="question">
						<p className="text">
							<span>What will the food options include?</span><br/>
							There will be tacos during the reception, including vegetarian options.
							Any dietary restrictions should be declared in the RSVP.
						</p>
					</div>
					<div className="question">
						<p className="text">
							<span>Is there an open bar?</span><br/>
							Yes, there will be an open bar during the cocktail hour and reception.
						</p>
					</div>
					<div className="question">
						<p className="text">
							<span>What is the parking situation?</span><br/>
							The venue has approximately 100 parking spaces.
							If possible, kindly carpool and help out the venue (and the environment, too!).
						</p>
					</div>
					<div className="question">
						<p className="text">
							<span>How can we show love to the special couple?</span><br/>
							Check the registry page! 
						</p>
					</div>
					<div className="footer-text">Any further questions can be directed to (661)-309-0733</div>
				</div>

			</section>
		</div>
	);
}

export default Info;