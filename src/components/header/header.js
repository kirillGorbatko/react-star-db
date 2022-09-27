import React from 'react';

import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<div className='header__logo'>Star DB</div>
					<ul className='header__list'>
						<li className='header__item'>
							<a href="#" className='header__link'>People</a>
						</li>
						<li className='header__item'>
							<a href="#" className='header__link'>Planets</a>
						</li>
						<li className='header__item'>
							<a href="#" className='header__link'>Starships</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;