import React from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi';
import Loader from '../loader/loader';
import ErrorIndicator from '../error_indicator/error_indicator';

import './random_planet.css'

export default class RandomPlanet extends React.Component {

	static defaultProps = {
		updateInterval: 5000
	};

	static propTypes = {
		updateInterval: PropTypes.number
	};

	SwapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false,
	};

	componentDidMount() {
		const { updateInterval } = this.props;
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
		})
	}

	onError = (error) => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * (19 - 2) + 2);

		this.SwapiService.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	render() {

		const { planet, loading, error } = this.state;

		const hasData = !(loading || error)

		const errorMessage = error ? <ErrorIndicator /> : null;
		const loader = loading ? <Loader /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;

		return (
			<section className='random_planet'>
				<div className='container'>
					<div className='random_planet__body'>
						{errorMessage}
						{loader}
						{content}
					</div>
				</div>
			</section>
		);
	}
};

const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter, climate, gravity } = planet;

	return (
		<React.Fragment>
			<div className='random_planet__column'>
				<div className='random_planet__image'>
					<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name} planet`}></img>
				</div>
			</div>
			<div className='random_planet__column'>
				<h1 className='random_planet__title'>{name}</h1>
				<ul className='random_planet__list'>
					<li className='random_planet__item'>
						<div className='random_planet__label'>Population</div>
						<div className='random_planet__value'>{population}</div>
					</li>
					<li className='random_planet__item'>
						<div className='random_planet__label'>Rotation Period</div>
						<div className='random_planet__value'>{rotationPeriod}</div>
					</li>
					<li className='random_planet__item'>
						<div className='random_planet__label'>Diameter</div>
						<div className='random_planet__value'>{diameter}</div>
					</li>
					<li className='random_planet__item'>
						<div className='random_planet__label'>Climate</div>
						<div className='random_planet__value'>{climate}</div>
					</li>
					<li className='random_planet__item'>
						<div className='random_planet__label'>Gravity</div>
						<div className='random_planet__value'>{gravity}</div>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}
