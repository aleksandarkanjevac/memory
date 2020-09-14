import React from 'react';
import './board.scss';
import { renderCards } from '../../../services/game-services';

function Board(props) {
  const player = props.location.state.player;

  const switchCardNo = (cardNo) => {
    switch (cardNo) {
      case 'small':
        return 8;

      case 'medium':
        return 12;
      case 'large':
        return 16;
      default:
        return 0;
    }
  };

  const no = switchCardNo(player.game);
  const wrapperClass = 'card-page--wrapper wrapper-' + no;
  console.log(wrapperClass);
  return (
    <div className={wrapperClass}>
      <div className="card-wrapper">{renderCards(no)}</div>
    </div>
  );
}

export default Board;
