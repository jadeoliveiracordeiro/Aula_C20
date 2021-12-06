var retFixo, retMovendo;

function setup() {
  createCanvas(800,400);
  retFixo=createSprite(400, 200, 50, 80);
  retFixo.shapeColor = "green";
  retMovendo=createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  retMovendo.x=World.mouseX;
  retMovendo.y=World.mouseY;
  console.log(retMovendo.x - retFixo.x);
  if(retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2 && 
    retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2){
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
   
  }
  else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }

  drawSprites();
}