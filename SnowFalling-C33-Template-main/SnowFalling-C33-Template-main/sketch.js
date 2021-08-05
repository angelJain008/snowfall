var snow,backgroundImg,snowImg;

function preload(){
snowImg = loadImage ("snow4.webp")
backgroundImg = loadImage ("snow3.jpg")

}

function setup() {
  createCanvas(800,400);
  snow = createSprite(random(10,750), 200, 50, 50);
snow.addImage(snowImg)
snow.velocityY=2
snow.scale = 0.1
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}