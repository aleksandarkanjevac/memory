import React, { useState, useEffect } from 'react';
import './board.scss';
import Card from '../../atoms/Card/Card';

function Board(props) {
  const player = props.location.state.player;
  const [cards, setCards] = useState([]);
  const [clickedCardsValues, setClickedCardsValues] = useState([]);

  useEffect(() => {
    setCards(renderCard(tt, false));
  }, []);
  useEffect(() => {
    compareClickedCards(clickedCardsValues);
  }, [clickedCardsValues]);

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

  //Methods for rendering Cards, shuffling cards, and adding symbol pairs to a cards faces
  ////////////////////////////////////////////////////////////////////////////////
  // makeCardsSymbolArray - form an array with card symbol pairs, depends of game level/number of cards user choose
  ///////////////////////////////////////////////////////////////////////////////
  let symbolArray = [];
  const makeCardsSymbolArray = (cardLimit) => {
    for (let i = 1; i <= cardLimit / 2; i++) {
      symbolArray.push(i);
    }
    symbolArray = symbolArray.concat(symbolArray);
    return symbolArray;
  };

  const shufflingCards = (symbolArray) => {
    let ctr = symbolArray.length;
    let temp;
    let index;
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = symbolArray[ctr];
      symbolArray[ctr] = symbolArray[index];
      symbolArray[index] = temp;
    }
    return symbolArray;
  };

  ///////////////////////////////////////////////////////////////////////////////
  const tt = shufflingCards(makeCardsSymbolArray(switchCardNo(player.game)));
  //////////////////////////////////////////////////////////////////////////////
  //renderCard return array of allCards info, for set in cards state
  /////////////////////////////////////////////////////////////////////////////

  const renderCard = (symbolArray, flipped) => {
    let allCards = [];
    symbolArray.map((cardNo, idKey) => {
      const cardInfo = {
        id: cardNo,
        cardFace: cardNo,
        isFlipped: flipped,
        isHit: false,
        cardID: idKey,
      };
      allCards.push(cardInfo);
    });
    return allCards;
  };
  ///////////////////////////////////////////////////////////////////////////////
  //handleCard
  /////////////////////////////////////////////////////////////////////////////

  const handleCard = (clickedCardInfo) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.cardID !== clickedCardInfo.cardID) return c;
        return { ...c, isFlipped: true };
      })
    );

    setClickedCardsValues([
      ...clickedCardsValues,
      [clickedCardInfo.cardFace, clickedCardInfo.cardID],
    ]);
  };
  //////////////////////////////////////////////////////////////////////////////////
  const compareClickedCards = (cardsValues) => {
    if (cardsValues.length == 2) {
    }
    if (cardsValues.length == 2 && cardsValues[0][0] === cardsValues[1][0]) {
      destroyCards(cardsValues[0][1], cardsValues[1][1]);
      setClickedCardsValues([]);
    } else if (
      cardsValues.length == 2 &&
      cardsValues[0][0] !== cardsValues[1][0]
    ) {
      flippCards(cardsValues[0][1], cardsValues[1][1]);
      setClickedCardsValues([]);
    }
  };
  ///////////////////////////////////////////////////////////////////////////////
  const flippCards = (Id, Id2) => {
    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) => {
          if (c.cardID !== Id && c.cardID !== Id2) return c;
          return { ...c, isFlipped: false };
        })
      );
    }, 1000);
  };
  /////////////////////////////////////////////////////////////////////////////
  const destroyCards = (Id, Id2) => {
    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) => {
          if (c.cardID !== Id && c.cardID !== Id2) return c;
          return { ...c, isHit: true };
        })
      );
    }, 1000);
  };
  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////
  return (
    <div className="wrapper">
      <div className="timer-wrapper"></div>
      <div className="card-wrapper">
        {cards.map((cardNo, idKey) => {
          return (
            <Card
              id={'card' + cardNo.id}
              key={idKey}
              className={cardNo.isFlipped ? 'card flipped' : 'card'}
              dataHit={cardNo.isHit ? 'hit' : ''}
              clickCard={(event) => {
                handleCard(cardNo);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
