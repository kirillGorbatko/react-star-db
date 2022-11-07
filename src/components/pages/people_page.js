import React from 'react';
import { PersonList, PersonDetails } from '../sw_components';
import { useNavigate, useMatch } from 'react-router-dom';
import Row from '../row/row';

const PeoplePage = () => {
	const history = useNavigate();
	const match = useMatch('/people/:id');
	const { id } =  match ? match.params : '';

	return (
		<Row
			left={<PersonList onItemSelected={(id) => history(id)} />}
			right={<PersonDetails itemId={ id } />}
		/>
	);
}

export default PeoplePage;
