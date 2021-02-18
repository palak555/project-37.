var canva;
var gameState=0;
var contestant,contestantCount,quize,question;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quize=new Quize();
  quize.getState();
  quize.start();
}


function draw(){
  background("pink");

  
}
