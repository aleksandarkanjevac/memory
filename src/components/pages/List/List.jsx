import React from "react";
import "./list.scss";

function List() {
  const items = { ...localStorage };
  return (
    <div className="page-wrapper list-wrapper">
      <h3>SCORE LIST:</h3>
      <div className="table-wrapper">
        <div className="table-header">
          <div className="nickname">Nickname</div>
          <div className="game-level">Game Size</div>
          <div className="time-score">Time score</div>
        </div>
        {Object.values(items).map((value, label) => {
          let objValue = JSON.parse(value);
          return (
            <div className="table-items" key={label}>
              <div className="nickname-item">{objValue.nickname}</div>
              <div className="game-item">{objValue.game}</div>
              <div className="time-item">{objValue.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
