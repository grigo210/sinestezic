let size = 200;
let script;
let sound;
let fade,fadeMotto ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  sound = new Audio('https://dl.dropboxusercontent.com/s/ei01e2vmt1f3pxi/mySong.mp3');
  fade = 0;
}

function draw() {
  background(0);
  
  //pointer
  if (
    mouseX >= size / 10 &&
    mouseX <= width - size / 10 &&
    mouseY >= size / 10 &&
    mouseY <= height - size / 10
  ) {
    fill(220, 20, 60,fade);
    ellipse(mouseX, mouseY, 55, 55);
  }
  
  //text
  if (
    mouseX >= size * 5 - 20 &&
    mouseX <= width - size * 1.5 - 15 &&
    mouseY >= size - 20 &&
    mouseY <= height - size - 22
  ) {
    script = "Now anyone can become a victim of their ridiculousness. \n\n Don't laugh about someone's situation...\n Cause you don't know when you might be in their place.";
    fadeMotto = 0;
    sound.play();
  } else {
    script = "You're the one who can decide where this world's awareness goes.\n\n Move your pointer to the people. ";
    fadeMotto = 0;
    sound.pause();
  }
  fill(250,fadeMotto);
  textSize(16);
  text(script, size, size, 500, 500);
  fill(250,fade);
  textSize(11);
  text('Created by Alexandru - Iulian Grigoraș', size, height - size - 50, 500, 100);
  
  //grid of ellipses
  for (let x = size * 5; x <= width - size * 1.5; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      rotate(atan2(mouseY - y, mouseX - x) - 90);
      ellipse(0, 0, 20, 23);
      pop();
    }
  }
    fade += 1;
    fadeMotto += 1;
}
