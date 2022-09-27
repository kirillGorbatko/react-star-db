export default class SwapiService {

	_apiBase = 'https://swapi.dev/api'
	_imageBase = 'https://starwars-visualguide.com/assets/img';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) throw new Error(`Could not fetch ${url}. Recived ${res.status} `)

		return await res.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource('/people/');
		return res.results.map(this._transformPeople);
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPeople(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResource('/planets/');
		return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource('/starships/');
		return res.results.map(this._transformStarShip);
	}

	getStarship = async (id) => {
		const starShip = await this.getResource(`/starships/${id}/`);
		return this._transformStarShip(starShip);
	}

	getPersonImage = ({ id }) => {
		return `${this._imageBase}/characters/${id}.jpg`
	};

	getPlanetImage = ({ id }) => {
		return `${this._imageBase}/planets/${id}.jpg`
	};

	getStarshipImage = ({ id }) => {
		return `${this._imageBase}/starships/${id}.jpg`
	};

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
			climate: planet.climate,
			gravity: planet.gravity,
		};
	};

	_transformPeople = (people) => {
		return {
			id: this._extractId(people),
			name: people.name,
			gender: people.gender,
			birthYear: people.birth_year,
			eyeColor: people.eye_color,
			skinColor: people.skin_color,
		};
	};

	_transformStarShip = (starShip) => {
		return {
			id: this._extractId(starShip),
			name: starShip.name,
			model: starShip.model,
			cost: starShip.cost_in_credits,
		};
	};
}