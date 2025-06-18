import * as React from 'react';
import './App.css';
import './global.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import RSVP from './pages/rsvp';
import Info from './pages/info';
import Registry from './pages/registry';
import Photos from './pages/photos';

function App() {
	return (
		<>
			<Navbar/>
			<Home/>
			<RSVP/>
			<Info/>
			<Registry/>
			<Photos/>
		</>
	);
}

export default App;