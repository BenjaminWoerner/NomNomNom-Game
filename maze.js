'use strict';

// create maze on canvas (initially just one) to be loaded in main (?)

//var canvas = document.getElementById("gameCanvas");
//var ctx = canvas.getContext("2d");

var wallsarray = [
  [50, 0, 10, 400],
  [150, 0, 10, 400],
  [250, 0, 10, 400],
  [350, 0, 10, 400],
  [450, 0, 10, 400],
  [200, 200, 10, 400],
  [300, 200, 10, 400],
  [500, 200, 10, 400],
];

function Wall (canvas) {
  this.size = 25;
  this.canvas = canvas;
  this.x = 100;
  this.y = 100;
  this.ctx = this.canvas.getContext('2d');
  this.wallsarray = wallsarray;
}

Wall.prototype.draw = function() {
  this.ctx.fillStyle = 'black';
  wallsarray.forEach ((element) => {
    this.ctx.fillRect(element[0], element[1], element[2], element[3]);
  });

}








//function buildMaze {

  //function drawWall () {
    // loop to interate over wall coordinates array and draw for each start/end position pair:
    
  ///}

  //function drawGoal (){
    //ctx.fillStyle = "#FF0000";
   // ctx.fillRect(0, 0, 150, 75);
  //}
  
  //function drawTreasure (){
   // ctx.fillStyle = yellow;
    //loop over Treasures Array and create treature for each new value pair
   // ctx.fillRect(x, y, 20, 20);
  //}


//}

// create classes for path, wall, goal, and treasure (initially just placeholder)

// Arrays that store coordinates for (path), wall, goal, and treasures

//wallStart => x, y
//wallEnd => x, y

//var wallCoordinates = {
  //wall1: [x, y, x, y];
  //wall2: [x, y, x, y];
  
//}

//var startX = [x1,x2, x3 ...]
//var startY = [x1,x2, x3 ...]

//[
  //{
   // startX: 2
  //  startY: 3
    
  //}
//]

