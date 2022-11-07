import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css'

const Header = () => {
	const nav = [
		{
			page_path: '/people',
			page_title: 'People',
		},
		{
			page_path: '/planets',
			page_title: 'Planets',
		},
		{
			page_path: '/starships',
			page_title: 'Starships',
		},
	];

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<NavLink 
						end to='/'
						className={
							({ isActive }) => (isActive ? 'header__logo header__logo--active_state' : 'header__logo')
						} 
					>Star DB</NavLink>
					<ul className='header__list'>
							{
								nav.map((item, index) => (
									<li className='header__item' key={index}>
										<NavLink 
											to={item.page_path}
											className={
												({ isActive }) => (isActive ? 'header__link header__link--active_state' : 'header__link')
											}
										>{item.page_title}</NavLink>
									</li>
								))
							}
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;