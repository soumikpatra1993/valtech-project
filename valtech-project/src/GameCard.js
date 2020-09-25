import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './GameCard.css'

export default function GameCard({ item, editProperty , deleteProperty }) {
  return (
    <div className="card-body">
     <div className= 'img-wrap'>
       <img src= {item.imgURL} alt={item.imgURL}/>
     </div>
     <div className = "right-container">
       <h4>{item.title}</h4>
  <div> Total experience{item.totalExp} years</div>
  <div> Toatl Projects{item.totalProjects}</div>
  <div>{item.location}</div>
    <div className= "button-wrap">
    <button onClick = {editProperty} className="edit-btn"><Link to={`/property/${item.id}`}>Edit</Link></button>
       <button onClick = {() => deleteProperty(item.id)} className="delete-btn">Delete</button>
    </div>
      
     </div>
    </div>
  );
}

GameCard.propTypes = {
  deleteProperty: PropTypes.func.isRequired
}
