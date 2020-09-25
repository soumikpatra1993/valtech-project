import React from 'react';
import PropTypes from 'prop-types';
import GameCard from '../GameCard';
import './PropertiesList.css'

export default function GamesList({ propertyList = [], editProperty , deleteProperty }) {
  const emptyMessage = (
    <p>There are no propertyList yet in your collection.</p>
  );

  const gamesList = (
    <div className="list"> 
      {  propertyList.map(item => <GameCard item={item} key={item.id} deleteProperty={deleteProperty} />) }
    </div>
  );

  return (
    <div>
      { propertyList.length === 0 ? emptyMessage : gamesList }
    </div>
  );
}

GamesList.propTypes = {
  propertyList: PropTypes.array.isRequired,
  deleteProperty: PropTypes.func.isRequired
}
