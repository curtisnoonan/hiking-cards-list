import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
    <img alt={props.trail.name}
      src={props.trail.imageurl}/>
        <h2>{props.trail.name}</h2>
    </div>
);