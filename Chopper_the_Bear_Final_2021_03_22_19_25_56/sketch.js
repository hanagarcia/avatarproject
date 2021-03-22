let scarfbreeze;
let mic;
let miclevel;
let noseColor = 0
var xPos = 2;

function setup() {

  createCanvas(400, 400);


  mic = new p5.AudioIn();
  mic.start()
}

function draw() {
 
  console.log("mic level is" + mic.getLevel());


  scarfbreeze = map(mic.getLevel(), 0, 1, 120, 200);
  miclevel = mic.getLevel();

  background(178, 194, 219)
  noStroke();
  angleMode(DEGREES)
  drawsnow(width * .9, height * .7, 3);
  drawsnow(width * .01, height * .1, 3);
  drawsnow(width * .01, height * .7, 3);
  drawsnow(width * .9, height * .01, 3);
  drawfacesnoutbody();
  drawnose(noseColor);
  drawteeth(2, 6, 4);
  drawscarf();
  drawtopscarf(scarfbreeze * 20);
  drawbottomscarf(miclevel * 300);
  drawlefteye();
  drawrighteye();
  drawSnowflake1();
  drawSnowflake2();
  drawSnowflake3();
  drawSnowflake4();
}

function mousePressed() {
  //if the position of the mouse is inside with region then do this
  if (mouseX > width * .4 && mouseX < width * .7 && mouseY > height * .4 && mouseY < height * .5) {
    console.log("mouse beep");
    noseColor = color(39, 22, 128)
  } else {
    noseColor = 0
  }
}

function drawsnow(xPos, yPos, rotation) {
  push();
  translate(xPos, yPos);
  rotate(rotation);
  ellipseMode(CENTER)
  fill(255)
  ellipse(width * .0, height * .2, 20);
  ellipse(width * .1, height * .1, 20);
  ellipse(width * .1, height * .3, 20);
  ellipse(width * .0, height * .4, 20);
  ellipse(width * .1, height * .5, 20);
  pop();
}

function drawfacesnoutbody() {
  //face shape and color//
  fill(99, 49, 2);
  beginShape();
  vertex(width * .2, height * .8);
  vertex(width * .2, height * .1);
  vertex(width * .4, height * .1);
  vertex(width * .4, height * .2);
  vertex(width * .6, height * .2);
  vertex(width * .6, height * .1);
  vertex(width * .8, height * .1);
  vertex(width * .8, height * .8);
  endShape(CLOSE);

  //snout//

  fill(163, 82, 7)
  beginShape();
  vertex(width * .2, height * .6);
  vertex(width * .4, height * .4);
  vertex(width * .6, height * .4);
  vertex(width * .8, height * .6);
  vertex(width * .7, height * .7);
  vertex(width * .3, height * .7);
  endShape(CLOSE);

  //second part of body under scarf//
  fill(99, 49, 2)
  beginShape();
  vertex(width * .2, height * .9);
  vertex(width * .8, height * .9);
  vertex(width * .8, height * 1);
  vertex(width * .2, height * 1);
  endShape(CLOSE);
}

function drawnose(color) { //nose//
  push();
  fill(color);
  translate(width * .4, height * .4);
  rect(0, 0, width * .2, height * .1);
  pop();
}

function drawteeth() {
  //teeth//
  fill(255)
  beginShape();
  vertex(width * .3, height * .6);
  vertex(width * .7, height * .6);
  vertex(width * .65, height * .7);
  vertex(width * .6, height * .6);
  vertex(width * .55, height * .7);
  vertex(width * .5, height * .6);
  vertex(width * .45, height * .7);
  vertex(width * .4, height * .6);
  vertex(width * .35, height * .7);
  endShape(CLOSE);
}

function drawscarf() {
  //scarf pattern//
  fill(104, 0, 161)
  beginShape();
  vertex(width * .2, height * .8);
  vertex(width * .8, height * .8);
  vertex(width * .8, height * .9);
  vertex(width * .2, height * .9);
  endShape(CLOSE);
}

function drawtopscarf(rotation) {
  //top part of scarf//
  push();
  translate(width * .8, height * .8)
  rotate(rotation);
  fill(104, 0, 161)
  rect(0, 0, width * .2, height * .1)
  pop();
}

function drawbottomscarf(rotation) {
  //bottom part of scarf//
  push();
  translate(width * .8, height * .9)
  rotate(rotation);
  fill(104, 0, 161)
  rect(0, 0, width * .2, height * .1)
  pop();
}

function drawlefteye(rotation) {
  //left eye//
  push();
  translate(width * .3, height * .3)
  rotate(rotation)
  fill(0)
  rect(0, 0, width * .1, height * .1)
  pop();
}

function drawrighteye() {
  //right eye//
  fill(0)
  beginShape();
  vertex(width * .6, height * .3);
  vertex(width * .7, height * .3);
  vertex(width * .7, height * .4);
  vertex(width * .6, height * .4);
  endShape(CLOSE);
}
function drawSnowflake1(){
  fill(255);
  ellipse(xPos, height*.1 , 25,25);
  
  xPos = xPos + 1;
}
function drawSnowflake2(){
   fill(255);
  ellipse(xPos, height*.3 , 25,25);
  
  xPos = xPos + 1;
}
function drawSnowflake3(){
   fill(255);
  ellipse(xPos, height*.5 , 10,10);
  
  xPos = xPos + 1;
}
function drawSnowflake4(){
   fill(255);
  ellipse(xPos, height*.8 , 30,30);
  
    xPos = xPos + 1;}