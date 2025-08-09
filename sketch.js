var d; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 0, 0);
  frameRate(50);
  // desactiva la funcion
}

function draw() {
   d=random(50-100);
  stroke(102, 155, 188);
  fill(253, 240, 213,50);
ellipse(mouseX,mouseY,d,d);
}
