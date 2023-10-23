import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

function router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default router;
