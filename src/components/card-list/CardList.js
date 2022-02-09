import React from 'react';
import './card-list.css'
import Card from '../card/Card';

const Cardlist = props => {
  return (
    <div className='card-list'>
      {
        props.monsters.map(monster =>(
          <Card monster={monster}>
            
          </Card>
          
        ))
      }
      
    </div>
  );
}

export default Cardlist;
