import React from 'react';
import PropTypes from 'prop-types';

import './item_list.css'

const ItemList = (props) => {
	const {
		data,
		onItemSelected,
		children: renderLabel,
		hasData,
		errorMessage,
		loader } = props;

	const items = hasData ? data.map((item) => {
		const { id } = item;
		const label = renderLabel(item);

		return (
			<li className='item_list__item'
				key={id}
				onClick={() => onItemSelected(id)}>
				{label}
			</li>
		);
	}) : null;

	return (
		<ul className='item_list'>
			{errorMessage}
			{loader}
			{items}
		</ul>
	);
}

ItemList.defaultProps = {
	onItemSelected: () => {}
}

ItemList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object),
	children: PropTypes.func.isRequired
}

export default ItemList;