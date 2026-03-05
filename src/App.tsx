import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './global.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import Info from './pages/info';
import Registry from './pages/registry';
import Photos from './pages/photos';
import Status from './pages/status';

function LandingPage() {
	return (
		<>
			<div className="navbar">
				<Navbar />
			</div>
			<Home />
			<Info />
			<Registry />
			<Photos />
		</>
	);
}

function App() {
	return (
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/get-rsvp-status" element={<Status />} />
			</Routes>
	);
}

export default App;
