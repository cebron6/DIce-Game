'use strict';


const winner = document.querySelector('#winner').innerHTML
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')


const diceImgs = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png',
 ]

img1.src = diceImgs[Math.floor(Math.random()* 6)];
img2.src = diceImgs[Math.floor(Math.random()* 6)];



