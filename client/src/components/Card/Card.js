import React from 'react';
import './Card.css';

const Card = props => {
	<div 
	className="cell small-4"
	>
	    <img 
	    className="thumbnail"
	    data-value={props.number} 
	    src={props.href}
	    alt={props.alt}
	    />
  	</div>
};

export default Card;