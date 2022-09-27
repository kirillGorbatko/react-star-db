import React from 'react';
import ItemDetails, { Record } from '../item_details/item_details';
import { withSwapiService } from '../hoc_helper';

const PlanetDetails = ({ itemId, swapiService }) => {
	const { getPlanet, getPlanetImage } = swapiService;

	return (
		<ItemDetails
			itemId={itemId}
			getData={getPlanet}
			getImageUrl={getPlanetImage}
		>
			<Record field='rotationPeriod' label='Rotation period' />
			<Record field='population' label='Population' />
		</ItemDetails>
	);
}

export default withSwapiService(PlanetDetails);