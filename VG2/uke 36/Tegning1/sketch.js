function setup() {
  // put setup code here
  createCanvas(400, 400);
}
var x=50;; var fartX=3;
var y=60; var fartY=2;

function draw() {
  // put drawing code here
  background(220);
  stroke(255);
  strokeWeight(4);
  circle(x,y,50);
  //noFill();
  if (x>width){
    fartX=-3;fill("gray");
  }
    else if(x<0){
    fartX=3;fill("pink");
  } else if (y>height){
    fartY=-2; fill("blue");
  } else if (y<0){
    fartY=2;fill("green");
  }

  x=x+fartX;y=y+fartY;
  //if (mouseX>200){
  //  fill(255,0,200);
  }
  //if (muouseY>200){
    //fill(255,0,100);
  //}

  //rect(100,150,60,100);
//}
