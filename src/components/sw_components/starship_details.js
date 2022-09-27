import React from 'react';
import ItemDetails, { Record } from '../item_details/item_details';
import { withSwapiService } from '../hoc_helper';

const StarshipDetails = ({ itemId, swapiService }) => {
	const { getStarship, getStarshipImage } = swapiService;

	return (
		<ItemDetails
			itemId={itemId}
			getData={getStarship}
			getImageUrl={getStarshipImage}
		>
			<Record field='model' label='Model' />
			<Record field='cost' label='Cost' />
		</ItemDetails>
	);
}


export default withSwapiService(StarshipDetails);