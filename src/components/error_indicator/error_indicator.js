import React from 'react';

import './error_indicator.css'
import darthVader from './error.gif'

const ErrorIndicator = () => {
	return (
		<div className='error_indicator'>
			<div className='error_indicator__img'>
				<img src={darthVader} alt='Darth Vader' />
			</div>
			<h4 className='error_indicator__title'>Ooops!</h4>
			<div className='error_indicator__text'>
				<p>Something has gone terribly wrong.</p>
				<p>(but we already sent him to fix it)</p>
			</div>
		</div>
	);
}

export default ErrorIndicator;