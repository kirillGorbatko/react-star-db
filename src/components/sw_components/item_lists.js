import React from 'react';
import ItemList from '../item_list/item_list';
import { withData, withChildFunction } from '../hoc_helper';
import SwapiService from '../../services/swapi';

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships,
} = swapiService;

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withData(
	withChildFunction(ItemList, renderName),
	getAllPeople);

const PlanetList = withData(
	withChildFunction(ItemList, renderName),
	getAllPlanets);

const StarshipList = withData(
	withChildFunction(ItemList, renderName),
	getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
};