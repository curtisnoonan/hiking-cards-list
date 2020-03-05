import React from 'react';
import { Card } from '../card/card.component.jsx';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
    {props.trails.map(trail =>(
        <Card key={trail.id} trail={trail}/>
      ))}
    </div>

);