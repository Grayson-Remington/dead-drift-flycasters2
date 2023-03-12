import React from 'react';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Videos from './components/Videos';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/team'
					element={<Team />}
				/>
				<Route
					path='/videos'
					element={<Videos />}
				/>

				<Route
					path='/upcomingevents'
					element={<UpcomingEvents />}
				/>
				<Route
					path='/comingsoon'
					element={<ComingSoon />}
				/>
			</Routes>
		</>
	);
}

export default App;
