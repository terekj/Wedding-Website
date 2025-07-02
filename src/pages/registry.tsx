import * as React from 'react';
import Hyperlink from '../components/hyperlink';
import './registry.css';
import { SlPresent } from 'react-icons/sl';
import picture from '../assets/image_hug.jpeg';

function Registry() {
	return (
		<div className="section-container">
			<section id="registry">
				<div className="registry-text">
					<SlPresent className="icon"/>
					<h4>Show your love to Breanna & Jake!</h4>
					<h3>View the special couple's registry or gift straight from the gift below:</h3>
					<Hyperlink url="https://registry.theknot.com/breanna-tankard-jacob-idolor-september-2025-ca/70492144?_gl=1*un26pk*_gcl_au*OTAyMjE5OTg5LjE3NTAyMDI5NDI.*_ga*MTk4MDgwNTg4OS4xNzUwMjAyOTQy*_ga_6XZLY5HEQX*czE3NTAyMDI5NDEkbzEkZzEkdDE3NTAyMDI5NjYkajM1JGwwJGgw" target="_blank" className="registry-link">https://registry.theknot.com/</Hyperlink>
				</div>
			</section>
			<section id="registry-picture">
				<img src={picture} alt="Hug Image"/>
			</section>
		</div>
	);
}

export default Registry;