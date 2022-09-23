let size = 150;
let rWidth;
let rHeight;
let sound1,sound2;

function setup() {
 // preload();
  createCanvas(700, 700);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rWidth = random(width);
  rHeight = random(height);
}
function draw() {
  background(0);
/*    //grid
    for (let i=0;i<width;i+=50) {
    for (let j=0;j<height;j+=50) {
    fill(0,255,0);
    rect(i,j,50,50);
    }}
  */
  mouse();
  for (let x = size; x <= width - size; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      if (
        mouseX >= size - 20 &&
        mouseX <= width - size + 20 &&
        mouseY >= size - 20 &&
        mouseY <= height - size + 20
      ) {
      //sound1.play();
      //sound1.setLoop(True);
        rotate(atan2(mouseY - y, mouseX - x) - 90);
      } else{
      //sound2.play();
      //sound2.setLoop(True);
      rotate(atan2(rHeight-y,rWidth-x*3)-90* frameCount*0.007);     
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
    mouseX <= width - size + 20 &&
    mouseY >= size - 20 &&
    mouseY <= height - size + 20
  ) {
    fill(220, 20, 60);
    ellipse(mouseX, mouseY, 55, 55);
  }
}
/*
function preload() {
  soundFormats('mp3','wav');
  sound1 = loadSound('https://www.shockwave-sound.com/sound-effects/laugh-sounds/peoplelaugh.wav');
  sound2 = loadSound('https://freesound.org/people/Breviceps/sounds/457043/');
}*/
