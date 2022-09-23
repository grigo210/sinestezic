let size = 200;
let rx,ry;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rx = random(width);
  ry = random(height);
}

function draw() {
  background(0);
  mouse();
  for (let x = size*3; x <= width - size*3; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      if (
        mouseX >= size - 20 &&
        mouseX <= width - size*3 + 20 &&
        mouseY >= size - 20 &&
        mouseY <= height - size + 20
      ) {
        rotate(atan2(mouseY - y, mouseX - x) - 90);
      } else{
      rotate(atan2(ry-y,rx-x)*frameCount*0.01);     
      }
      fill(255);
      ellipse(0, 0, 20, 24);
      pop();
    }
  }
}

function mouse() {
  if (
    mouseX >= size*3 - 20 &&
    mouseX <= width - size*3 + 20 &&
    mouseY >= size - 20 &&
    mouseY <= height - size + 20
  ) {
    fill(220, 20, 60);
    ellipse(mouseX, mouseY, 55, 55);
  }
}
