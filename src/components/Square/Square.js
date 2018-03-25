import React from 'react';
import './Square.css'

const Square = props => (
  <div onClick={() => props.clickSquare(props.id)} className="square">
    <div className="img-container">
      <img alt={props.id} src={props.img} />
    </div>
  </div>
);

export default Square;

