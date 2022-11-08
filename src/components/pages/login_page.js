import React from 'react';
import { useLocation, Navigate } from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {
	const location = useLocation();

	if (!isLoggedIn) {
		return (
			<div className='container'>
				<div className='content'>
					<h3>Log in to the secret page!</h3>
					<button 
						className='button'
						type='button'
						onClick={onLogin}
					>Login</button>
				</div>
			</div>
		);
	};

	return <Navigate to="/" state={{ from: location }} replace />;
};

export default LoginPage;
