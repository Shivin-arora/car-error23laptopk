var gameState=0;
var playerCount;
var database,dbConnection;
var form,player,game;
var playersData;




function setup(){
createCanvas(1100,600);
database=firebase.database();

game = new Game();
game.getState();
game.start();

}
function draw(){
background("white");

if(playerCount===2){
    game.update(1);

}
if(gameState===1){
    clear();
    game.play();
}




}