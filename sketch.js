let size = 200;
let rx,ry;
let soundLaugh,soundSing;

function setup() {
  //soundFormats('mp3');
  //soundLaugh= loadSound('path/laugh.mp3');
 // soundSing = loadSound('https://freesound.org/people/Breviceps/sounds/457043/');
  createCanvas( 1920,1080);
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
      //soundLaugh.play();
      //soundLaugh.setLoop(True);
        rotate(atan2(mouseY - y, mouseX - x) - 90);
      } else{
      //soundSing.play();
      //soundSing.setLoop(True);
      rotate(atan2(ry-y,rx-x)*frameCount*0.009);     
      }
      fill(255);
      ellipse(0, 0, 20, 24);
      pop();
    }
  }
}
function mouse() {
  if (
    mouseX >= size - 20 &&
    mouseX <= width - size*3 + 20 &&
    mouseY >= size - 20 &&
    mouseY <= height - size + 20
  ) {
    fill(220, 20, 60);
    ellipse(mouseX, mouseY, 55, 55);
  }
}
