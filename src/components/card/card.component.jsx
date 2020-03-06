import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
    <img alt={props.trail.name}
      src={props.trail.imageurl}/>
        <h2>{props.trail.name}</h2>
        <h3>{props.trail.location}</h3>
        <h3>{props.trail.length}</h3>
        <h3>Elevation Change: {props.trail.elevation_change}</h3>
        <h3>Approx hiking time: {props.trail.hiking_time}</h3>
    </div>
);