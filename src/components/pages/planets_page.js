import React from 'react';
import { PlanetList, PlanetDetails } from '../sw_components';
import { useNavigate, useMatch } from 'react-router-dom';
import Row from '../row/row';

const PlanetsPage = () => {
	const history = useNavigate();
	const match = useMatch('/planets/:id');
	const { id } =  match ? match.params : '';

	return (
		<Row
			left={<PlanetList onItemSelected={(id) => history(id)} />}
			right={<PlanetDetails itemId={ id } />}
		/>
	);
}

export default PlanetsPage;