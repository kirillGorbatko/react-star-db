import React from 'react';

import Loader from '../loader/loader';
import ErrorIndicator from '../error_indicator/error_indicator';

const withData = (View, getData) => {
	return class extends React.Component {

		state = {
			data: null,
			loading: true,
			error: false,
		};

		onError = (error) => {
			this.setState({
				error: true,
				loading: false,
			})
		}

		componentDidMount() {

			getData()
				.then((data) => {
					this.setState({
						data,
						loading: false,
					});
				})
				.catch(this.onError);
		}

		render() {
			const { data, loading, error } = this.state;

			const hasData = !(loading || error)

			const errorMessage = error ? <ErrorIndicator /> : null;
			const loader = loading ? <Loader /> : null;

			return <View
				{...this.props}
				data={data}
				hasData={hasData}
				errorMessage={errorMessage}
				loader={loader}
			/>
		};
	}
};

export default withData; 