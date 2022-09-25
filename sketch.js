let size = 200;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rx = random(width);
  ry = random(height);
}

function draw() {
  background(0);
  if (
    mouseX >= size / 10 &&
    mouseX <= width - size / 10 &&
    mouseY >= size / 10 &&
    mouseY <= height - size / 10
  ) {
    fill(220, 20, 60);
    ellipse(mouseX, mouseY, 55, 55);
  }
  if (
    mouseX >= size * 5 - 20 &&
    mouseX <= width - size * 1.5 &&
    mouseY >= size - 20 &&
    mouseY <= height - size - 5
  ) {
    t =
      "Now anyone can become a victim of ridiculous. \n\n Don't laugh about someone's situation, because you don't know when you might be in their situation.";
  } else {
    t =
      "You're the one who can decide where this world's awareness goes.\n\n Move your pointer to the people. ";
  }
   fill(255);
  textSize(16);
  text(t, size, size, 500, 500);
  for (let x = size * 5; x <= width - size * 1.5; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      rotate(atan2(mouseY - y, mouseX - x) - 90);
      fill(255);
      ellipse(0, 0, 20, 23);
      pop();
    }
  }
}
