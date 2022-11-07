import React from 'react';

// components
import Header from '../header/header';
import RandomPlanet from '../random_planet/random_planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw_components';

// service components
import ErrorBoundry from '../error_boundry/error_boundry';
import SwapiService from '../../services/swapi';
import { SwapiServiceProvider } from '../swapi_service_context';

// router components
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

// styles components
import './app.css';

export default class App extends React.Component {
	swapiService = new SwapiService();

	render() {
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<div className='wrapper'>
							<Header />
							<div className='wrapper__in'>
								<RandomPlanet />
								<Routes>
									<Route path="/people/*" element={
										<section>
											<TitleSection title="People" />
											<PeoplePage />
										</section>
									} />

									<Route path="/planets/*" element={
										<section>
											<TitleSection title="Planets" />
											<PlanetsPage />
										</section>
									} />

									<Route path="/starships/*" element={
										<section>
											<TitleSection title="Starships" />
											<StarshipsPage />
										</section>
									} />

									<Route path="*" element={<TitleSection title="Welcome to StarDB" />} />
								</Routes>
							</div>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
}

const TitleSection = (props) => {
	return (
		<div className='container'>
			<h2>{props.title}</h2>
		</div>
	);
};

const DetailPage = (props) => {
	const { id } = useParams();

	switch (props.component) {
		case 'people':
			return <PersonDetails itemId={id} />
		case 'planets':
			return <PlanetDetails itemId={id} />
		case 'starships':
			return <StarshipDetails itemId={id} />
		default:
				return null;
	}
};