import React from 'react';
import './card.scss';
const Card = (props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      onClick={props.clickCard}
      data-hit={props.dataHit}
    >
      <div className="front"></div>
      <div className="back"></div>
    </div>
  );
};

export default Card;
