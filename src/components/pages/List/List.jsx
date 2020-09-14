import React from 'react';
import './list.scss';
import { getPlayer } from '../../../services/game-services';
function List() {
  const items = JSON.parse(localStorage.getItem('Players'));

  return (
    <div className="page-wrapper list-wrapper">
      <h3
        onClick={() => {
          getPlayer();
        }}
      >
        SCORE LIST:
      </h3>
      <div className="table-wrapper">
        <div className="table-header">
          <div className="nickname">Nickname</div>
          <div className="game-level">Game Size</div>
          <div className="time-score">Time Score</div>
        </div>
        {Object.values(items).map((player, label) => {
          return (
            <div className="table-items" key={label}>
              <div className="nickname-item">{player.nickname}</div>
              <div className="game-item">{player.game}</div>
              <div className="time-item">{player.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
