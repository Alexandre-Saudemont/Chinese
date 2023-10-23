import React from 'react';
import {useState} from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form className='Login-form'>
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button type='submit'>S'inscrire</button>
			</form>
		</div>
	);
}

export default Login;
