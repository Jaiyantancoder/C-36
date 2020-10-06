var  database;
var position;

var gameState = 0;
var playerCount = 0;

var game,player,form;
var allplayerinfo;

function setup(){
  database = firebase.database();
 
  createCanvas(500,500);

  game = new Game();
  game.readState();
 console.log("hi");
 game.start();
  
}

function draw(){
  background("white");
  
   if(playerCount===4){
   game.update(1);
   }

   if(gameState===1){
    game.play();
   }



    drawSprites();
  
}


