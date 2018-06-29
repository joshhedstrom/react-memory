import React from 'react';
import './Header.css';

const Header = props => {
	return(
		<div className='header'>
			<h1 className='header-title'>Memory Game</h1>
			<p className='header-instructions'>Click on any picture, but make sure not to click on the same picture twice!</p>
			<h4>High Score</h4>
			<p>{props.highScore}</p>
			<h4>Current Score</h4>
			<p>{props.currentScore}</p>
		</div>
		)
};

export default Header;