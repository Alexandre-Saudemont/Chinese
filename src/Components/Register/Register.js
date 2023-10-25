import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../firebase/config';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState(null);

	const auth = getAuth();
	const navigate = useNavigate();

	function isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	const handleRegistration = async () => {
		if (!isValidEmail(email)) {
			setError('Email invalide');
			return;
		}
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			Swal.fire({
				text: `Bonjour ${email} ! Votre compte a bien été créé !`,
				icon: 'success',
				timer: 3000,
				timerProgressBar: true,
				customClass: {
					timerProgressBar: '.inscription-swal-timer',
				},
			});
			navigate('/login');
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// Gérez les erreurs, par exemple, affichez un message d'erreur à l'utilisateur.
			// Utilisez un switch pour gérer différents codes d'erreur
			let customErrorMessage = errorMessage;
			switch (errorCode) {
				case 'auth/invalid-email':
					customErrorMessage = 'Email invalide';
					break;
				case 'auth/email-already-in-use':
					customErrorMessage = 'Cet Email est déjà utilisé';
					break;
				case 'auth/weak-password':
					customErrorMessage = 'Votre mot de passe doit contenir au minimum 6 caractères';
					break;
				case 'auth/operation-not-allowed':
					customErrorMessage = 'Opération non autorisée';
					break;
				// Ajoutez d'autres cas au besoin
				default:
				// Gérez les autres erreurs ici
			}
			setError(customErrorMessage);
			console.error(errorCode, customErrorMessage);
		}
	};

	return (
		<div>
			<input type='email' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
			<input
				type='password'
				name='password'
				value={password}
				placeholder='Mot de passe'
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<input
				type='password'
				name='confirmPassword'
				placeholder='Confirmer le mot de passe'
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				required
			/>
			{error && <p style={{color: 'red'}}>{error}</p>}
			<button onClick={handleRegistration}>S'inscrire</button>
		</div>
	);
}

export default Register;
