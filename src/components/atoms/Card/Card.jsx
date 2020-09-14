import React from 'react';
import './card.scss';
const Card = (props) => {
  return (
    <div
      id="card"
      onClick={props.clickCard}
      key={props.cardKey}
      data-symbol={props.cardFace}
    >
      <div className="front"></div>
      <div className="back"></div>
    </div>
  );
};

export default Card;
