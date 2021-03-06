import React from 'react';
import './Card.css';

const Card = props => {

	return(
	<div 
	className="cell large-2 medium-4 small-12 card"
	>
	    <img 
	    className="thumbnail image"
	    data={props.data} 
	    src={props.href}
	    alt='fish'
	    onClick={props.clickHandler}
	    />
  	</div>

		)
};

export default Card;