let size = 200;
let script;
let sound;
let fadeShapeș

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  sound = new Audio('laugh.mp3');
  script = "You're the one who can decide where this world's awareness goes. \n\n Click once on this text to allow speaker, point your pointer to the people, then move around.";  
  fadeShape = 0;
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
    fill(220, 20, 60,fadeShape);
    ellipse(mouseX, mouseY, 55, 55);
  }
  
  //text
  if (
    mouseX >= size * 5.5 - 20 &&
    mouseX <= width - size - 15 &&
    mouseY >= size - 20 &&
    mouseY <= height - size - 22
  ) {
    script = "Anyone can become a victim of their ridiculousness. \n\n Don't laugh about someone's situation...\n Cause you don't know when you might be in their place.";
    sound.play();
  } else {
    sound.pause();
  }
  fill(255,fadeShape);
  textSize(16);
  text(script, size, size, 550, 500);
  textSize(11);
  text('Created by Alexandru - Iulian Grigoraș', size, height - size - 50, 500, 100);
  
  //grid of ellipses
  for (let x = size * 5.5; x <= width - size; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      rotate(atan2(mouseY - y, mouseX - x) - 90);
      ellipse(0, 0, 20, 23.5);
      pop();
    }
  }
    fadeShape += 1 ;
}
