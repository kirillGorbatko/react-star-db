import React, { Component } from 'react';

// components
import Header from '../header/header';
import RandomPlanet from '../random_planet/random_planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

// service components
import ErrorBoundry from '../error_boundry/error_boundry';
import SwapiService from '../../services/swapi';
import { SwapiServiceProvider } from '../swapi_service_context';

// styles components
import './app.css';

export default class App extends React.Component {
	swapiService = new SwapiService();

	render() {

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<div className='wrapper'>
						<Header />
						<div className='wrapper__in'>

							<RandomPlanet/>
							
							<PeoplePage/>
							<PlanetsPage/>
							<StarshipsPage/>
					
						</div>
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
}