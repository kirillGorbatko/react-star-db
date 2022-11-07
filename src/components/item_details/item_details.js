import React from 'react';
import SwapiService from '../../services/swapi';
import Loader from '../loader/loader';
import ErrorIndicator from '../error_indicator/error_indicator';
import ErrorButton from '../error_button/error_button';

import './item_details.css'

const Record = ({ item, field, label }) => {
	return (
		<li className='item_details__item'>
			<div className='item_details__label'>{label}</div>
			<div className='item_details__value'>{item[field]}</div>
		</li>
	);
}

export { Record };

export default class ItemDetails extends React.Component {
	swapiService = new SwapiService();

	state = {
		item: null,
		image: null,
		error: false,
		loading: false,
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	onError = (error) => {
		this.setState({
			error: true,
		})
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;

		if (!itemId) return;

		this.setState({ loading: true });

		getData(itemId)
			.then((item) => {
				this.setState({
					item,
					image: getImageUrl(item),
					loading: false,
				});
			})
			.catch(this.onError);
	};

	render() {

		const { item, error, loading, image } = this.state;

		const hasData = !error && !loading;
		const message = <div className='item_details__message'>Select a person from a list</div>;

		const errorMessage = error ? <ErrorIndicator /> : null;
		const loader = loading ? <Loader /> : null;
		const content = item ? <ItemView item={item} image={image} propsChildren={this.props.children} /> : message;
		const itemInfo = hasData ? content : null;

		return (
			<article className='item_details'>
				{loader}
				{errorMessage}
				{itemInfo}
			</article>
		);
	}
}

const ItemView = ({ item, image, propsChildren }) => {
	const { name } = item;

	return (
		<div className='item_details__row'>
			<div className='item_details__column'>
				<div className='item_details__image'>
					<img src={image} alt={`${name} item`}></img>
				</div>
			</div>
			<div className='item_details__column'>
				<h3 className='item_details__title'>{name}</h3>
				<ul className='item_details__list'>
					{
						React.Children.map(propsChildren, (child) => {
							return React.cloneElement(child, { item });
						})
					}
					<li className='item_details__wrap'>
						<ErrorButton />
					</li>
				</ul>
			</div>
		</div>
	);
}

