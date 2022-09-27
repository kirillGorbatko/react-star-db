import React from 'react';
import PropTypes from 'prop-types';

import './row.css'

const Row = ({ left, right }) => {
	return (
		<div className='container'>
			<section className='row'>
				<div className='column'>
					{left}
				</div>
				<div className='column'>
					{right}
				</div>
			</section>
		</div>
	);
};

Row.propTypes = {
	left: PropTypes.node,
	right: PropTypes.node
}

export default Row;