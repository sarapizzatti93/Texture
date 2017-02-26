function setup() {
  createCanvas(800,600);
  frameRate(1);


}

function draw() {
  for (x=-40;x<900;x+=30){
    for(y=-40;y<700;y+=30){
      
      var r=random()*255;
      var g=random()*255;
      
      noStroke();
      fill(r,g,255,90);
      
  beginShape();
  vertex(x,y);
  vertex(x+40,y);
  vertex(x+20,y+40);
  vertex(x-20,y+40);
  endShape();
    }
  }

}