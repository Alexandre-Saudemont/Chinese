import React from 'react';
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Components/Home/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
function router() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default router;
