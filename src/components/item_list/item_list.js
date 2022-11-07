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
				onClick={(e) => {
					onItemSelected(id);
					const $element = e.target;
					const activeStateClass = 'item_list__item--active_state';

					if ($element.classList.contains(activeStateClass)) return;
					
					const $activeElements = document.querySelectorAll(`.${activeStateClass}`);

					$activeElements.forEach($activeEl => $activeEl.classList.remove(activeStateClass));
					
					e.target.classList.add(activeStateClass);
				}}>
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
	onItemSelected: () => { }
}

ItemList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object),
	children: PropTypes.func.isRequired
}

export default ItemList;