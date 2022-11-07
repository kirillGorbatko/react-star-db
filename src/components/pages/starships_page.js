import React from 'react';
import { StarshipList, StarshipDetails } from '../sw_components';
import { useNavigate, useMatch } from 'react-router-dom';
import Row from '../row/row';

const StarshipsPage = () => {
	const history = useNavigate();
	const match = useMatch('/starships/:id');
	const { id } =  match ? match.params : '';

	return (
		<Row
			left={<StarshipList onItemSelected={(id) => history(id)} />}
			right={<StarshipDetails itemId={ id } />}
		/>
	);
}

export default StarshipsPage;
