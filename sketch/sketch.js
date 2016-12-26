//sketch program

var circle = {
  x: 0,
  y: 300,
  diameter: 50
};

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(250, 250, 100);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  ellipse(circle.x, circle.y, 50, 50);
  
  circle.x = circle.x + 2;
  circle.y = circle.y - 1;
}
