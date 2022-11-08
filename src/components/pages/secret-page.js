import React from 'react';
import { useLocation, Navigate } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
	const location = useLocation();

	if (isLoggedIn) {
		return (
			<div className='container'>
				<div className='content'>
					<h3>This page is full of secrets!!!</h3>
				</div>
			</div>
		);
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SecretPage;
