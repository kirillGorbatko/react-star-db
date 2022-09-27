import React, { Component } from 'react';

import ItemList from '../item_list/item_list';
import ItemDetails from '../item_details/item_details';
import Row from '../row/row';

import ErrorBoundry from '../error_boundry/error_boundry';
import SwapiService from '../../services/swapi';

import './people_page.css'



export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedPerson: null,
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	};

	render() {
		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
			>
				{(i) => (
					<div>
						{i.name}
						<span> ({i.gender}, {i.birthYear})</span>
					</div>
				)}
			</ItemList>
		);

		const personDetails = (
			<ItemDetails itemId={this.state.selectedPerson} />
		);

		return (
			<ErrorBoundry>
				<Row left={itemList} right={personDetails} />
			</ErrorBoundry>
		)
	}
}