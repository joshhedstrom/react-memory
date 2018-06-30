import React from 'react';
import './Header.css';

const Header = props => {
	return(
		<div className='header'>
			<h1 className='header-title'>Memory Game</h1>
			<p className='header-instructions'>Click on any picture, but make sure not to click on the same picture twice!</p>
			<h4 className='score'>High Score: {props.highScore}</h4>
			<h4 className='score'>Current Score: {props.currentScore}</h4>
			<h4 className='message'>{props.message}</h4>
		</div>
		)
};

export default Header;