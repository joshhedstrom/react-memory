import React from 'react';
import './Header.css';

const Header = props => {
	return(
		<div className='header'>
			<h1 className='header-title'>Memory Game</h1>
			<h5 className='message'>{props.message}</h5>
			<h4 className='score'>Current Score: {props.currentScore} High Score: {props.highScore}</h4>
		</div>
		)
};

export default Header;