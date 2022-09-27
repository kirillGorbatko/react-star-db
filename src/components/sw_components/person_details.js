import React from 'react';
import ItemDetails, { Record } from '../item_details/item_details';
import { withSwapiService } from '../hoc_helper';

const PersonDetails = ({ itemId, swapiService }) => {
	const { getPerson, getPersonImage } = swapiService;

	return (
		<ItemDetails
			itemId={itemId}
			getData={getPerson}
			getImageUrl={getPersonImage}
		>
			<Record field='gender' label='Gender' />
			<Record field='eyeColor' label='Eye Color' />
		</ItemDetails>
	);
}

export default withSwapiService(PersonDetails);