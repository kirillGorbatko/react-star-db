import React, {Component} from 'react';

import Row from '../row/row';
import { PlanetList, PlanetDetails } from '../sw_components';

export default class PlanetsPage extends React.Component {
	state = {
		selectedItem: null
	};

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;

		return (
			<Row 
				left={<PlanetList onItemSelected={this.onItemSelected}/>}
				right={<PlanetDetails itemId={selectedItem}/>}
			/>
		)
	}
}