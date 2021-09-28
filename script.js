'use strict';


const winner = document.querySelector('#winner')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const random1 = Math.floor(Math.random()* 6)
const random2 = Math.floor(Math.random()* 6)


const diceImgs = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png',
 ]

img1.src = diceImgs[random1];
img2.src = diceImgs[random2];


  if((random1 + 1) === (random2 + 1)){
    winner.innerHTML = 'Tie'
  }else if ((random1 + 1) > (random2 + 1)){
    winner.innerHTML = 'Player 1 Wins'
  } else {
     winner.innerHTML = 'Player 2 Wins'
  }



