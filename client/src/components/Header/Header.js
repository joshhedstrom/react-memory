import React from 'react';
import './Header.css';

const Header = ()=> {
	return(
		<div className='header'>
			<h1 className='header-title'>Memory Game</h1>
			<p className='header-instructions'>Click on any picture, but make sure not to click on the same picture twice!</p>
		</div>
		)
};

export default Header;