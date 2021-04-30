var gameState = 0;
var playerCount;
var database;
var game,form

function setup(){
    
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.wait();
}

function draw(){ 
    
}

