import * as React from "react";
import "./info.css";import { SlCalender, SlClock, SlLocationPin} from "react-icons/sl";

function Info() {
	return (
		<div className="section-container">
				<section className="info-left" id="info">
<h2 className="faq-heading">Frequently Asked Questions</h2>


					<div className="faq-entry">
						<h4>Where do I RSVP?</h4>
						<p>The wedding RSVP is closed as of July 26, 2025. For any special concerns, please contact the phone number or email at the bottom of the FAQ.</p>
					</div>

					<div className="faq-entry">
						<h4>Is there a dress code?</h4>
						<p>The couple requests formal attire in earth tones.</p>
					</div>

					<div className="faq-entry">
						<h4>Why are no plus-ones given?</h4>
						<p>
							In order to adhere to fire & safety regulations, there
							are strict limits on the amount of guests we can accommodate.
							Unless your guest is explicitly addressed in the formal invitation,
							we ask that your guest kindly stay home for the evening.
						</p>
					</div>

					<div className="faq-entry">
						<h4>What will the food options include?</h4>
						<p>
							There will be tacos during the reception, including vegetarian options.
						</p>
					</div>

					<div className="faq-entry">
						<h4>Is there an open bar?</h4>
						<p>
							Yes, there will be an open bar during the cocktail hour and reception.
						</p>
					</div>

					<div className="faq-entry">
						<h4>What is the parking situation?</h4>
						<p>
							The venue has approximately 100 parking spaces. If possible,
							kindly carpool and help out the venue (and the environment, too!).
						</p>
					</div>

					<div className="faq-entry">
						<h4>How can we show love to the special couple?</h4>
						<p>Check the registry page!</p>
					</div>

					<h4 className="faq-footer">Any further questions can be directed to (661)-309-0733 or contact@breannaandjacob.wedding.</h4>

				</section>


				<section className="info-right">
									<div className="outer-green">
					<div className="white-padding">
					<div className="inner-border">
						<h2 className="info-heading">Information</h2>
							
						<p className="info-line"><SlLocationPin className="icon-small"/>
						Canyon Country, CA
						</p>
						
						<p className="info-line">Please check your email<br/>closer to the event<br/>for a precise address.</p>
					
						<p className="info-line"><SlCalender className="icon-small"/>09.20.25</p>
						<p className="info-line"><SlClock className="icon-small"/>2 pm</p>

						<h3 className="rules-heading">Rules</h3>
						<div className="rules-text">
							<p>
								Ceremony begins promptly at 2 pm.<br />
								Tardy guests will not be allowed entrance.
							</p>
							<p>No phones or cameras allowed during the ceremony.</p>
							<p>
								No children or extended invitation<br />
								unless directed otherwise.
							</p>
							<p>
								No smoking or vaping on the venue premises.
							</p>
						</div>
					</div>
					</div>
				</div>
				
				</section>
			</div>
	);
}

export default Info;
