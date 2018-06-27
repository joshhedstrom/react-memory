import React from 'react';
import './Card.css';

const Card = props => {

	return(
	<div 
	className="cell small-3 card"
	>
	    <img 
	    className="thumbnail image"
	    data-value={props.number} 
	    src={props.href}
	    alt='fish'
	    onClick={props.clickHandler}
	    />
  	</div>

		)
};

export default Card;