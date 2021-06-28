var backgroundImage;
var snow,snowImage1,snowImage2;

function preload(){ 
backgroundImage = loadImage("snow2.jpg");
snowImage1 = loadImage("snow4.webp");
snowImage2 = loadImage("snow5.webp");
}


function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background(backgroundImage);  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if (frameCount% 20 == 0){
   snow = createSprite(round(random(0,800)),0,50,50);
  //snow.addImage(snowImage1);
  snow.velocityY = 5;
  snow.scale = 0.1;

  var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: snow.addImage(snowImage1);
              break;
      case 2: snow.addImage(snowImage2);
              break;
      default: break;
    }
  } 
}