import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<Link to="/" className='header__logo'>Star DB</Link>
					<ul className='header__list'>
						<li className='header__item'>
							<Link to="/people" className='header__link'>People</Link>
						</li>
						<li className='header__item'>
							<Link to="/planets" className='header__link'>Planets</Link>
						</li>
						<li className='header__item'>
							<Link to="/starships" className='header__link'>Starships</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;