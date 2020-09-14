import Card from '../components/atoms/Card/Card';
import React from 'react';

export const getPlayer = () => {
  console.log('Player Services!!');
};

//Method for storage Players data
export const setPlayers = (player) => {
  let data = localStorage.getItem('Players');
  data = data ? JSON.parse(data) : [];
  data.push(player);
  localStorage.setItem('Players', JSON.stringify(data));
};

//Method for rendering Cards, shuffling cards, and adding symbol pairs to a cards faces
export const renderCards = (cardLimit) => {
  let symbolArray = [];
  let allCards = [];
  let ctr = symbolArray.length;
  let temp;
  let index;

  for (let i = 1; i <= cardLimit / 2; i++) {
    symbolArray.push(i);
  }
  symbolArray = symbolArray.concat(symbolArray);

  //shuffling cards
  // While there are elements in the array
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
  //generate card components
  symbolArray.map((cardNo, idKey) => {
    allCards.push(
      <Card
        cardKey={idKey}
        cardFace={cardNo}
        clickCard={(event) => {
          handleCard(event);
        }}
      />
    );
  });
  return allCards;
};

let cardsValues = [];

export const handleCard = (event) => {
  let attribute = event.currentTarget.dataset.symbol;
  cardsValues.push(attribute);
  event.currentTarget.className = 'flipped';

  if (cardsValues.length === 2 && allEqual(cardsValues)) {
    setTimeout(function () {
      destroyCards(cardsValues[0]);
      cardsValues = [];
    }, 1000);
  } else if (cardsValues.length === 2 && !allEqual(cardsValues)) {
    let missedCards = document.querySelectorAll('.flipped');
    setTimeout(function () {
      flipCards(missedCards);
      cardsValues = [];
    }, 800);
  }
};

//check if cards are same, actually check if elements in array are  equal
const allEqual = (arr) => arr.every((val) => val === arr[0]);

//if cards are same destroyed them
const destroyCards = (card) => {
  let attr = '[data-symbol~="' + card + '"]';
  let uncoveredCard = document.querySelectorAll(attr);
  Object.keys(uncoveredCard).forEach(function (key) {
    uncoveredCard[key].style.display = 'none';
  });
};

const flipCards = (missedCards) => {
  Object.keys(missedCards).forEach(function (key) {
    missedCards[key].classList.remove('flipped');
  });
};
