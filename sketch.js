let size = 200;
let rx,ry;
let t = "You are the one who decides the destiny of this world.\n\n Everything seems to be in order and peace.\n\n - move mouse to center of 'heads' -";

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rx = random(width);
  ry = random(height);
}

function draw() {
  background(0);
  fill(255);
  text(txt,50,height/2-100,400,400);
  mouse();
  txt();
  for (let x = size*5; x <= width - size*1.5; x += 50) {
    for (let y = size; y <= height - size; y += 50) {
      push();
      translate(x, y);
      if (
        mouseX >= size - 20 &&
        mouseX <= width - size*1.5 + 20 &&
        mouseY >= size - 20 &&
        mouseY <= height - size + 20
      ) {
        t = "Now everyone becomes a victim of their own sin. \n\n Don't laugh at someone's situation, because you don't know when you might be in their situation.";
        rotate(atan2(mouseY - y, mouseX - x) - 90);
      } else{
      t = "Now is peace again.";
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
    mouseX >= size*5 - 20 &&
    mouseX <= width - size*1.8 + 20 &&
    mouseY >= size - 20 &&
    mouseY <= height - size + 20
  ) {
    fill(220, 20, 60);
    ellipse(mouseX, mouseY, 55, 55);
  }
}

function txt(){
    fill(255);
    text(t,size/2,size,500,500);
}
