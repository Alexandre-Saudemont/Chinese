import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/login'>Login</NavLink>
			<NavLink to='/register'>Register</NavLink>
		</div>
	);
}

export default App;
