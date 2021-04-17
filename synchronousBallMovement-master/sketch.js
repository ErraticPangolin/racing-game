var canvas,backgroundImg
var gameState = 0;
var playerCount;
var database;
var form;
var player;
var game;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}