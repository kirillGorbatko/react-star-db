import React, { Component } from 'react';

import './error_button.css'

export default class ErrorButton extends React.Component {
	state = {
		renderError: false,
	};

	render() {
		if (this.state.renderError) {
			this.foo.bar = 0; // error line
		}

		return (
			<button
				className='error_button'
				type='button'
				onClick={() => this.setState({ renderError: true })}>
				Throw error!
			</button>
		)
	}
}