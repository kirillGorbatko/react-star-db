import React from 'react';

// components
import Header from '../header/header';
import RandomPlanet from '../random_planet/random_planet';
import { 
	PeoplePage, 
	PlanetsPage, 
	StarshipsPage, 
	LoginPage,
	SecretPage,
} from '../pages';

// service components
import ErrorBoundry from '../error_boundry/error_boundry';
import SwapiService from '../../services/swapi';
import { SwapiServiceProvider } from '../swapi_service_context';

// router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles components
import './app.css';

export default class App extends React.Component {
	swapiService = new SwapiService();

	state = {
		isLoggedIn: false,
	};

	onLogin = () => {
		this.setState({
			isLoggedIn: true,
		})

		document.body.classList.add('body--logged_in');
	}

	render() {
		const { isLoggedIn } = this.state;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<div className='wrapper'>
							<Header />
							<div className='wrapper__in'>
								<RandomPlanet />
								<Routes>
									<Route path="/" element={<TitleSection title="Welcome to StarDB" />} />
									<Route path="*" element={<TitleSection title="Error 404. Page not found." />} />

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
									<Route path="/login" element={
										<section>
											<TitleSection title="Login" />
											<LoginPage 
												isLoggedIn={isLoggedIn}
												onLogin={this.onLogin}
											/>
										</section>
									} />
									<Route path="/secret" element={
										<section>
											<TitleSection 
												title='Secret page'
											/>
											<SecretPage isLoggedIn={isLoggedIn}/>
										</section>
									} />
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