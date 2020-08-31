import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import SelectField from "../../atoms/SelectField/SelectField";
import "./log.scss";

function Log() {
  const [cubeStyle, setStyle] = useState({});
  const [angle, setAngle] = useState(0);
  const [nickname, setNickname] = useState("");
  const [game, setGame] = useState("small");


  const player = {
    nickname: nickname,
    game: game,
    time: 0,
  };
  const goRight = () => {
    var elTransform =
      "translateZ(-184px) rotateY(" + rotateNext(angle) + "deg)";
    setStyle({
      transform: elTransform,
    });
  };
  const goLeft = () => {
    console.log("left");
    var elTransform =
      "translateZ(-184px) rotateY(" + rotatePrevious(angle) + "deg)";
    setStyle({
      transform: elTransform,
    });
  };

  const rotatePrevious = (angle) => {
    angle = angle + 90;
    setAngle(angle);
    return angle;
  };

  const rotateNext = (angle) => {
    angle = angle - 90;
    setAngle(angle);
    return angle;
  };

  const Storage = () => {
    localStorage.setItem(
      "Player " + new Date().getTime(),
      JSON.stringify(player)
    );
    window.location.href = "/board";
  };
  return (
    <div className="log-page--wrapper page-wrapper">
      <div className="container">
        <div className="cube-wrapper">
          <div style={cubeStyle} className="cube">
            <div className="cube__side cube__front">
              <div className="cube-input--wrapper">
                <TextInput
                  label="Nickname"
                  value={nickname}
                  change={(e) => setNickname(e.target.value)}
                />
              </div>
              <button className="cube__button--right" onClick={goRight}>
                &rarr;
              </button>
            </div>
            <div className="cube__side cube__right">
              <div className="cube-input--wrapper">
                <SelectField
                  value={game}
                  change={(e) => setGame(e.target.value)}
                  options={[
                    {'value': 'small', 'label': '4x4 Small'},
                    {'value': 'medium', 'label': '8x8 Medium'},
                    {'value': 'large', 'label': '12x12 Large'}
                  ]}
                />
              </div>
              <div className="lr-wrapp">
                <button className="cube__button--left" onClick={goLeft}>
                  &larr;
                </button>
                <button className="cube__button--right" onClick={goRight}>
                  &rarr;
                </button>
              </div>
            </div>
            <div className="cube__side cube__back">
              <div className="cube-input--wrapper">
                <button className="play-btn" onClick={Storage}>
                  PLAY
                </button>
              </div>
              <button className="cube__button--left" onClick={goLeft}>
                &larr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
