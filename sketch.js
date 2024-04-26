let tre 
let x=0;
let cnv;

//r: 173, g: 216, b: 230
//rgb(196, 164, 132)

function preload(){
  tre = loadImage("trees.png")
}

function setup() {
    cnv = createCanvas(760, 760); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
    let cx = windowWidth / 2 - cnv.width / 2;
    let cy = windowHeight / 2 - cnv.width / 2;
    cnv.position(cx, cy);
  tre.resize(1600,0)
  noStroke()
}

function draw() {
  background(255);
  fill(173,216,230)
  rect(0,0,width,height/2)
  fill(196,164,132)
  rect(0,height/2,width,height)
  
  
  
  image(tre,x,height/5+50)
  image(tre,x+tre.width,height/5+50)
  
    
  image(tre,x*2,height/2.5+50)
  image(tre,(x+tre.width/2)*2,height/2.5+50)
  image(tre,(x+tre.width)*2,height/2.5+50)
  
  
  
  
  if(x < -tre.width) x=0
  x--
}