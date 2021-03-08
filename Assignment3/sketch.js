let tiles =[];
let counter = 0;
function setup() {
  createCanvas(1400, 1400);

  for (var i = 0; i<75; i++){
    tiles.push(new Tile (random(100,700),random(100, 700), (i/2)));
  }
}

function draw() {

  background(lerpColor(color(255,105,180), color(255, 153, 51), (1/(counter/2))));
  button = createButton('Start/ Stop');
  button.position(1000, 19);
  button.mousePressed(toggle);

  for (var i =0; i<tiles.length; i++){
    tiles[i].move(keyIsPressed);
    tiles[i].display();
    tiles[i].evolve(keyIsPressed);
  }
  counter++;

}

class Tile{
//class for particles
// start x, y positions
constructor(x, y, s){
  this.posX = x;
  this.posY = y;
  this.size = s;
  this.corner = random(0,1);
  this.col = color(random(255), random(177), random(255));
} // end of constructor

display(){
  fill(this.col);
  square(this.posX, this.posY, this.size, this.corner);
}

move(bool){
  if (bool){
  this.posX += random(-5);
  this.posY += random(-10,10);
}
else {
  this.posX +=random(5);
  this.posY += random(-4,4);
}
}

evolve(bool){
  //pass boolean for key pressed check
if (bool){
  this.corner += random(.5);
  if (this.corner > 20){
    this.corner -= 10;
  }
  this.s+= random(-1,2);
  }
else {

  this.s += random(-10,10);
  }
}
}// end of class

function toggle(){
//if length of array is  not 0, means the pattern is currently running, so turn it off
  if (tiles.length > 0){
    for (var i = 0; i < 75; i++){
      tiles.pop();
    }
  }
  //else case
  else {
    for (var i = 0; i<75; i++){
      tiles.push(new Tile (random(450), 700, (i/2)));
    }
  }
}
