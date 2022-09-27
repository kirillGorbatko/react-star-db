import React, { Component } from 'react';
import ErrorIndicator from '../error_indicator/error_indicator';

export default class ErrorBoundry extends React.Component {
	state = {
		hasError: false,
	};

	componentDidCatch() {
		this.setState({
			hasError: true,
		});
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />
		} else {
			return this.props.children;
		}
	};
}
